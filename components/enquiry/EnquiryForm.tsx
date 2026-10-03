"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { brands, localities, machineTypes, timeSlots } from "@/data/content";
import { enquiryFields, isoToday } from "@/lib/schema";
import { getAttribution, trackConversion } from "@/lib/tracking";
import { site } from "@/config/site";
import { Loader } from "@/components/ui/Loader";
import { buttonStyles } from "./BookButton";
import { CallLink, WhatsAppLink } from "./ContactLinks";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

function loadRecaptcha() {
  if (!SITE_KEY || document.getElementById("recaptcha-v3")) return;
  const s = document.createElement("script");
  s.id = "recaptcha-v3";
  s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  s.async = true;
  document.head.appendChild(s);
}

async function getToken(): Promise<string> {
  if (!SITE_KEY) return "";
  for (let i = 0; i < 30 && !window.grecaptcha; i++) await new Promise((r) => setTimeout(r, 100));
  const g = window.grecaptcha;
  if (!g) return "";
  return new Promise((resolve) => g.ready(() => g.execute(SITE_KEY, { action: "enquiry" }).then(resolve, () => resolve(""))));
}

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const field =
  "mt-1.5 block w-full rounded-xl border border-ink-300 bg-white px-3.5 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-500/70 transition focus:border-brand-700 focus:ring-4 focus:ring-brand-100 focus:outline-none aria-invalid:border-red-500 aria-invalid:ring-red-100";
const label = "block text-sm font-semibold text-ink-900";

export function EnquiryForm({
  source,
  defaultBrand,
  defaultProblem,
  onDone,
}: {
  source: string;
  defaultBrand?: string;
  defaultProblem?: string;
  onDone: () => void;
}) {
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
    loadRecaptcha();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const values = { ...raw, consent: fd.get("consent") === "on" };

    const parsed = enquiryFields.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        errs[k] ??= issue.message;
      }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setServerError("");
    setStatus("submitting");

    try {
      const recaptchaToken = await getToken();
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          website: raw.website ?? "",
          startedAt: startedAt.current,
          recaptchaToken,
          source,
          pageUrl: window.location.href,
          ...getAttribution(),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; leadId?: string; error?: string; fields?: Errors };
      if (!res.ok || !json.ok) {
        if (json.fields) setErrors(json.fields);
        throw new Error(json.error ?? "Something went wrong");
      }
      setLeadId(json.leadId ?? "");
      setStatus("success");
      trackConversion(source);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="fade-in px-5 py-10 text-center sm:px-8" role="status">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-50">
          <CheckCircle2 className="size-9 text-success-600" aria-hidden />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold">Request received!</h3>
        {leadId && (
          <p className="mt-2 text-sm text-ink-500">
            Reference: <span className="font-mono font-semibold text-ink-900">{leadId}</span>
          </p>
        )}
        <p className="mx-auto mt-3 max-w-sm text-ink-700">
          We&apos;ll call you shortly to confirm the visit ({site.hours.label}). Need us sooner? Reach out directly:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallLink source="success" />
          <WhatsAppLink source="success" />
        </div>
        <button type="button" onClick={onDone} className="mt-6 cursor-pointer text-sm font-semibold text-ink-500 underline-offset-4 hover:underline">
          Close
        </button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-red-600">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: string) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-4 px-5 pt-5 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8">
      <div>
        <label htmlFor="f-name" className={label}>
          Your name <span className="text-accent-600">*</span>
        </label>
        <input id="f-name" name="name" autoComplete="name" required maxLength={60} className={field} placeholder="e.g. Priya Shah" {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="f-mobile" className={label}>
          Mobile number <span className="text-accent-600">*</span>
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute top-1/2 left-3.5 mt-[3px] -translate-y-1/2 text-[0.95rem] text-ink-500">+91</span>
          <input
            id="f-mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            required
            maxLength={14}
            className={clsx(field, "pl-12")}
            placeholder="98XXX XXXXX"
            {...aria("mobile")}
          />
        </div>
        {err("mobile")}
      </div>

      <div>
        <label htmlFor="f-locality" className={label}>
          Area / nearest station
        </label>
        <select id="f-locality" name="locality" className={field} defaultValue="" {...aria("locality")}>
          <option value="">Select area</option>
          {localities.map((l) => (
            <option key={l}>{l}</option>
          ))}
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-brand" className={label}>
          Machine brand
        </label>
        <select id="f-brand" name="brand" className={field} defaultValue={defaultBrand ?? ""}>
          <option value="">Select brand</option>
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
          <option>Not sure</option>
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={label}>Machine type</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {machineTypes.map((m) => (
            <label key={m} className="cursor-pointer">
              <input type="radio" name="machineType" value={m} className="peer sr-only" />
              <span className="inline-block rounded-full border border-ink-300 px-3.5 py-2 text-sm font-medium text-ink-700 transition peer-checked:border-accent-600 peer-checked:bg-accent-50 peer-checked:text-accent-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-100 hover:border-ink-500">
                {m}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="f-problem" className={label}>
          What&apos;s the problem?
        </label>
        <textarea
          id="f-problem"
          name="problem"
          rows={3}
          maxLength={500}
          defaultValue={defaultProblem}
          className={clsx(field, "resize-y")}
          placeholder="e.g. Not draining, shows error E18, loud noise while spinning…"
          {...aria("problem")}
        />
        {err("problem")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="f-address" className={label}>
          Address / landmark
        </label>
        <input id="f-address" name="address" autoComplete="street-address" maxLength={200} className={field} placeholder="Building, road, landmark" {...aria("address")} />
        {err("address")}
      </div>

      <div>
        <label htmlFor="f-date" className={label}>
          Preferred date
        </label>
        <input id="f-date" name="preferredDate" type="date" min={isoToday()} max={isoToday(14)} className={field} {...aria("preferredDate")} />
        {err("preferredDate")}
      </div>
      <div>
        <label htmlFor="f-slot" className={label}>
          Preferred time
        </label>
        <select id="f-slot" name="preferredSlot" className={field} defaultValue="Any time">
          {timeSlots.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-700">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-accent-600"
            {...aria("consent")}
          />
          <span>
            I agree to be contacted by phone/WhatsApp about this request, and to the{" "}
            <Link href="/privacy" target="_blank" className="font-semibold text-brand-700 underline underline-offset-2">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {err("consent")}
      </div>

      {status === "error" && (
        <div role="alert" className="flex gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">{serverError || "We couldn't send your request."}</p>
            <p className="mt-1">
              Please call us on{" "}
              <a href={site.phone.href} className="font-semibold underline">
                {site.phone.display}
              </a>{" "}
              or{" "}
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                WhatsApp us
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={clsx(buttonStyles.base, buttonStyles.primary, buttonStyles.lg, "w-full disabled:cursor-wait disabled:opacity-80")}
        >
          {status === "submitting" ? (
            <>
              <Loader className="size-5" /> Sending…
            </>
          ) : (
            "Request a call back"
          )}
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-500">
          No payment needed now. You get a quote before any work starts.
          {SITE_KEY && (
            <>
              <br />
              Protected by reCAPTCHA. Google{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                Privacy
              </a>{" "}
              &amp;{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                Terms
              </a>{" "}
              apply.
            </>
          )}
        </p>
      </div>
    </form>
  );
}

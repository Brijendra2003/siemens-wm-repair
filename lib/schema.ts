import { z } from "zod";
import { machineTypes, timeSlots } from "@/data/content";

/** Strip control chars (except newline/tab) and trim. */
const clean = (v: unknown) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim() : v;

const optionalText = (max: number) =>
  z.preprocess(clean, z.string().max(max, `Please keep this under ${max} characters`).optional().default(""));

export function normaliseMobile(v: string) {
  let d = v.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

function isoToday(offsetDays = 0) {
  const d = new Date(Date.now() + 5.5 * 3600_000 + offsetDays * 86400_000);
  return d.toISOString().slice(0, 10);
}

export const enquiryFields = z.object({
  name: z.preprocess(
    clean,
    z
      .string()
      .min(2, "Please enter your name")
      .max(60, "Name is too long")
      .regex(/^[\p{L} .'-]+$/u, "Use letters only"),
  ),
  mobile: z.preprocess(
    (v) => (typeof v === "string" ? normaliseMobile(v) : v),
    z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  ),
  locality: optionalText(60),
  brand: optionalText(40),
  machineType: z.preprocess(clean, z.union([z.enum(machineTypes), z.literal("")]).optional().default("")),
  problem: optionalText(500),
  address: optionalText(200),
  preferredDate: z.preprocess(
    clean,
    z
      .union([
        z.literal(""),
        z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/)
          .refine((d) => d >= isoToday(-1) && d <= isoToday(14), "Pick a date within the next 2 weeks"),
      ])
      .optional()
      .default(""),
  ),
  preferredSlot: z.preprocess(clean, z.union([z.enum(timeSlots), z.literal("")]).optional().default("")),
  consent: z.literal(true, { error: "Please agree so we can contact you" }),
});

export const enquiryPayload = enquiryFields.extend({
  website: z.string().max(0).optional().default(""), // honeypot
  startedAt: z.number().int().positive(),
  recaptchaToken: z.string().max(4000).optional().default(""),
  source: optionalText(40),
  pageUrl: optionalText(500),
  referrer: optionalText(500),
  gclid: optionalText(200),
  utm_source: optionalText(100),
  utm_medium: optionalText(100),
  utm_campaign: optionalText(150),
  utm_term: optionalText(150),
});

export type EnquiryPayload = z.infer<typeof enquiryPayload>;
export { isoToday };

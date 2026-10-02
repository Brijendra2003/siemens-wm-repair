import { Floaters } from "@/components/illustrations/Decor";
import { Check, IndianRupee, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { Container, SectionHeading } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";

const promises = [
  "Visit/inspection charge told to you on the call, before booking",
  "Written quote after diagnosis. Work starts only after your OK",
  "Choice of OEM or compatible parts, price shown upfront",
  "Pay after the repair is tested: UPI or cash",
  "Invoice with parts used and warranty terms",
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative overflow-hidden bg-brand-50 py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "washer", top: "8%", right: "5%", size: 58, rot: 12, desktopOnly: true },
          { kind: "screwdriver", top: "12%", left: "6%", size: 46, rot: 40, desktopOnly: true },
          { kind: "bubble", bottom: "6%", left: "48%", size: 30, opacity: 0.8 },
          { kind: "sparkle", top: "6%", left: "30%", size: 18, motion: "twinkle" },
        ]}
      />
      <Container className="relative">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing & warranty"
          title={
            <>
              Clear prices. <span className="text-accent-600">Real warranty.</span>
            </>
          }
          intro="Every repair is different, so we never quote blind. Here's exactly how pricing works with us."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="reveal-left rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 sm:p-9">
            <span className="grid size-12 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <IndianRupee className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold">How pricing works</h3>
            {site.visitCharge != null ? (
              <p className="mt-3 text-ink-700">
                Visit &amp; inspection: <strong className="text-3xl font-extrabold text-ink-900">₹{site.visitCharge}</strong>
              </p>
            ) : (
              <p className="mt-3 text-ink-700">The final price depends on the fault and any parts needed. You always see the quote first.</p>
            )}
            <ul className="mt-6 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] text-ink-700">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green-50">
                    <Check className="size-3.5 text-success-600" strokeWidth={3} aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
          <article className="reveal-right relative overflow-hidden rounded-3xl bg-brand-900 p-7 text-brand-100 shadow-lift sm:p-9">
            <div aria-hidden className="blob absolute -right-16 -bottom-16 size-64 bg-brand-700/35" />
            <span className="relative grid size-12 place-items-center rounded-xl bg-white/10 text-accent-200">
              <ShieldCheck className="size-6" aria-hidden />
            </span>
            <h3 className="relative mt-5 text-2xl font-extrabold text-white!">{site.warranty.headline}</h3>
            <p className="relative mt-3 leading-relaxed text-brand-200/90">{site.warranty.detail}</p>
            <ul className="relative mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <li className="rounded-xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                <strong className="block text-white">Covered</strong>
                The replaced part and the fault it fixed
              </li>
              <li className="rounded-xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                <strong className="block text-white">Not covered</strong>
                Physical/water damage, power surges, tampering by others
              </li>
            </ul>
            <p className="hand relative mt-6 text-2xl text-accent-200!">Same fault again? We come back free.</p>
            <div className="relative mt-6">
              <BookButton source="pricing">Get a Quote</BookButton>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

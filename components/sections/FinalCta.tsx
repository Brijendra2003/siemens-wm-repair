import { SceneArt } from "@/components/illustrations/SceneArt";
import { Floaters } from "@/components/illustrations/Decor";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { WhatsAppLink } from "@/components/enquiry/ContactLinks";
import { TeamScene } from "@/components/illustrations/Scenes";

/** The reference's closing "Let's work together" band. */
export function FinalCta() {
  const rows = [
    { icon: MapPin, label: site.serviceAreaLabel },
    { icon: Phone, label: site.phone.display, href: site.phone.href },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: site.hours.label },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "gear", top: "8%", right: "6%", size: 44, desktopOnly: true },
          { kind: "screwdriver", bottom: "10%", right: "4%", size: 48, rot: -30, desktopOnly: true },
          { kind: "bubbles", top: "10%", left: "44%", size: 44, opacity: 0.8 },
          { kind: "sparkle", bottom: "16%", left: "48%", size: 18, motion: "twinkle" },
        ]}
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <div className="reveal-left order-2 mx-auto w-full max-w-[560px] lg:order-1">
          <SceneArt name="team" width={1200} height={1000} alt="Our technician with two happy customers after a repair" fallback={<TeamScene />} />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow">Contact us</p>
          <h2 id="contact-title" className="mt-3 text-4xl leading-[1.05] font-extrabold sm:text-5xl">
            Clean clothes.
            <span className="block">
              <span className="text-accent-600">Zero</span> stress.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-500">
            Tell us what&apos;s wrong with your machine and we&apos;ll call you back to fix a convenient time.
          </p>
          <ul className="mt-7 space-y-3.5">
            {rows.map(({ icon: I, label, href }) => (
              <li key={label} className="flex items-center gap-3 text-ink-700">
                <span className="grid size-9 place-items-center rounded-lg bg-accent-50 text-accent-600">
                  <I className="size-4" aria-hidden />
                </span>
                {href ? (
                  <a href={href} className="font-medium hover:text-accent-700">
                    {label}
                  </a>
                ) : (
                  <span className="font-medium">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton source="final-cta" size="lg" className="btn-shine">
              Book a Repair
            </BookButton>
            <WhatsAppLink source="final-cta" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}

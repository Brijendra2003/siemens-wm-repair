import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { nav } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 pb-28 text-brand-100 md:pb-0">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-200/80">{site.tagline}.</p>
          <p className="hand mt-4 text-2xl text-accent-200!">&ldquo;Clean clothes, zero stress.&rdquo;</p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white! uppercase">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white! uppercase">Policies</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <h3 className="text-sm font-bold tracking-wider text-white! uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
              <a href={site.phone.href} className="font-semibold text-white hover:text-accent-200">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
              <span>
                {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
                <br />
                <span className="text-brand-200/70">Serving {site.serviceAreaLabel}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
              {site.hours.label}
            </li>
          </ul>
        </address>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-xs leading-relaxed text-brand-200/70">
          <p>
            <strong className="text-brand-100">Disclaimer:</strong> {site.disclaimer}
          </p>
          <p className="mt-3">
            © {year} {site.legalName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

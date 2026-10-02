import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for washing machine repair services booked with ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated="2 October 2026">
      <p>By booking a service with {site.legalName}, you agree to these terms.</p>
      <h2>Our service</h2>
      <p>
        We provide independent doorstep repair, servicing and installation of washing machines in Mumbai.{" "}
        {site.disclaimer}
      </p>
      <h2>Bookings &amp; visits</h2>
      <ul>
        <li>Visit times are confirmed by phone. Same-day or next-day visits are subject to technician availability.</li>
        <li>Please ensure an adult is present and the machine is accessible, with power and water supply.</li>
      </ul>
      <h2>Quotes &amp; charges</h2>
      <ul>
        <li>Any visit/inspection charge is communicated before the booking is confirmed.</li>
        <li>After diagnosis, the technician shares a quote. Repairs begin only after your approval.</li>
        <li>Spare parts may be OEM or compatible; the option and price are agreed with you before fitting.</li>
        <li>Payment is due on completion, by UPI or cash, against an invoice.</li>
      </ul>
      <h2>Warranty</h2>
      <p>
        {site.warranty.detail} Warranty does not cover physical or liquid damage, power surges, misuse, or repairs or
        tampering by third parties after our visit. Labour for an unrelated new fault is chargeable.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        Older machines may have pre-existing wear that a repair cannot fully resolve; our technician will tell you if
        a repair is not economical. Our liability is limited to the amount paid for the specific repair.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with jurisdiction in Mumbai courts.</p>
      <h2>Contact</h2>
      <p>
        <a href={site.phone.href}>{site.phone.display}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Cancellation, rescheduling and refund terms for ${site.name}.`,
  alternates: { canonical: "/refund-policy" },
};

export default function Page() {
  return (
    <LegalPage title="Refund & Cancellation Policy" path="/refund-policy" updated="2 October 2026">
      <h2>No advance payment</h2>
      <p>We do not take payment when you book. You pay only after the work is done and tested.</p>
      <h2>Cancelling or rescheduling</h2>
      <ul>
        <li>You can cancel or reschedule free of charge any time before the technician leaves for your address. Just call or WhatsApp us.</li>
        <li>If you cancel after the technician has arrived, only the visit/inspection charge told to you at booking (if any) applies.</li>
        <li>If you decline the quote after diagnosis, you pay only that visit/inspection charge (if any). No repair charges apply.</li>
      </ul>
      <h2>Refunds</h2>
      <ul>
        <li>If a replaced part fails within its warranty period because of a defect, we repair or replace it free of charge.</li>
        <li>If the same fault cannot be fixed on revisit, we refund the amount paid for that part and its labour.</li>
        <li>Approved refunds are made to the original payment method (UPI/bank) within 7 working days.</li>
      </ul>
      <h2>How to request</h2>
      <p>
        Call <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with your invoice number.
      </p>
    </LegalPage>
  );
}

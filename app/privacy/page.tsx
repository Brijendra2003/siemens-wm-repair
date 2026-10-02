import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="2 October 2026">
      <p>
        This policy explains how {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information you share
        when you use this website or book a washing machine repair.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Details you enter in the enquiry form: name, mobile number, area, address/landmark, machine brand and type, problem description, preferred date and time.</li>
        <li>Technical data: pages visited, browser type, an anonymised (hashed) IP address, and the advertising click identifiers (such as gclid and UTM tags) in the link you used to reach us.</li>
      </ul>
      <p>We do <strong>not</strong> collect sensitive data such as Aadhaar numbers, bank or card details, OTPs or passwords. We will never ask for these.</p>
      <h2>How we use it</h2>
      <ul>
        <li>To call or WhatsApp you about your repair request and to schedule a technician visit.</li>
        <li>To issue invoices and honour warranty claims.</li>
        <li>To measure which adverts and pages bring enquiries, so we can improve our service.</li>
        <li>To protect the form against spam and abuse.</li>
      </ul>
      <h2>Cookies, analytics &amp; advertising</h2>
      <p>
        We may use Google Analytics and Google Ads conversion tracking, which set cookies to measure visits and
        enquiries. We use Google reCAPTCHA to protect our form; its use is subject to the Google{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>. You
        can control cookies through your browser settings and manage ad personalisation at{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.
      </p>
      <h2>Storage &amp; sharing</h2>
      <p>
        Enquiries are stored in a private Google Sheet and sent to us by email. Only our team and the technician
        assigned to your job see your details. We do not sell or rent your data. We may disclose information if
        required by law.
      </p>
      <h2>Retention</h2>
      <p>We keep enquiry and job records for as long as needed for service, warranty and legal/tax purposes, and then delete them.</p>
      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete your data, or to stop contacting you, by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or calling <a href={site.phone.href}>{site.phone.display}</a>.
      </p>
      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.address.street}, {site.address.locality}, {site.address.region}{" "}
        {site.address.postalCode}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}

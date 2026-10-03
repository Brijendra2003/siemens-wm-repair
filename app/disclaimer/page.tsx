import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `${site.name} is an independent washing machine repair service, not affiliated with any brand.`,
  alternates: { canonical: "/disclaimer" },
};

export default function Page() {
  return (
    <LegalPage title="Disclaimer" path="/disclaimer" updated="2 October 2026">
      <h2>Independent service</h2>
      <p>{site.disclaimer}</p>
      <p>
        {site.legalName} is not an authorized service centre, official customer care or helpline of any manufacturer.
        For manufacturer warranty repairs, please contact the brand directly. Repairs by an independent technician
        may affect an active manufacturer warranty.
      </p>
      <h2>Trademarks</h2>
      <p>
        Siemens and Bosch are trademarks of their respective owners. They are used on this website only
        to identify the machines we are able to repair.
      </p>
      <h2>Spare parts</h2>
      <p>
        We use quality-checked OEM or compatible spare parts. The type of part and its price are agreed with you
        before fitting.
      </p>
      <h2>Information on this site</h2>
      <p>
        Troubleshooting tips are general guidance. Always switch off and unplug your machine before any check, and
        call a technician if you are unsure.
      </p>
    </LegalPage>
  );
}

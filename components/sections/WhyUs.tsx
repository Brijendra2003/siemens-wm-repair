import { Floaters } from "@/components/illustrations/Decor";
import { whyUs } from "@/data/content";
import { SectionHeading } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { IconRow } from "./FeatureStrip";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="relative overflow-hidden border-y border-ink-100 bg-white py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "wrench", top: "14%", left: "6%", size: 48, rot: -30, desktopOnly: true },
          { kind: "gear", bottom: "14%", right: "6%", size: 46, desktopOnly: true },
          { kind: "sparkle", top: "18%", right: "18%", size: 20, motion: "twinkle" },
          { kind: "dots", bottom: "8%", left: "4%", size: 64, motion: "none", px: 20 },
        ]}
      />
      <SectionHeading
        id="why-title"
        eyebrow="Why choose us"
        title={
          <>
            Repairs done <span className="text-accent-600">the honest way</span>
          </>
        }
      />
      <IconRow items={whyUs} label="Reasons to choose us" className="mt-12" />
      <div className="mt-10 text-center">
        <BookButton source="why-us">Book a Repair</BookButton>
      </div>
    </section>
  );
}

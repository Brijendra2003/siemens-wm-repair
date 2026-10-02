import { Floaters } from "@/components/illustrations/Decor";
import { MessageCircleQuestion } from "lucide-react";
import { problems } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { BookButton } from "@/components/enquiry/BookButton";
import { WhatsAppLink } from "@/components/enquiry/ContactLinks";

export function Problems() {
  return (
    <section id="problems" aria-labelledby="problems-title" className="relative overflow-hidden py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "drop", top: "10%", right: "4%", size: 30, desktopOnly: true },
          { kind: "bubbles", bottom: "8%", left: "3%", size: 54, opacity: 0.8 },
          { kind: "topload", top: "60%", right: "2%", size: 46, rot: 8, desktopOnly: true },
        ]}
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            id="problems-title"
            eyebrow="Troubleshooting"
            title={
              <>
                Common washing machine <span className="text-accent-600">problems</span>
              </>
            }
            intro="Quick checks you can try before booking, and what usually causes each fault. If the problem continues, our technician can take a look."
          />
          <div className="reveal mt-8 rounded-2xl bg-accent-50 p-6 ring-1 ring-accent-100">
            <MessageCircleQuestion className="size-7 text-accent-600" aria-hidden />
            <p className="mt-3 font-bold text-ink-900">Seeing an error code?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-700">
              Send us a photo of the display and the model sticker. It helps us bring the right part on the first visit.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppLink source="problems" size="sm" label="Send on WhatsApp" />
              <BookButton source="problems" size="sm" variant="ghost">
                Book a visit
              </BookButton>
            </div>
          </div>
        </div>
        <div className="reveal-right">
          <Accordion items={problems} name="problems" />
        </div>
      </Container>
    </section>
  );
}

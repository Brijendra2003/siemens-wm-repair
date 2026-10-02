import { Floaters } from "@/components/illustrations/Decor";
import { ExternalLink, Star } from "lucide-react";
import { site } from "@/config/site";
import { faqs } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { BookButton } from "@/components/enquiry/BookButton";

/** Reviews: only shows a Google link once a real profile URL is configured. */
export function Reviews() {
  if (!site.googleReviewsUrl) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="pb-4">
      <Container>
        <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-ink-100 sm:flex-row sm:text-left">
          <div>
            <div className="flex justify-center gap-1 sm:justify-start" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <h2 id="reviews-title" className="mt-3 text-2xl font-extrabold">
              Read what our customers say
            </h2>
            <p className="mt-1 text-ink-500">Real, unedited reviews on our Google Business Profile.</p>
          </div>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink-900 shadow-soft ring-1 ring-ink-300 hover:-translate-y-0.5"
          >
            Read reviews on Google <ExternalLink className="size-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-brand-50 py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "washer", top: "14%", left: "7%", size: 70, rot: -12, desktopOnly: true },
          { kind: "wrench", top: "50%", right: "8%", size: 54, rot: 25, desktopOnly: true },
          { kind: "bubbles", bottom: "12%", left: "10%", size: 56, desktopOnly: true },
          { kind: "sock", top: "10%", right: "10%", size: 42, rot: 18, desktopOnly: true },
          { kind: "sparkle", bottom: "20%", right: "16%", size: 20, motion: "twinkle" },
        ]}
      />
      <Container className="relative max-w-3xl!">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-accent-600">Answered.</span>
            </>
          }
        />
        <div className="reveal mt-12">
          <Accordion items={faqs} name="faq" />
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-ink-500">Still have a question? We&apos;re happy to help.</p>
          <BookButton source="faq">Ask a Technician</BookButton>
        </div>
      </Container>
    </section>
  );
}

import { Floaters } from "@/components/illustrations/Decor";
import { steps } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BookButton } from "@/components/enquiry/BookButton";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden bg-brand-900 py-20 text-brand-100 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-brand-700/30 blur-3xl" />
      <Floaters
        tone="dark"
        items={[
          { kind: "gear", top: "8%", left: "5%", size: 54, opacity: 0.5, desktopOnly: true },
          { kind: "wrench", bottom: "10%", left: "8%", size: 46, rot: 30, opacity: 0.6, desktopOnly: true },
          { kind: "washer", top: "12%", right: "7%", size: 58, rot: 10, opacity: 0.55 },
          { kind: "nut", bottom: "14%", right: "10%", size: 30, opacity: 0.5, desktopOnly: true },
          { kind: "sparkle", top: "30%", left: "20%", size: 18, motion: "twinkle" },
          { kind: "sparkle", bottom: "28%", right: "22%", size: 14, motion: "twinkle", delay: -1 },
        ]}
      />
      <Container className="relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-accent-200!">How it works</p>
          <h2 id="process-title" className="mt-3 text-3xl leading-[1.1] font-extrabold text-white! sm:text-4xl lg:text-[2.75rem]">
            Fixed in <span className="text-accent-500">4 simple steps</span>
          </h2>
          <p className="mt-4 text-brand-200/90 sm:text-lg">No guesswork, no surprise bills. You approve every step.</p>
        </div>
        <div className="relative mt-14">
        <ol className="stagger relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} style={{ "--i": i } as React.CSSProperties} className="group relative rounded-2xl bg-brand-900/80 p-6 ring-1 ring-white/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:bg-brand-800 hover:ring-accent-500/50">
              <div className="flex items-center justify-between">
                <span className="anim-pulse-ring grid size-12 place-items-center rounded-xl bg-accent-600 text-white shadow-cta" style={{ "--delay": i * 0.6 + "s" } as React.CSSProperties}>
                  <Icon name={s.icon} className="wiggle-target size-6" />
                </span>
                <span className="text-5xl font-extrabold text-white/10" aria-hidden>
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white!">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200/85">{s.text}</p>
            </li>
          ))}
        </ol>
        </div>
        <div className="mt-12 text-center">
          <BookButton source="process" size="lg">
            Start with Step 1
          </BookButton>
        </div>
      </Container>
    </section>
  );
}

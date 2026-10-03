import { SceneArt } from "@/components/illustrations/SceneArt";
import { Floaters } from "@/components/illustrations/Decor";
import { Check, Info } from "lucide-react";
import { site } from "@/config/site";
import { brands } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { BrandsScene } from "@/components/illustrations/Scenes";

const brandPoints = ["Front load & top load", "Error codes & PCB faults", "Drum, bearing & motor"];

/** Mirrors the reference's "Professional experience" block: art left, copy + brand cards right. */
export function Brands() {
  return (
    <section id="brands" aria-labelledby="brands-title" className="relative overflow-hidden py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "screwdriver", top: "8%", right: "4%", size: 50, rot: -25, desktopOnly: true },
          { kind: "nut", bottom: "12%", right: "8%", size: 30, desktopOnly: true },
          { kind: "sock", bottom: "8%", left: "3%", size: 44, rot: -18, desktopOnly: true },
          { kind: "sparkle", top: "12%", left: "44%", size: 18, motion: "twinkle" },
          { kind: "squiggle", top: "6%", left: "6%", size: 90, motion: "none", px: 30 },
        ]}
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal-left mx-auto w-full max-w-[560px]">
          <SceneArt name="brands" width={1120} height={1000} alt="Technician with a clipboard beside a washing machine and repair toolbox" fallback={<BrandsScene />} />
        </div>
        <div>
          <p className="eyebrow">Brands we repair</p>
          <h2 id="brands-title" className="mt-3 text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Only Siemens &amp; Bosch.
            <span className="block text-accent-600">Nothing else.</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-ink-900">Front load · Top load · Washer-dryer</p>
          <p className="mt-3 max-w-lg leading-relaxed text-ink-500">
            We work on just two brands, so our technicians know these machines inside out: their error codes,
            common faults and the spares they need. That means faster diagnosis and fewer repeat visits.
          </p>

          <ul className="stagger mt-8 grid gap-4 sm:grid-cols-2">
            {brands.map((b, i) => (
              <li
                key={b}
                style={{ "--i": i } as React.CSSProperties}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-accent-200"
              >
                <span aria-hidden className="blob absolute -top-10 -right-10 size-32 bg-accent-50 transition-transform duration-500 group-hover:scale-125" />
                <p className="relative text-[0.7rem] font-bold tracking-[0.18em] text-ink-500 uppercase">Specialists in</p>
                <h3 className="relative mt-1 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">{b}</h3>
                <p className="relative mt-1 text-sm font-semibold text-accent-700">washing machines</p>
                <ul className="relative mt-4 space-y-1.5 text-sm text-ink-700">
                  {brandPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-success-600" strokeWidth={3} aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <BookButton
                  source={`brand-${b.toLowerCase()}`}
                  brand={b}
                  size="sm"
                  className="relative mt-5 w-full"
                >
                  Book {b} repair
                </BookButton>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex gap-2 rounded-xl bg-brand-50 p-4 text-xs leading-relaxed text-ink-700 ring-1 ring-brand-100">
            <Info className="mt-px size-4 shrink-0 text-brand-700" aria-hidden />
            {site.disclaimer}
          </p>
          <div className="mt-6">
            <BookButton source="brands">Book a Technician</BookButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

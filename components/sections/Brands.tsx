import { SceneArt } from "@/components/illustrations/SceneArt";
import { Floaters } from "@/components/illustrations/Decor";
import { Info } from "lucide-react";
import { site } from "@/config/site";
import { brands } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { BrandsScene } from "@/components/illustrations/Scenes";

/** Mirrors the reference's "Professional experience" block: art left, copy + card grid right. */
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
            Siemens &amp; all branded
            <span className="block text-accent-600">washing machines</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-ink-900">Front load · Top load · Semi-automatic</p>
          <p className="mt-3 max-w-lg leading-relaxed text-ink-500">
            Whether it&apos;s a Siemens or Bosch front loader, an LG direct-drive or a Samsung top loader,
            our technicians repair most makes and models found in Mumbai homes.
          </p>

          <p className="eyebrow mt-8">Machines we work on</p>
          <ul className="stagger mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {brands.map((b, i) => (
              <li key={b} style={{ "--i": i } as React.CSSProperties}>
                <BookButton
                  source={`brand-${b.toLowerCase().replace(/\s+/g, "-")}`}
                  brand={b}
                  variant="ghost"
                  size="sm"
                  arrow={false}
                  className="w-full rounded-2xl! py-4! font-bold hover:-rotate-2 hover:bg-accent-50 hover:text-accent-700"
                >
                  {b}
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

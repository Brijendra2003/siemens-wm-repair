import { SceneArt } from "@/components/illustrations/SceneArt";
import { BadgeCheck, Info, MapPin, ReceiptText, Star, Truck } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { CallLink, WhatsAppLink } from "@/components/enquiry/ContactLinks";
import { HeroScene } from "@/components/illustrations/Scenes";
import { Floaters, type Floater } from "@/components/illustrations/Decor";

const featuredBrands = ["Siemens", "Bosch", "LG", "Samsung", "IFB"];

const decor: Floater[] = [
  { kind: "wrench", top: "58%", left: "48%", size: 44, rot: -20, desktopOnly: true },
  { kind: "bubbles", top: "15%", left: "2%", size: 56, opacity: 0.8 },
  { kind: "gear", bottom: "3%", left: "40%", size: 40, desktopOnly: true, opacity: 0.85 },
  { kind: "sparkle", top: "22%", right: "3%", size: 22, motion: "twinkle" },
  { kind: "screwdriver", bottom: "10%", right: "2%", size: 50, rot: 15, desktopOnly: true },
  { kind: "nut", top: "64%", left: "1%", size: 26, desktopOnly: true, opacity: 0.7 },
  { kind: "washer", top: "15%", right: "38%", size: 34, rot: 8, desktopOnly: true, opacity: 0.9 },
  { kind: "drop", bottom: "6%", left: "30%", size: 22, desktopOnly: true, opacity: 0.8 },
  { kind: "dots", bottom: "4%", left: "2%", size: 70, motion: "none", px: 20 },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 size-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 size-[22rem] rounded-full bg-accent-100/60 blur-3xl" />
      <Floaters items={decor} />

      <Container className="relative grid items-center gap-8 pt-8 pb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pt-14 lg:pb-20">
        <div className="max-w-xl">
          <p className="eyebrow anim-intro inline-flex items-center gap-2 rounded-full bg-accent-50 py-1.5 pr-3.5 pl-2 ring-1 ring-accent-100" style={d(0)}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-600" />
            </span>
            Mumbai · Doorstep repair · All brands
          </p>
          <h1 id="hero-title" className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-[3.9rem] xl:text-[4.3rem]">
            <span className="anim-intro block" style={d(100)}>
              Washing Machine
            </span>
            <span className="anim-intro relative inline-block text-accent-600" style={d(220)}>
              Repair &amp; Service
              <svg aria-hidden viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-3.5 w-full sm:-bottom-4 sm:h-4">
                <path
                  d="M3 14 C 60 4, 120 4, 170 10 S 260 16, 297 6"
                  pathLength={1}
                  className="anim-draw"
                  style={d(900)}
                  fill="none"
                  stroke="#fdba74"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="anim-intro mt-7 text-xl leading-snug font-semibold text-ink-900 sm:text-2xl" style={d(340)}>
            For Siemens, Bosch, LG, Samsung, IFB &amp; all branded machines
          </p>
          <p className="anim-intro mt-4 text-base leading-relaxed text-ink-500 sm:text-lg" style={d(440)}>
            Front load, top load and semi-automatic repairs at your doorstep. A trained technician
            finds the fault, shares a clear quote, and fixes it with warranty on replaced parts.
          </p>

          <div className="anim-intro mt-8 flex flex-wrap items-center gap-3" style={d(540)}>
            <BookButton source="hero" size="lg" className="btn-shine" />
            <CallLink source="hero" size="lg" label="Call Now" />
            <WhatsAppLink source="hero" size="lg" className="hidden sm:inline-flex" />
          </div>

          <ul className="anim-intro mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink-700" style={d(640)}>
            <li className="flex items-center gap-1.5">
              <MapPin className="size-4 text-accent-600" aria-hidden />
              Churchgate to Virar + Central &amp; Harbour
            </li>
            <li className="flex items-center gap-1.5">
              <Star className="size-4 fill-accent-500 text-accent-500" aria-hidden />
              Same / next-day visits*
            </li>
          </ul>

          <ul aria-label="Brands we repair" className="mt-6 flex flex-wrap items-center gap-2">
            {featuredBrands.map((b, i) => (
              <li
                key={b}
                className="anim-pop rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:ring-accent-500"
                style={d(760 + i * 70)}
              >
                {b}
              </li>
            ))}
            <li className="anim-pop text-xs font-semibold text-ink-500" style={d(1150)}>
              + more
            </li>
          </ul>

          <p className="mt-6 flex gap-2 text-xs leading-relaxed text-ink-500">
            <Info className="mt-px size-3.5 shrink-0" aria-hidden />
            <span>{site.disclaimer} *Subject to technician availability.</span>
          </p>
        </div>

        <div className="anim-intro relative mx-auto w-full max-w-[640px] lg:-mr-6" style={d(250)}>
          <SceneArt name="hero" priority width={1240} height={1120} alt="Friendly technician giving a thumbs up next to a front-load washing machine" fallback={<HeroScene />} />

          {/* floating info chips */}
          <div className="anim-float absolute top-[23%] right-0 sm:right-2" style={{ "--dur": "6s", "--dy": "-10px", "--spin": "0deg" } as React.CSSProperties}>
            <div className="anim-pop flex items-center gap-2.5 rounded-2xl bg-white/95 py-2.5 pr-4 pl-2.5 shadow-lift ring-1 ring-ink-100 backdrop-blur" style={d(1100)}>
              <span className="grid size-9 place-items-center rounded-xl bg-green-50 text-success-600">
                <ReceiptText className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.8rem] font-bold text-ink-900">Quote before work</span>
                <span className="block text-[0.7rem] text-ink-500">You approve first</span>
              </span>
            </div>
          </div>
          <div className="anim-float absolute right-0 bottom-[6%] sm:right-4" style={{ "--dur": "7s", "--dy": "-12px", "--delay": "-2s", "--spin": "0deg" } as React.CSSProperties}>
            <div className="anim-pop flex items-center gap-2.5 rounded-2xl bg-white/95 py-2.5 pr-4 pl-2.5 shadow-lift ring-1 ring-ink-100 backdrop-blur" style={d(1300)}>
              <span className="grid size-9 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Truck className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.8rem] font-bold text-ink-900">Doorstep visit</span>
                <span className="block text-[0.7rem] text-ink-500">Same / next day*</span>
              </span>
            </div>
          </div>
          <div className="anim-float absolute top-[70%] -left-3 hidden sm:block lg:-left-10" style={{ "--dur": "8s", "--dy": "-8px", "--delay": "-4s", "--spin": "0deg" } as React.CSSProperties}>
            <div className="anim-pop flex items-center gap-2 rounded-full bg-brand-900 py-1.5 pr-3.5 pl-1.5 text-white shadow-lift" style={d(1500)}>
              <BadgeCheck className="size-6 text-accent-200" aria-hidden />
              <span className="text-[0.75rem] font-semibold">Warranty on parts</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

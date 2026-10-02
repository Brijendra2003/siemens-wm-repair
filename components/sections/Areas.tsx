import { Floaters } from "@/components/illustrations/Decor";
import { TrainFront } from "lucide-react";
import { areas } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";

function Line({ title, color, stations, big }: { title: string; color: string; stations: string[]; big?: boolean }) {
  return (
    <div className="reveal">
      <h3 className="flex items-center gap-2.5 text-lg font-bold">
        <span className="size-3 rounded-full" style={{ background: color }} aria-hidden />
        {title}
        <span className="text-sm font-medium text-ink-500">· {stations.length} areas</span>
      </h3>
      <ul className={`mt-4 flex flex-wrap gap-2 ${big ? "" : "text-sm"}`}>
        {stations.map((s) => (
          <li key={s} className="cursor-default rounded-full bg-white px-3.5 py-1.5 font-medium text-ink-700 ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:bg-accent-600 hover:text-white hover:ring-accent-600">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Areas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="relative overflow-hidden py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "topload", top: "6%", left: "5%", size: 50, rot: -8, desktopOnly: true },
          { kind: "spanner", top: "8%", right: "6%", size: 46, rot: -20, desktopOnly: true },
          { kind: "shirt", bottom: "4%", left: "4%", size: 40, rot: 16, desktopOnly: true },
          { kind: "sparkle", bottom: "10%", right: "12%", size: 18, motion: "twinkle" },
        ]}
      />
      <Container className="relative">
        <SectionHeading
          id="areas-title"
          eyebrow="Service areas"
          title={
            <>
              Washing machine repair <span className="text-accent-600">near you</span>
            </>
          }
          intro="Our technicians cover every Western Line station from Churchgate to Virar, plus key Central and Harbour Line areas."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-700 shadow-soft">
                <TrainFront className="size-5" aria-hidden />
              </span>
              <p className="eyebrow text-brand-700!">Main focus</p>
            </div>
            <div className="mt-5">
              <Line title="Western Line" color="#f97316" stations={areas.western} big />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Looking for washing machine repair near Andheri, Bandra, Malad or Borivali? These are among our
              busiest areas, so same-day slots are often available.
            </p>
          </div>
          <div className="space-y-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 sm:p-8">
            <Line title="Central Line" color="#dc2626" stations={areas.central} />
            <Line title="Harbour Line" color="#7c3aed" stations={areas.harbour} />
            <Line title="Also covering" color="#1d4ed8" stations={areas.other} />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-ink-500">Don&apos;t see your area? Ask us, we may still cover it.</p>
          <BookButton source="areas">Book in Your Area</BookButton>
        </div>
      </Container>
    </section>
  );
}

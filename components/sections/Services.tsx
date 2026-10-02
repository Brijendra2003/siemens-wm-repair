import { Floaters } from "@/components/illustrations/Decor";
import { services } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BookButton } from "@/components/enquiry/BookButton";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative overflow-hidden bg-brand-50 py-20 sm:py-24">
      <Floaters
        items={[
          { kind: "washer", top: "6%", left: "4%", size: 64, rot: -10, desktopOnly: true },
          { kind: "spanner", top: "10%", right: "6%", size: 54, rot: 20, desktopOnly: true },
          { kind: "bubble", top: "38%", left: "1%", size: 34, opacity: 0.8 },
          { kind: "shirt", bottom: "6%", right: "3%", size: 52, rot: 14, desktopOnly: true },
          { kind: "sparkle", top: "4%", right: "30%", size: 20, motion: "twinkle" },
          { kind: "drop", bottom: "10%", left: "8%", size: 26, desktopOnly: true },
          { kind: "bubbles", top: "3%", right: "2%", size: 40, opacity: 0.7 },
        ]}
      />
      <Container className="relative">
        <SectionHeading
          id="services-title"
          eyebrow="What we fix"
          title={
            <>
              Washing machine repair <span className="text-accent-600">services</span>
            </>
          }
          intro="From a machine that won't drain to a drum that sounds like a jet engine, our technicians handle the problems Mumbai homes face most."
        />
        <ul className="stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.title}
              style={{ "--i": i } as React.CSSProperties}
              className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              {s.tag && (
                <span className="absolute top-5 right-5 rounded-full bg-accent-50 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-accent-700 uppercase">
                  {s.tag}
                </span>
              )}
              <span className="wiggle-target grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-accent-600 group-hover:text-white">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{s.text}</p>
              <BookButton
                source={`service-${s.icon}`}
                problem={s.title}
                variant="link"
                size="sm"
                className="mt-5 self-start"
              >
                Book this repair
              </BookButton>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

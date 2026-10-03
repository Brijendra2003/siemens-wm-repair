
const services = [
  "Front load repair",
  "Top load repair",
  "Drum & bearing",
  "Not draining",
  "Not spinning",
  "PCB & error codes",
  "Water leakage",
  "Door lock",
  "Installation",
  "Deep-clean service",
];

const brandRibbon = [
  "Siemens front load",
  "Bosch front load",
  "Siemens top load",
  "Bosch top load",
  "Siemens washer-dryer",
  "Bosch washer-dryer",
  "Siemens & Bosch specialists",
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 shrink-0 text-accent-500">
      <path d="M12 1c.6 6 4.9 10.4 11 11-6.1.6-10.4 5-11 11-.6-6-4.9-10.4-11-11 6.1-.6 10.4-5 11-11Z" fill="currentColor" />
    </svg>
  );
}

function Row({ items, reverse, dark }: { items: string[]; reverse?: boolean; dark?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee flex overflow-hidden">
      <ul className={`marquee-track flex shrink-0 items-center gap-6 pr-6 ${reverse ? "reverse" : ""}`} style={{ "--dur": "45s" } as React.CSSProperties}>
        {doubled.map((t, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length || undefined}
            className={`flex items-center gap-6 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-bold sm:text-2xl ${
              dark ? "text-white" : "text-ink-900"
            }`}
          >
            {t}
            <Star />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two tilted, counter-scrolling ribbons, a playful divider between hero and services. */
export function Marquee() {
  return (
    <section aria-label="What we repair" className="relative z-10 -my-2 overflow-hidden py-10">
      <div className="-rotate-[1.5deg] bg-brand-900 py-4 shadow-lift sm:py-5">
        <Row items={services} dark />
      </div>
      <div className="mt-1 rotate-[1deg] border-y-2 border-accent-200 bg-accent-50 py-3 sm:py-4">
        <Row items={brandRibbon} reverse />
      </div>
    </section>
  );
}

import { Plus } from "lucide-react";

/** Zero-JS accordion built on <details>. Content stays in the HTML for crawlers. */
export function Accordion({ items, name }: { items: { q: string; a: string }[]; name: string }) {
  return (
    <div className="divide-y divide-ink-100 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink-100">
      {items.map((it, i) => (
        <details key={it.q} name={name} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-ink-900 transition hover:bg-brand-50/60 sm:px-6 [&::-webkit-details-marker]:hidden">
            <span>{it.q}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-700 transition group-open:rotate-45 group-open:bg-accent-600 group-open:text-white">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-ink-700 sm:px-6">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/data/content";

/** The reference's 3-column icon row with vertical hairline dividers. */
export function IconRow({
  items,
  className,
  label,
}: {
  items: { title: string; text: string; icon: IconName }[];
  className?: string;
  label: string;
}) {
  return (
    <Container className={className}>
      <ul aria-label={label} className="grid divide-ink-100 sm:grid-cols-3 sm:divide-x">
        {items.map((f, i) => (
          <li
            key={f.title}
            className={clsx(
              "reveal flex flex-col items-center px-6 py-6 text-center sm:py-2",
              i > 0 && "border-t border-ink-100 sm:border-t-0",
            )}
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100">
              <Icon name={f.icon} className="size-7" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-1.5 max-w-[17rem] text-sm leading-relaxed text-ink-500">{f.text}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

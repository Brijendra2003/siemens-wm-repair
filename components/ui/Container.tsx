import { clsx } from "clsx";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <div className={clsx("reveal max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{intro}</p>}
    </div>
  );
}

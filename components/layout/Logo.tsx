import Link from "next/link";
import { clsx } from "clsx";
import { site } from "@/config/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#ea580c" />
      <rect x="9" y="7" width="22" height="26" rx="4" fill="#fff" />
      <path d="M9 13h22" stroke="#ea580c" strokeWidth="2" />
      <circle cx="13" cy="10" r="1.2" fill="#ea580c" />
      <circle cx="20" cy="23" r="6.5" fill="none" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M16.5 23.5 q3.5 -3 7 0" stroke="#0b2a5b" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ invert = false, className }: { invert?: boolean; className?: string }) {
  return (
    <Link href="/" className={clsx("group flex items-center gap-2.5", className)} aria-label={`${site.name}, home`}>
      <LogoMark className="size-10 shrink-0 transition-transform group-hover:-rotate-6" />
      <span className="leading-none">
        <span className={clsx("block text-xl font-extrabold tracking-tight", invert ? "text-white" : "text-ink-900")}>
          {site.shortName}
        </span>
        <span
          className={clsx(
            "mt-1 block text-[0.6rem] font-semibold tracking-[0.18em] uppercase",
            invert ? "text-brand-200" : "text-ink-500",
          )}
        >
          {site.logoTagline}
        </span>
      </span>
    </Link>
  );
}

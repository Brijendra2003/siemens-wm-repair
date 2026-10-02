import { clsx } from "clsx";

/**
 * Lightweight spinning-drum loader. Swap the SVG for your own animation asset
 * (Lottie/GIF/SVG) here; every usage picks it up.
 */
export function Loader({ className, label = "Loading" }: { className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={clsx("animate-spin", className)} role="img" aria-label={label}>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
      <path d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

import { clsx } from "clsx";

/**
 * Small decorative props scattered around sections. Pure SVG, aria-hidden,
 * animated with CSS only (see "Motion system" in globals.css).
 */
export type DecorKind =
  | "washer"
  | "topload"
  | "wrench"
  | "screwdriver"
  | "spanner"
  | "gear"
  | "nut"
  | "bubble"
  | "bubbles"
  | "drop"
  | "shirt"
  | "sock"
  | "sparkle"
  | "squiggle"
  | "dots";

type Tone = "light" | "dark";

function Art({ kind, tone }: { kind: DecorKind; tone: Tone }) {
  const ink = tone === "dark" ? "#93c5fd" : "#0b2a5b";
  const steel = tone === "dark" ? "#cbd5e1" : "#94a3b8";
  const body = tone === "dark" ? "#1e3a8a" : "#ffffff";

  switch (kind) {
    case "washer":
      return (
        <svg viewBox="0 0 64 72">
          <rect x="4" y="4" width="56" height="64" rx="9" fill={body} stroke={ink} strokeWidth="2.5" />
          <path d="M4 18h56" stroke={ink} strokeWidth="2.5" />
          <circle cx="13" cy="11" r="2.4" fill="#f97316" />
          <rect x="34" y="8.5" width="18" height="5" rx="2" fill={ink} opacity="0.25" />
          <circle cx="32" cy="43" r="17" fill="#dbeafe" stroke={ink} strokeWidth="2.5" />
          <g className="spin-slow">
            <path d="M22 45 q10 -8 20 0 q-10 8 -20 0Z" fill="#60a5fa" />
            <circle cx="38" cy="37" r="2.4" fill="#fff" />
          </g>
        </svg>
      );
    case "topload":
      return (
        <svg viewBox="0 0 64 72">
          <rect x="6" y="18" width="52" height="50" rx="8" fill={body} stroke={ink} strokeWidth="2.5" />
          <path d="M10 18 L16 6 h32 l6 12" fill="#dbeafe" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="18" cy="28" r="3" fill="#f97316" />
          <rect x="28" y="25" width="22" height="6" rx="3" fill={ink} opacity="0.25" />
          <path d="M16 46 h32 M16 54 h22" stroke={ink} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 64 64">
          <path
            d="M8 52 L34 26 a12 12 0 1 1 6 6 L14 58 a4.5 4.5 0 0 1 -6 -6 Z"
            fill={steel}
            stroke={ink}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="45" cy="19" r="5" fill={tone === "dark" ? "#0b2a5b" : "#fffdfb"} stroke={ink} strokeWidth="2" />
        </svg>
      );
    case "screwdriver":
      return (
        <svg viewBox="0 0 64 64">
          <rect x="34" y="4" width="14" height="28" rx="6" transform="rotate(45 41 18)" fill="#f97316" stroke={ink} strokeWidth="2.5" />
          <path d="M37 21 L39 23" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M30 34 L10 54" stroke={steel} strokeWidth="5" strokeLinecap="round" />
          <path d="M30 34 L10 54" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    case "spanner":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M16 48 L48 16" stroke={steel} strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="14" r="10" fill={steel} stroke={ink} strokeWidth="2.5" />
          <circle cx="14" cy="50" r="10" fill={steel} stroke={ink} strokeWidth="2.5" />
          <path d="M50 14 l7 -7" stroke={tone === "dark" ? "#0b2a5b" : "#fffdfb"} strokeWidth="7" strokeLinecap="round" />
          <path d="M14 50 l-7 7" stroke={tone === "dark" ? "#0b2a5b" : "#fffdfb"} strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="-36 -36 72 72">
          <g className="spin-slow">
            {Array.from({ length: 8 }, (_, i) => (
              <rect key={i} x="-6" y="-33" width="12" height="15" rx="3" fill={tone === "dark" ? "#60a5fa" : "#f97316"} transform={`rotate(${i * 45})`} />
            ))}
            <circle r="23" fill={tone === "dark" ? "#60a5fa" : "#f97316"} />
            <circle r="9" fill={tone === "dark" ? "#0b2a5b" : "#fffdfb"} />
          </g>
        </svg>
      );
    case "nut":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M32 4 L56 18 V46 L32 60 L8 46 V18 Z" fill={steel} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="11" fill={tone === "dark" ? "#0b2a5b" : "#fffdfb"} stroke={ink} strokeWidth="2.5" />
        </svg>
      );
    case "bubble":
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="#dbeafe" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="2.5" />
          <path d="M18 24 q4 -8 12 -9" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "bubbles":
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="22" cy="40" r="16" fill="#dbeafe" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="2" />
          <circle cx="46" cy="22" r="10" fill="#dbeafe" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="2" />
          <circle cx="50" cy="48" r="6" fill="#dbeafe" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="2" />
          <path d="M13 34 q3 -6 9 -7 M41 18 q2 -3 5 -4" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M32 4 C32 4 52 28 52 40 a20 20 0 0 1 -40 0 C12 28 32 4 32 4 Z" fill="#60a5fa" />
          <path d="M22 40 a10 10 0 0 0 8 10" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
        </svg>
      );
    case "shirt":
      return (
        <svg viewBox="0 0 64 64">
          <path
            d="M22 6 L8 14 L4 28 L14 30 L14 58 H50 V30 L60 28 L56 14 L42 6 Q32 16 22 6 Z"
            fill="#fdba74"
            stroke={ink}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M14 40 H50" stroke="#fff" strokeWidth="4" opacity="0.7" />
        </svg>
      );
    case "sock":
      return (
        <svg viewBox="0 0 64 64">
          <path
            d="M24 4 H44 V36 L52 44 Q58 54 48 58 L30 58 Q20 56 22 46 L24 38 Z"
            fill="#c4b5fd"
            stroke={ink}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M24 12 H44 M24 18 H44" stroke="#fff" strokeWidth="3" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2 Z" fill="#f97316" />
        </svg>
      );
    case "squiggle":
      return (
        <svg viewBox="0 0 120 30">
          <path
            d="M4 15 q12 -14 24 0 t24 0 t24 0 t24 0 t16 -2"
            stroke="#f97316"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dots":
      return (
        <svg viewBox="0 0 64 64">
          {Array.from({ length: 16 }, (_, i) => (
            <circle key={i} cx={8 + (i % 4) * 16} cy={8 + Math.floor(i / 4) * 16} r="3" fill={ink} opacity="0.25" />
          ))}
        </svg>
      );
  }
}

export type Floater = {
  kind: DecorKind;
  /** CSS position values, e.g. "12%", "2rem" */
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  rot?: number;
  dur?: number;
  delay?: number;
  /** parallax travel in px (scroll-driven); 0 disables */
  px?: number;
  opacity?: number;
  motion?: "float" | "twinkle" | "swing" | "none";
  /** hide below md breakpoint (keeps phones calm & readable) */
  desktopOnly?: boolean;
  blur?: boolean;
};

export function Floaters({ items, tone = "light", className }: { items: Floater[]; tone?: Tone; className?: string }) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {items.map((f, i) => (
        <div
          key={i}
          className={clsx("absolute", f.px !== 0 && "parallax", f.desktopOnly && "hidden md:block")}
          style={
            {
              top: f.top,
              left: f.left,
              right: f.right,
              bottom: f.bottom,
              width: f.size,
              opacity: f.opacity ?? 1,
              filter: f.blur ? "blur(1.5px)" : undefined,
              "--px": `${f.px ?? 40}px`,
            } as React.CSSProperties
          }
        >
          <div
            className={clsx(
              f.motion === "twinkle" ? "anim-twinkle" : f.motion === "swing" ? "anim-swing" : f.motion === "none" ? "" : "anim-float",
            )}
            style={
              {
                "--rot": `${f.rot ?? 0}deg`,
                "--dur": `${f.dur ?? 6 + (i % 4) * 1.5}s`,
                "--delay": `${f.delay ?? -(i * 1.3)}s`,
                "--spin": `${i % 2 ? -12 : 12}deg`,
                transform: `rotate(${f.rot ?? 0}deg)`,
              } as React.CSSProperties
            }
          >
            <Art kind={f.kind} tone={tone} />
          </div>
        </div>
      ))}
    </div>
  );
}

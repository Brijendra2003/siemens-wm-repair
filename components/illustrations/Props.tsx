/**
 * Soft-3D props: unbranded washing machine, plant, toolbox and tools.
 * Volume comes from layered gradients, specular highlights and contact shadows.
 */

/** Front-load washing machine, 260 × 300 box. */
export function WashingMachine({ id, transform, spinning = true }: { id: string; transform?: string; spinning?: boolean }) {
  const g = (n: string) => `${id}-${n}`;
  const u = (n: string) => `url(#${g(n)})`;
  return (
    <g transform={transform}>
      <defs>
        <linearGradient id={g("body")} x1="0" x2="1">
          <stop offset="0" stopColor="#dfe6ef" />
          <stop offset="0.18" stopColor="#ffffff" />
          <stop offset="0.75" stopColor="#f4f7fb" />
          <stop offset="1" stopColor="#cfd8e3" />
        </linearGradient>
        <linearGradient id={g("side")} x1="0" x2="1">
          <stop offset="0" stopColor="#b9c4d2" />
          <stop offset="1" stopColor="#8e9bad" />
        </linearGradient>
        <linearGradient id={g("panel")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6ecf3" />
        </linearGradient>
        <radialGradient id={g("chrome")} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#cfd8e3" />
          <stop offset="0.75" stopColor="#8b98aa" />
          <stop offset="1" stopColor="#e5eaf1" />
        </radialGradient>
        <radialGradient id={g("glass")} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="0.45" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id={g("knob")} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#a9b4c2" />
        </radialGradient>
        <linearGradient id={g("screen")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#0b1b3a" />
        </linearGradient>
        <clipPath id={g("clip")}>
          <circle cx="130" cy="180" r="62" />
        </clipPath>
        <filter id={g("soft")} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <ellipse cx="134" cy="300" rx="134" ry="12" fill="#0b2a5b" opacity="0.2" filter={u("soft")} />
      {/* side depth */}
      <path d="M240 16 L262 30 L262 288 L240 298 Z" fill={u("side")} />
      <path d="M240 16 L262 30 L262 36 L240 22 Z" fill="#fff" opacity="0.5" />
      {/* body */}
      <rect x="6" y="10" width="240" height="288" rx="20" fill={u("body")} />
      <rect x="6" y="10" width="240" height="288" rx="20" fill="none" stroke="#c4cedb" strokeWidth="1.5" />
      <path d="M22 14 h200" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      {/* control panel */}
      <rect x="6" y="10" width="240" height="60" rx="20" fill={u("panel")} />
      <path d="M6 64 H246" stroke="#cdd6e1" strokeWidth="2" />
      <path d="M6 66 H246" stroke="#fff" strokeWidth="1.5" />
      {/* detergent drawer */}
      <rect x="20" y="22" width="56" height="28" rx="6" fill="#eef2f7" stroke="#c4cedb" />
      <rect x="24" y="40" width="48" height="6" rx="3" fill="#cbd5e1" />
      {/* display */}
      <rect x="108" y="22" width="56" height="26" rx="6" fill={u("screen")} />
      <rect x="110" y="24" width="52" height="8" rx="4" fill="#fff" opacity="0.08" />
      <text x="136" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="monospace" fill="#7dd3fc">
        0:45
      </text>
      <circle cx="176" cy="35" r="4.5" fill="#cbd5e1" />
      <circle cx="189" cy="35" r="4.5" fill="#f97316" />
      <circle cx="187.8" cy="33.8" r="1.4" fill="#fff" opacity="0.7" />
      {/* program dial */}
      <circle cx="220" cy="37" r="18" fill="#c4cedb" />
      <circle cx="220" cy="36" r="16" fill={u("knob")} />
      <path d="M220 24 v9" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />

      {/* door */}
      <circle cx="130" cy="184" r="92" fill="#0b2a5b" opacity="0.08" />
      <circle cx="130" cy="180" r="90" fill="#e7ecf2" stroke="#d0d9e4" />
      <circle cx="130" cy="180" r="80" fill={u("chrome")} />
      <circle cx="130" cy="180" r="68" fill="#1f2937" />
      <circle cx="130" cy="180" r="62" fill={u("glass")} />
      <g clipPath={`url(#${g("clip")})`}>
        <path d="M60 196 Q90 182 120 196 T180 196 T240 196 V260 H60 Z" fill="#1e40af" opacity="0.5" />
        <g className={spinning ? "spin-slow" : undefined}>
          <path d="M100 160 q20 -22 44 -6 q-10 22 -44 6 Z" fill="#fb923c" />
          <path d="M150 190 q14 24 -10 36 q-14 -18 10 -36 Z" fill="#fde68a" />
          <path d="M106 206 q-22 -6 -16 -30 q22 4 16 30 Z" fill="#f472b6" opacity="0.85" />
        </g>
        <circle cx="152" cy="150" r="5" fill="#fff" opacity="0.6" />
        <circle cx="164" cy="168" r="3" fill="#fff" opacity="0.6" />
        <circle cx="96" cy="190" r="4" fill="#fff" opacity="0.5" />
        {/* glass reflections */}
        <path d="M78 150 A62 62 0 0 1 150 120 L140 134 A48 48 0 0 0 90 158 Z" fill="#fff" opacity="0.35" />
        <ellipse cx="160" cy="215" rx="10" ry="4" fill="#fff" opacity="0.25" transform="rotate(-40 160 215)" />
      </g>
      <circle cx="130" cy="180" r="62" fill="none" stroke="#0b1b3a" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M68 150 A66 66 0 0 1 112 116" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9" />
      {/* handle */}
      <rect x="206" y="164" width="12" height="32" rx="6" fill={u("knob")} stroke="#94a3b8" />
      {/* feet */}
      <rect x="22" y="294" width="24" height="8" rx="3" fill="#64748b" />
      <rect x="206" y="294" width="24" height="8" rx="3" fill="#64748b" />
    </g>
  );
}

export function Plant({ transform, lines }: { transform?: string; lines: string[] }) {
  return (
    <g transform={transform}>
      <defs>
        <linearGradient id="plant-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4ade80" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="plant-leaf-2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#86efac" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="plant-pot" x1="0" x2="1">
          <stop offset="0" stopColor="#e7e1d6" />
          <stop offset="0.3" stopColor="#ffffff" />
          <stop offset="0.75" stopColor="#f5f1ea" />
          <stop offset="1" stopColor="#d6cebf" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="214" rx="50" ry="7" fill="#0b2a5b" opacity="0.16" />
      <path d="M60 100 Q20 70 10 20 Q50 40 60 100 Z" fill="url(#plant-leaf)" />
      <path d="M60 100 Q100 60 112 14 Q70 34 60 100 Z" fill="url(#plant-leaf-2)" />
      <path d="M60 104 Q30 90 0 76 Q34 64 60 104 Z" fill="url(#plant-leaf)" />
      <path d="M60 104 Q94 88 120 70 Q86 60 60 104 Z" fill="url(#plant-leaf-2)" />
      <path d="M60 100 Q56 50 64 0 Q78 50 60 100 Z" fill="url(#plant-leaf-2)" />
      <path d="M14 26 Q40 50 58 96 M108 20 Q80 50 62 96 M62 6 Q64 50 60 96" stroke="#14532d" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <path d="M22 100 h76 l-8 112 h-60 Z" fill="url(#plant-pot)" />
      <rect x="16" y="94" width="88" height="14" rx="5" fill="#efe9df" />
      <rect x="16" y="94" width="88" height="5" rx="2.5" fill="#fff" />
      <path d="M32 112 L38 204" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      {lines.map((l, i) => (
        <text key={l} x="62" y={136 + i * 18} textAnchor="middle" fontSize="15" fill="#475569" style={{ fontFamily: "var(--font-hand-face), cursive" }}>
          {l}
        </text>
      ))}
    </g>
  );
}

export function Toolbox({ transform, label }: { transform?: string; label: string }) {
  return (
    <g transform={transform}>
      <defs>
        <linearGradient id="tb-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#374151" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="tb-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4b5563" />
          <stop offset="1" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="tb-handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdba74" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      <ellipse cx="82" cy="114" rx="90" ry="9" fill="#0b2a5b" opacity="0.2" />
      <path d="M54 32 v-16 q0 -10 10 -10 h32 q10 0 10 10 v16" stroke="url(#tb-handle)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M160 34 L170 40 L170 108 L160 112 Z" fill="#0b1220" />
      <rect x="0" y="28" width="160" height="84" rx="10" fill="url(#tb-body)" />
      <rect x="0" y="28" width="160" height="22" rx="10" fill="url(#tb-lid)" />
      <path d="M10 31 h140" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
      <path d="M0 50 h160" stroke="#000" strokeOpacity="0.4" strokeWidth="2" />
      <rect x="16" y="40" width="18" height="18" rx="4" fill="url(#tb-handle)" />
      <rect x="126" y="40" width="18" height="18" rx="4" fill="url(#tb-handle)" />
      <circle cx="56" cy="82" r="12" fill="url(#tb-handle)" />
      <path d="M56 74 q-6 8 0 15 q6 -7 0 -15 Z" fill="#fff" />
      <text x="75" y="80" fontSize="13" fontWeight="800" fill="#fff" fontFamily="var(--font-body), sans-serif">
        {label}
      </text>
      <text x="75" y="94" fontSize="7" letterSpacing="1.5" fill="#cbd5e1" fontFamily="var(--font-body), sans-serif">
        REPAIR KIT
      </text>
      <path d="M8 104 h144" stroke="#fff" strokeOpacity="0.08" strokeWidth="3" />
    </g>
  );
}

export function Wrench({ transform }: { transform?: string }) {
  return (
    <g transform={transform}>
      <defs>
        <linearGradient id="wrench-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1f5f9" />
          <stop offset="0.5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
      </defs>
      <path d="M10 70 L52 28 a20 20 0 1 1 20 20 L30 90 a14 14 0 0 1 -20 -20 Z" fill="url(#wrench-steel)" stroke="#475569" strokeWidth="1.5" />
      <path d="M18 66 L54 30" stroke="#fff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      <circle cx="66" cy="34" r="8" fill="#fffdfb" />
    </g>
  );
}

export function Gear({ transform, color = "#f97316" }: { transform?: string; color?: string }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <g transform={transform}>
      <g className="spin-slow">
        {teeth.map((a) => (
          <rect key={a} x="-6" y="-34" width="12" height="16" rx="3" fill={color} transform={`rotate(${a})`} />
        ))}
        <circle r="24" fill={color} />
        <circle r="24" fill="url(#gear-shine)" />
        <circle r="9" fill="#fffdfb" />
      </g>
      <defs>
        <radialGradient id="gear-shine" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.25" />
        </radialGradient>
      </defs>
    </g>
  );
}

/** Hand-drawn underline swoosh. */
export function Swoosh({ transform, color = "#f97316" }: { transform?: string; color?: string }) {
  return (
    <path
      transform={transform}
      pathLength={1}
      className="anim-draw"
      d="M0 10 Q40 -2 90 6"
      stroke={color}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  );
}

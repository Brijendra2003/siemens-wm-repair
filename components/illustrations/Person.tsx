/**
 * Parametric "soft 3D / clay render" character. Volume comes from layered
 * gradients (cylindrical shading on limbs, radial on rounded forms), specular
 * highlights, rim light and ambient-occlusion shadows.
 * Drawn on a 240 × 420 box; place with `transform` on the parent <g>.
 */
type PersonProps = {
  id: string;
  skin?: string;
  hair?: "helmet" | "short" | "long";
  hairColor?: string;
  top?: string;
  pants?: string;
  shoes?: string;
  vest?: boolean;
  beard?: boolean;
  pose?: "thumbs-tablet" | "thumbs" | "clipboard" | "relaxed";
  transform?: string;
};

/** Mix a hex colour toward black (amt < 0) or white (amt > 0). */
function tint(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) =>
    Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt),
  );
  return `#${ch.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function Cyl({ id, base, vertical = false }: { id: string; base: string; vertical?: boolean }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2={vertical ? "0" : "1"} y2={vertical ? "1" : "0"}>
      <stop offset="0" stopColor={tint(base, -0.38)} />
      <stop offset="0.28" stopColor={tint(base, 0.22)} />
      <stop offset="0.6" stopColor={base} />
      <stop offset="1" stopColor={tint(base, -0.45)} />
    </linearGradient>
  );
}

function Ball({ id, base, cx = 0.38, cy = 0.32 }: { id: string; base: string; cx?: number; cy?: number }) {
  return (
    <radialGradient id={id} cx={cx} cy={cy} r="0.78">
      <stop offset="0" stopColor={tint(base, 0.4)} />
      <stop offset="0.5" stopColor={base} />
      <stop offset="1" stopColor={tint(base, -0.38)} />
    </radialGradient>
  );
}

export function Person({
  id,
  skin = "#f2b48c",
  hair = "helmet",
  hairColor = "#3b2418",
  top = "#3a4352",
  pants = "#2b3240",
  shoes = "#5b3a26",
  vest = true,
  beard = false,
  pose = "relaxed",
  transform,
}: PersonProps) {
  const g = (n: string) => `${id}-${n}`;
  const u = (n: string) => `url(#${g(n)})`;
  const skinShade = tint(skin, -0.3);

  const hand = (cx: number, cy: number, r = 11.5) => (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={u("skin")} />
      <ellipse cx={cx - r * 0.3} cy={cy - r * 0.35} rx={r * 0.35} ry={r * 0.22} fill="#fff" opacity="0.35" />
    </g>
  );

  const arm = (d: string, w = 25) => (
    <g>
      <path d={d} fill="none" stroke={u("sleeve")} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth={w * 0.28} strokeLinecap="round" strokeLinejoin="round" transform="translate(-4 -2)" />
    </g>
  );

  const thumbsUp = () => (
    <g>
      {arm("M164 152 L195 208 L201 160")}
      <rect x="186" y="134" width="28" height="30" rx="11" fill={u("skin")} />
      <rect x="189" y="108" width="12" height="32" rx="6" fill={u("skin")} />
      <ellipse cx="193" cy="114" rx="3" ry="5" fill="#fff" opacity="0.35" />
      <path d="M190 147 h21 M190 154 h21" stroke={skinShade} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </g>
  );

  return (
    <g transform={transform}>
      <defs>
        <Cyl id={g("sleeve")} base={top} />
        <Cyl id={g("torso")} base={top} />
        <Cyl id={g("pants")} base={pants} />
        <linearGradient id={g("vest")} x1="0" x2="1">
          <stop offset="0" stopColor="#b93d0b" />
          <stop offset="0.3" stopColor="#ff9d55" />
          <stop offset="0.62" stopColor="#f97316" />
          <stop offset="1" stopColor="#b93d0b" />
        </linearGradient>
        <linearGradient id={g("strip")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#e8edf3" />
          <stop offset="1" stopColor="#aab5c3" />
        </linearGradient>
        <Ball id={g("skin")} base={skin} />
        <radialGradient id={g("face")} cx="0.4" cy="0.36" r="0.72">
          <stop offset="0" stopColor={tint(skin, 0.42)} />
          <stop offset="0.55" stopColor={skin} />
          <stop offset="1" stopColor={tint(skin, -0.32)} />
        </radialGradient>
        <radialGradient id={g("helmet")} cx="0.34" cy="0.25" r="0.85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#eef2f7" />
          <stop offset="1" stopColor="#a9b4c2" />
        </radialGradient>
        <Ball id={g("shoe")} base={shoes} cx={0.3} cy={0.2} />
        <Ball id={g("hair")} base={hairColor} cx={0.35} cy={0.2} />
        <radialGradient id={g("beard")} cx="0.5" cy="0.25" r="0.85">
          <stop offset="0" stopColor="#7a4e34" />
          <stop offset="0.6" stopColor="#4a2f22" />
          <stop offset="1" stopColor="#2a1910" />
        </radialGradient>
        <radialGradient id={g("iris")} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#8a5a3c" />
          <stop offset="1" stopColor="#3a2216" />
        </radialGradient>
        <filter id={g("soft")} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={g("drop")} x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#0b2a5b" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* ground contact shadow */}
      <ellipse cx="120" cy="410" rx="84" ry="11" fill="#0b2a5b" opacity="0.16" filter={u("soft")} />
      <ellipse cx="120" cy="408" rx="52" ry="5" fill="#0b2a5b" opacity="0.22" />

      <g filter={u("drop")}>
        {hair === "long" && (
          <path d="M80 80 Q74 34 120 30 Q166 34 160 80 L168 156 Q120 170 72 156 Z" fill={u("hair")} />
        )}

        {/* legs */}
        <path d="M80 255 L116 255 L114 396 L86 396 Z" fill={u("pants")} />
        <path d="M124 255 L160 255 L154 396 L126 396 Z" fill={u("pants")} />
        <path d="M84 300 q14 6 30 0 M128 300 q14 6 28 0" stroke="#000" strokeOpacity="0.12" strokeWidth="2" fill="none" />
        {/* shoes */}
        <path d="M78 392 h40 q5 0 5 8 v6 q-26 4 -53 0 q0 -14 8 -14 Z" fill={u("shoe")} />
        <path d="M121 392 h38 q9 0 10 14 q-26 4 -50 0 v-6 q0 -8 2 -8 Z" fill={u("shoe")} />
        <path d="M84 396 q10 -2 18 0 M128 396 q10 -2 18 0" stroke="#fff" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* torso */}
        <path d="M66 154 Q68 128 100 124 L140 124 Q172 128 174 154 L180 268 L60 268 Z" fill={u("torso")} />
        <rect x="62" y="256" width="116" height="12" rx="4" fill="#1b2029" />
        <rect x="112" y="257" width="16" height="10" rx="2" fill="#94a3b8" />

        {vest && (
          <g>
            <path d="M70 152 Q72 130 102 126 L112 126 L112 264 L62 264 Z" fill={u("vest")} />
            <path d="M128 126 L138 126 Q168 130 170 152 L178 264 L128 264 Z" fill={u("vest")} />
            <path d="M112 126 L112 264 M128 126 L128 264" stroke="#7c2d06" strokeOpacity="0.45" strokeWidth="2" />
            {[200, 228].map((y) => (
              <g key={y}>
                <rect x="64" y={y} width="48" height="11" rx="2" fill={u("strip")} />
                <rect x="128" y={y} width="50" height="11" rx="2" fill={u("strip")} />
              </g>
            ))}
            <rect x="91" y="128" width="11" height="72" rx="2" fill={u("strip")} />
            <rect x="138" y="128" width="11" height="72" rx="2" fill={u("strip")} />
            <rect x="141" y="160" width="22" height="17" rx="4" fill="#000" opacity="0.14" />
            <path d="M74 140 Q80 132 96 130" stroke="#fff" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        )}
        {!vest && (
          <g>
            <path d="M106 124 L120 152 L134 124" fill="none" stroke="#000" strokeOpacity="0.18" strokeWidth="3" />
            <path d="M76 150 Q80 134 98 130" stroke="#fff" strokeOpacity="0.4" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        )}

        {/* neck with AO */}
        <path d="M107 104 h26 v24 q-13 9 -26 0 Z" fill={skinShade} />
        <ellipse cx="120" cy="112" rx="15" ry="6" fill="#000" opacity="0.18" />

        {/* arms & props */}
        {pose === "thumbs-tablet" && (
          <g>
            {arm("M76 152 L60 216 L100 228")}
            <g transform="rotate(-12 112 210)">
              <rect x="84" y="174" width="58" height="74" rx="9" fill="#111827" />
              <rect x="86" y="176" width="54" height="70" rx="8" fill="none" stroke="#475569" strokeWidth="1.5" />
              <rect x="90" y="180" width="46" height="62" rx="5" fill="#2563eb" />
              <path d="M90 180 h46 l-30 62 h-16 Z" fill="#fff" opacity="0.12" />
              <rect x="96" y="188" width="26" height="4.5" rx="2" fill="#fff" opacity="0.85" />
              <rect x="96" y="197" width="34" height="4.5" rx="2" fill="#fff" opacity="0.5" />
              <rect x="96" y="206" width="18" height="4.5" rx="2" fill="#fff" opacity="0.5" />
              <circle cx="123" cy="226" r="9" fill="#fff" />
              <path d="M118.5 226 l3.5 3.5 l6.5 -7" stroke="#16a34a" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            </g>
            {hand(102, 229, 12)}
            {thumbsUp()}
          </g>
        )}
        {pose === "thumbs" && (
          <g>
            {arm("M76 152 L64 214 L72 262")}
            {hand(73, 267)}
            {thumbsUp()}
          </g>
        )}
        {pose === "clipboard" && (
          <g>
            {arm("M76 152 L68 212 L108 220", 23)}
            {arm("M164 152 L172 212 L134 222", 23)}
            <rect x="96" y="178" width="50" height="62" rx="6" fill="#8a5a3c" />
            <rect x="96" y="178" width="50" height="62" rx="6" fill="none" stroke="#5b3a26" strokeWidth="1.5" />
            <rect x="101" y="185" width="40" height="50" rx="3" fill="#f8fafc" />
            <rect x="111" y="173" width="20" height="10" rx="3" fill="#cbd5e1" stroke="#94a3b8" />
            <path d="M107 196 h26 M107 204 h20 M107 212 h24 M107 220 h14" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            <path d="M126 220 l3 3 l7 -7" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {hand(109, 222, 10.5)}
            {hand(134, 224, 10.5)}
          </g>
        )}
        {pose === "relaxed" && (
          <g>
            {arm("M76 152 L64 214 L72 262")}
            {hand(73, 267)}
            {arm("M164 152 L176 214 L168 262")}
            {hand(167, 267)}
          </g>
        )}

        {/* ── head ── */}
        <ellipse cx="82" cy="86" rx="8" ry="11" fill={u("skin")} />
        <ellipse cx="158" cy="86" rx="8" ry="11" fill={u("skin")} />
        <path d="M80 82 q2 -5 5 0 M155 82 q3 -5 5 0" stroke={skinShade} strokeWidth="2" fill="none" />
        <ellipse cx="120" cy="80" rx="38" ry="42" fill={u("face")} />
        {/* rim light */}
        <path d="M150 58 Q160 80 150 104" stroke="#fff" strokeOpacity="0.25" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* blush */}
        <ellipse cx="99" cy="98" rx="9" ry="5.5" fill="#f87171" opacity="0.32" filter={u("soft")} />
        <ellipse cx="141" cy="98" rx="9" ry="5.5" fill="#f87171" opacity="0.32" filter={u("soft")} />

        {beard && (
          <g>
            <path d="M83 82 Q84 132 120 134 Q156 132 157 82 Q152 100 140 104 Q120 95 100 104 Q88 100 83 82 Z" fill={u("beard")} />
            <path d="M100 116 q4 6 2 12 M120 124 v8 M140 116 q-4 6 -2 12" stroke="#2a1910" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
            <path d="M104 102 Q112 96 120 100 Q128 96 136 102 Q128 106 120 104 Q112 106 104 102 Z" fill="#3a2418" />
          </g>
        )}

        {/* eyes: glossy cartoon style */}
        {[106, 134].map((x) => (
          <g key={x}>
            <ellipse cx={x} cy="78" rx="7.5" ry="8.5" fill="#fff" />
            <ellipse cx={x} cy="78" rx="7.5" ry="8.5" fill="none" stroke={skinShade} strokeOpacity="0.4" />
            <circle cx={x + 1} cy="79" r="5" fill={u("iris")} />
            <circle cx={x + 1} cy="79" r="2.4" fill="#120a06" />
            <circle cx={x + 2.8} cy="76.4" r="1.7" fill="#fff" />
            <circle cx={x - 0.6} cy="81.6" r="0.9" fill="#fff" opacity="0.8" />
          </g>
        ))}
        <path
          d="M97 66 q9 -6 17 -1 M126 65 q8 -5 17 1"
          stroke={hair === "long" ? hairColor : "#3b2418"}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* nose */}
        <ellipse cx="120" cy="90" rx="6" ry="5" fill={tint(skin, -0.12)} />
        <ellipse cx="118.5" cy="88.5" rx="2.2" ry="1.4" fill="#fff" opacity="0.5" />
        {/* mouth */}
        <path d="M106 105 Q120 120 134 105 Q120 110 106 105 Z" fill="#7a2e1f" />
        <path d="M108 105.5 Q120 109.5 132 105.5 L131 108 Q120 111 109 108 Z" fill="#fff" />
        <ellipse cx="120" cy="114" rx="6" ry="2.4" fill="#f87171" opacity="0.8" />

        {/* hair / helmet */}
        {hair === "helmet" && (
          <g>
            <path d="M76 70 Q76 22 120 20 Q164 22 164 70 Z" fill={u("helmet")} />
            <path d="M114 21 h12 v48 h-12 Z" fill="#dbe2ea" />
            <path d="M114 21 h4 v48 h-4 Z" fill="#fff" opacity="0.7" />
            <ellipse cx="120" cy="70" rx="50" ry="9" fill="#f1f5f9" />
            <ellipse cx="120" cy="72" rx="50" ry="7" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M88 44 Q96 30 112 27" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9" />
            <circle cx="140" cy="46" r="10" fill="#f97316" />
            <circle cx="140" cy="46" r="10" fill="none" stroke="#c2410c" strokeWidth="1.5" />
            <path d="M140 39.5 q-5.5 6.5 0 12 q5.5 -5.5 0 -12 Z" fill="#fff" />
          </g>
        )}
        {hair === "short" && (
          <g>
            <path d="M82 78 Q78 34 118 34 Q160 32 158 76 Q152 54 132 52 Q116 62 94 56 Q86 64 82 78 Z" fill={u("hair")} />
            <path d="M100 44 Q116 36 138 42" stroke="#fff" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        )}
        {hair === "long" && (
          <g>
            <path d="M82 84 Q80 40 120 38 Q160 40 158 84 Q150 56 120 54 Q102 56 94 68 Q86 74 82 84 Z" fill={u("hair")} />
            <path d="M100 48 Q118 40 140 48" stroke="#fff" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        )}
      </g>
    </g>
  );
}

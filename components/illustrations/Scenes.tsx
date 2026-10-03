import { site } from "@/config/site";
import { Gear, Plant, Swoosh, Toolbox, WashingMachine, Wrench } from "./Props";

const hand = { fontFamily: "var(--font-hand-face), cursive" } as const;

function HandNote({ x, y, lines, rotate = -8, size = 26 }: { x: number; y: number; lines: string[]; rotate?: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`} fill="#334155" style={hand} fontSize={size}>
      {lines.map((l, i) => (
        <text key={l} x={i * 10} y={i * (size + 2)}>
          {l}
        </text>
      ))}
      <Swoosh transform={`translate(${lines.length * 10 - 4} ${lines.length * (size + 2) - 12})`} />
    </g>
  );
}

/** Bubbles drifting up out of a machine. Outer <g> positions; inner circle animates. */
function RisingBubbles({ x, y, count = 7, spread = 120 }: { x: number; y: number; count?: number; spread?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: count }, (_, i) => {
        const r = 5 + ((i * 7) % 9);
        const cx = ((i * 37) % spread) - spread / 2;
        return (
          <g key={i} transform={`translate(${cx} 0)`}>
            <circle
              r={r}
              fill="#dbeafe"
              fillOpacity="0.7"
              stroke="#93c5fd"
              strokeWidth="1.5"
              className="anim-rise"
              style={
                {
                  "--dur": `${3.2 + (i % 4) * 0.7}s`,
                  "--delay": `${i * 0.55}s`,
                  "--dx": `${i % 2 ? 14 : -12}px`,
                  "--rise": `${-130 - (i % 3) * 40}px`,
                } as React.CSSProperties
              }
            />
          </g>
        );
      })}
    </g>
  );
}

function Sparkle({ x, y, s = 1, delay = 0, color = "#f97316" }: { x: number; y: number; s?: number; delay?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        className="anim-twinkle"
        style={{ "--delay": `${delay}s` } as React.CSSProperties}
        d="M0 -14 C1 -4 4 -1 14 0 C4 1 1 4 0 14 C-1 4 -4 1 -14 0 C-4 -1 -1 -4 0 -14 Z"
        fill={color}
      />
    </g>
  );
}

export function HeroScene() {
  return (
    <svg viewBox="0 0 620 560" role="img" aria-labelledby="hero-art-title" className="h-auto w-full overflow-visible">
      <title id="hero-art-title">Friendly technician with a tablet giving a thumbs up next to a front-load washing machine</title>
      <defs>
        <filter id="hero-soft" x="-30%" y="-100%" width="160%" height="300%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path
        d="M120 120 Q170 20 330 40 Q520 60 560 200 Q600 360 470 470 Q330 560 190 500 Q40 430 60 280 Q70 190 120 120 Z"
        fill="#ffe6d3"
      />
      <ellipse
        cx="330"
        cy="290"
        rx="285"
        ry="245"
        fill="none"
        stroke="#f97316"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="4 12"
        className="anim-dash"
      />
      <circle cx="96" cy="150" r="22" fill="#dbeafe" />
      <circle cx="78" cy="470" r="14" fill="#dbeafe" />

      <g transform="translate(300 200) scale(1.02)">
        <g className="anim-wobble">
          <WashingMachine id="hero-wm" />
        </g>
      </g>
      <RisingBubbles x={430} y={200} count={8} spread={150} />

      {/* 3D technician render (public/illustrations/technician.webp, 416×1000) */}
      <ellipse cx="190" cy="512" rx="92" ry="12" fill="#0b2a5b" opacity="0.16" filter="url(#hero-soft)" />
      <ellipse cx="190" cy="510" rx="62" ry="6" fill="#0b2a5b" opacity="0.18" />
      <g className="anim-bob">
        <image href="/illustrations/technician.webp" x="92" y="28" width="200" height="481" preserveAspectRatio="xMidYMax meet" />
      </g>
      <Plant transform="translate(510 300) scale(0.98)" lines={["Fresh", "Clothes,", "Happy", "Homes"]} />
      <HandNote x={474} y={58} lines={["Fast", "Fair", "Fixed"]} rotate={-10} />

      <Sparkle x={250} y={92} s={1.1} />
      <Sparkle x={578} y={250} s={0.7} delay={0.8} color="#60a5fa" />
      <Sparkle x={52} y={330} s={0.8} delay={1.4} />
    </svg>
  );
}

export function BrandsScene() {
  return (
    <svg viewBox="0 0 560 500" role="img" aria-labelledby="brands-art-title" className="h-auto w-full overflow-visible">
      <title id="brands-art-title">Technician with a clipboard beside a washing machine and repair toolbox</title>
      <defs>
        <filter id="brands-soft" x="-30%" y="-100%" width="160%" height="300%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path
        d="M70 160 Q110 50 270 60 Q450 70 500 200 Q540 330 420 420 Q290 500 150 440 Q20 380 40 260 Q48 205 70 160 Z"
        fill="#dbeafe"
      />
      <Gear transform="translate(84 112) scale(0.8)" color="#93c5fd" />
      <g transform="translate(448 84) rotate(18) scale(0.8)">
        <g className="anim-swing">
          <Wrench />
        </g>
      </g>
      <g transform="translate(250 140) scale(0.92)">
        <g className="anim-wobble" style={{ animationDelay: "-2s" }}>
          <WashingMachine id="brands-wm" />
        </g>
      </g>
      <RisingBubbles x={370} y={170} count={6} spread={120} />
      {/* 3D technician render (public/illustrations/technician-checklist.webp, 382×1000) */}
      <ellipse cx="150" cy="466" rx="80" ry="11" fill="#0b2a5b" opacity="0.16" filter="url(#brands-soft)" />
      <g className="anim-bob" style={{ animationDelay: "-1.5s" }}>
        <image href="/illustrations/technician-checklist.webp" x="70" y="58" width="160" height="410" preserveAspectRatio="xMidYMax meet" />
      </g>
      <Toolbox transform="translate(200 378) scale(0.86)" label={site.shortName} />
      <HandNote x={300} y={44} lines={["Every brand", "Every model"]} rotate={-6} size={24} />
      <Sparkle x={520} y={300} s={0.8} delay={0.5} />
      <Sparkle x={40} y={400} s={0.6} delay={1.2} color="#60a5fa" />
    </svg>
  );
}

const hearts: [number, number, number][] = [
  [548, 50, 0],
  [584, 96, 0.7],
  [516, 26, 1.4],
];

export function TeamScene() {
  return (
    <svg viewBox="0 0 600 500" role="img" aria-labelledby="team-art-title" className="h-auto w-full overflow-visible">
      <title id="team-art-title">Our technician with two happy customers after a successful repair</title>
      <defs>
        <filter id="team-soft" x="-20%" y="-100%" width="140%" height="300%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <path
        d="M90 150 Q140 50 300 56 Q480 64 530 200 Q570 330 450 420 Q320 500 170 450 Q30 400 50 270 Q60 200 90 150 Z"
        fill="#ffe6d3"
      />
      {/* 3D team: three separate cutouts (public/illustrations/team-*.webp), each bobbing on its own rhythm */}
      <ellipse cx="300" cy="474" rx="230" ry="14" fill="#0b2a5b" opacity="0.14" filter="url(#team-soft)" />
      <g className="anim-bob" style={{ animationDelay: "-1.2s", animationDuration: "4.2s" }}>
        <image href="/illustrations/team-tech.webp" x="193.4" y="40.8" width="176.2" height="433.7" preserveAspectRatio="xMidYMax meet" />
      </g>
      <g className="anim-bob" style={{ animationDelay: "-2.8s", animationDuration: "3.6s" }}>
        <image href="/illustrations/team-man.webp" x="52.4" y="69.2" width="153.3" height="403.7" preserveAspectRatio="xMidYMax meet" />
      </g>
      <g className="anim-bob" style={{ animationDelay: "-0.4s", animationDuration: "4.8s" }}>
        <image href="/illustrations/team-woman.webp" x="376.3" y="80.3" width="169.9" height="391.4" preserveAspectRatio="xMidYMax meet" />
      </g>
      <HandNote x={0} y={34} lines={["People", "Machines", "Smiles"]} rotate={-14} size={24} />
      {hearts.map(([x, y, d]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          <path
            className="anim-twinkle"
            style={{ "--delay": `${d}s`, "--dur": "2.8s" } as React.CSSProperties}
            d="M0 6 C-10 -4 -6 -14 0 -8 C6 -14 10 -4 0 6 Z"
            fill="#f97316"
          />
        </g>
      ))}
      <Sparkle x={560} y={300} s={0.8} delay={0.3} color="#60a5fa" />
    </svg>
  );
}

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTS = ["webp", "png", "avif", "jpg"] as const;

/** Resolved at build time: the first existing public/illustrations/<name>.<ext>. */
function findArt(name: string) {
  for (const ext of EXTS) {
    const rel = `/illustrations/${name}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

/**
 * Shows a 3D render from public/illustrations/ when present, otherwise the
 * built-in SVG scene. Drop a file in, rebuild, done.
 */
export function SceneArt({
  name,
  alt,
  width,
  height,
  priority = false,
  fallback,
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  fallback: React.ReactNode;
}) {
  const src = findArt(name);
  if (!src) return <>{fallback}</>;
  return (
    <div className="anim-float" style={{ "--dur": "9s", "--dy": "-8px", "--spin": "0deg" } as React.CSSProperties}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 620px, 100vw"
        className="h-auto w-full select-none"
      />
    </div>
  );
}

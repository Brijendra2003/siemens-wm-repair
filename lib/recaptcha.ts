import "server-only";

const MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);

export async function verifyRecaptcha(token: string, expectedHost?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true, score: null as number | null, skipped: true };
  if (!token) return { ok: false, score: null, reason: "missing-token" };

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
    cache: "no-store",
  });
  const d = (await res.json()) as { success: boolean; score?: number; action?: string; hostname?: string };
  const score = d.score ?? 0;
  const hostOk = !expectedHost || !d.hostname || d.hostname === expectedHost;
  const ok = d.success && d.action === "enquiry" && hostOk && score >= MIN_SCORE;
  return { ok, score, reason: ok ? undefined : "low-score" };
}

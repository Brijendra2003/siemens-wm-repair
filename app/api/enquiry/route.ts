import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { enquiryPayload } from "@/lib/schema";
import { rateLimit } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { forwardToAppsScript } from "@/lib/apps-script";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;

function fail(status: number, error: string, extra: Record<string, unknown> = {}) {
  return NextResponse.json({ ok: false, error, ...extra }, { status });
}

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
  const ipHash = createHash("sha256")
    .update(ip + (process.env.APPS_SCRIPT_SECRET ?? "salt"))
    .digest("hex")
    .slice(0, 16);

  const rl = rateLimit(ipHash);
  if (!rl.ok) return fail(429, "Too many requests. Please call or WhatsApp us instead.");

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return fail(400, "Invalid request");
  }

  const parsed = enquiryPayload.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const i of parsed.error.issues) fields[String(i.path[0])] ??= i.message;
    return fail(422, "Please check the highlighted fields.", { fields });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { recaptchaToken, website, startedAt, consent, ...lead } = parsed.data;

  // Bots: silently "succeed" so they don't learn what tripped them
  if (website || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true, leadId: "" });
  }

  const host = req.headers.get("host")?.split(":")[0];
  const captcha = await verifyRecaptcha(recaptchaToken, process.env.NODE_ENV === "production" ? host : undefined);
  if (!captcha.ok) return fail(400, "We couldn't verify your request.");

  const result = await forwardToAppsScript({
    ...lead,
    mobile: `+91${lead.mobile}`,
    recaptchaScore: captcha.score ?? "",
    ipHash,
    userAgent: (req.headers.get("user-agent") ?? "").slice(0, 300),
  });

  if (!result.ok) return fail(502, "We couldn't send your request right now.");
  return NextResponse.json({ ok: true, leadId: result.leadId ?? "" });
}

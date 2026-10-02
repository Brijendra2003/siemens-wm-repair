import "server-only";

export async function forwardToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.APPS_SCRIPT_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;

  if (!url || !secret) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] APPS_SCRIPT_URL not set, dev mode: lead not stored");
      return { ok: true, leadId: `DEV-${Date.now().toString(36).toUpperCase()}` };
    }
    return { ok: false, error: "not-configured" };
  }

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 12_000);
  try {
    // Apps Script answers with a 302 to googleusercontent.com; fetch follows it.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, secret }),
      redirect: "follow",
      cache: "no-store",
      signal: ctrl.signal,
    });
    const json = (await res.json()) as { ok: boolean; leadId?: string; error?: string };
    return json;
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.name : "fetch-failed" };
  } finally {
    clearTimeout(t);
  }
}

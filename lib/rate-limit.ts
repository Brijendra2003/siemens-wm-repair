import "server-only";

/**
 * In-memory sliding window (per server instance). Good enough for a single
 * Node server; on serverless, swap in @upstash/ratelimit using
 * UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
 */
const WINDOW_MS = 10 * 60_000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

export function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(key, recent);
    return { ok: false, retryAfter: Math.ceil((WINDOW_MS - (now - recent[0])) / 1000) };
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return { ok: true, retryAfter: 0 };
}

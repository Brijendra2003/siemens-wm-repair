import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed by default.
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

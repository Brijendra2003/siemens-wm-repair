import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google.com https://www.google.co.in https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net",
  "font-src 'self'",
  "connect-src 'self' https://www.google.com https://www.google-analytics.com https://*.analytics.google.com https://*.google-analytics.com https://googleads.g.doubleclick.net https://www.googletagmanager.com",
  "frame-src https://www.google.com https://recaptcha.google.com https://td.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
      { key: "X-Frame-Options", value: "DENY" },
    ];
    if (process.env.NODE_ENV === "production") {
      security.push(
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Content-Security-Policy", value: csp },
      );
    }
    return [{ source: "/(.*)", headers: security }];
  },
};

export default nextConfig;

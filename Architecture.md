# Architecture — Washing Machine Repair Lead-Gen Landing Page

Single-page, conversion-focused landing site for an **independent** multi-brand washing machine repair service in Mumbai (focus: Western Line stations).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Google Apps Script (Sheet + Email) · reCAPTCHA v3

---

## 1. Goals

| Goal | How |
|---|---|
| Generate enquiries | Every CTA opens one enquiry modal; sticky mobile bar; Call and WhatsApp as fallbacks |
| Stay Google Ads–safe | Section 3 (compliance rules) drives copy, naming, design and tracking decisions |
| Rank locally | Single page + structured data + station-level content + GBP alignment (Section 9) |
| Look trustworthy | Calm blue/white theme, real photos, honest claims, visible policies |
| Fast on mobile | Server components, minimal JS, lazy-loaded modal and reCAPTCHA (Section 12) |

---

## 2. Source Audit — siemensmumbai.in (captured data)

### 2.1 Content captured
- **Phone / WhatsApp (old site):** +91 98338 75771 → replace with your own number in `site.ts`
- **Tagline:** Same-day service across Mumbai; independent repair specialists
- **Hero:** "Siemens Washing Machine Repair Specialists in Mumbai" + trust chips (4.9 rating, same-day, genuine parts, experienced technicians)
- **Stats:** 5+ years, 2400+ customers, 5400+ requests, Mumbai-wide technicians
- **Services:** Washing Machine Repair, Washing Machine Service (preventive/deep clean), Front Load Repair (drum, bearing, motor), Top Load Repair
- **Brands:** Siemens, Bosch, LG, Samsung, IFB, Whirlpool, Godrej, Haier, Panasonic, Onida, Videocon
- **Process (4 steps):** Book → Technician visit → Diagnosis with upfront quote → Repair & testing
- **Warranty block:** 1+ year on installed parts, free revisits under warranty, terms on invoice
- **Why us:** washing-machine specialists, same-day, genuine parts, warranty, experienced technicians, transparent pricing
- **Testimonials:** 4 (Bandra, Andheri, Dadar, Mahim)
- **FAQs (6):** speed, warranty, front/top load, genuine parts, areas covered, cost
- **Form fields:** Name*, Phone*, Locality* (40 localities + Other), Brand* (12 options), Address/Landmark, Problem*, Preferred date, Preferred time slot (Any / 9–12 / 12–3 / 3–6 / 6–9)
- **Coverage:** South, Central, Western, Eastern Mumbai; station lists for Western, Central, Harbour lines
- **Extra routes on old site:** `/brands/*`, `/areas/*`, `/about`, `/privacy`, `/terms`, `/refund-policy`, `/guides/siemens-washing-machine-error-codes`
- **Meta:** `en_IN` locale, `index, follow`, OG + Twitter large card, theme colour `#2f9e5f`, long keyword list

### 2.2 Ads-risk observations (do NOT carry over)
1. Brand name in **domain, `<title>`, H1, OG site name** and "Service Centre" wording → implies an official centre and uses a trademark as identity.
2. "4.9 Rated Service", "2400+ customers", testimonials with no verifiable source → unreliable-claims risk.
3. "Genuine spare parts" and "no questions asked" → hard to substantiate for an independent repairer.
4. Brand-colour imitation (green theme similar to brand-service styling).
5. Large keyword-stuffed meta keywords (ignored by Google, looks spammy).
6. Disclaimer only in the footer, not near the hero.

> I can't see your suspension notice. Open **Google Ads → Policy manager / Account status** and note the exact policy named (commonly Misrepresentation, Trademarks, or Business information). The new site should address that specific policy, and you should appeal on the same account. Creating a fresh account to get around a suspension is itself a violation (circumventing systems).

---

## 3. Google Ads Compliance Rules (design constraints)

### Identity & naming
- Use your **own neutral business name** (e.g. "<YourName> Washing Machine Repair"). Do **not** put Siemens, Samsung, Bosch, LG, IFB etc. in the business name, domain, logo, GBP name, favicon, or Ads display URL.
- Never use words like **"Service Centre", "Authorized", "Official", "Customer Care", "Helpline", "Toll-free"** in a way that implies a brand link.
- Do not use brand logos, brand colours, brand product photos with visible logos, or brand fonts.

### Brand mentions (allowed, controlled)
- Brand names appear **only as plain-text list items** ("Brands we repair") and in FAQ/body copy as nominative references ("we repair LG washing machines").
- Hero H1 stays generic: *"Washing Machine Repair in Mumbai — All Major Brands"*.
- **Disclaimer visible in 3 places:** under the hero, in the Brands section, in the footer:
  > "We are an independent repair service. We are not affiliated with, authorized by, or endorsed by Siemens, Samsung, Bosch, LG or any other brand. Brand names are used only to describe the machines we repair."
- Ad copy (outside this repo): avoid brand names in headlines/descriptions; use generic text, and check Google's trademark policy for keywords.

### Claims
- Only publish **numbers and claims you can prove** (years, customers, ratings). Otherwise omit.
- Replace "Genuine parts" with "Quality-checked spare parts (OEM or compatible, as agreed with you)".
- Replace "Same-day guaranteed" with "Same-day / next-day visits, subject to technician availability".
- Warranty: state the real terms (duration, what's covered, exclusions) on-page and on the invoice.
- **Pricing transparency:** state the visit/inspection charge on the page (or "quote shared before work starts"); no hidden fees.
- Testimonials: only real ones, with consent, linked to a Google review where possible. Until then, show a "Read reviews on Google" link instead.

### Landing page experience
- No auto-opening popups, exit-intent popups, or timed modals. The modal opens **only on a user click**.
- No fake countdown timers, fake "x people viewing", or fake scarcity.
- Business name, phone, address/service area, hours, and email visible in the footer (NAP, consistent with GBP).
- Pages for Privacy Policy, Terms, Refund/Cancellation, and Disclaimer must exist and be linked in the footer.
- Fast, mobile-friendly, no broken links, no misleading buttons.
- Data consent line under the form with link to the privacy policy.

### Tracking compliance
- Mention Google Ads/Analytics cookies and form-data usage in the privacy policy.
- Do not collect sensitive data (no Aadhaar, card, OTP, etc.).

---

## 4. Design System

### 4.1 Direction
Clean, trustworthy "home-service" look: white canvas, deep blue for trust, warm orange for CTAs, soft blue blobs behind illustrated/real imagery, rounded cards, icon feature rows, a few handwritten-style annotations (inspired by your reference image but recoloured).

### 4.2 Palette
| Token | Hex | Use |
|---|---|---|
| `brand-900` | `#0B2A5B` | Headings, footer |
| `brand-700` | `#1D4ED8` | Links, icons, secondary buttons |
| `brand-100` | `#DBEAFE` | Blobs, chips |
| `brand-50` | `#F3F8FF` | Section backgrounds |
| `accent-500` | `#F97316` | Primary CTA (Book a Repair) |
| `accent-600` | `#EA580C` | CTA hover |
| `success-600` | `#16A34A` | Ticks, success state |
| `whatsapp` | `#25D366` | WhatsApp button only |
| `ink-700` | `#334155` | Body text |
| `ink-500` | `#64748B` | Muted text |
| `surface` | `#FFFFFF` | Cards/background |

Contrast: orange CTA uses `#C2410C`-or-darker text-safe variant or white bold text on `accent-600` to meet WCAG AA. Avoid teal/green, red, and Samsung-style blue combinations that mimic brand identities.

### 4.3 Type & shape
- Headings/body: **Plus Jakarta Sans** (via `next/font/google`, `display: swap`)
- Annotations: **Caveat**, used 2–3 times max
- Radius `rounded-2xl`, soft shadow, 8-pt spacing scale
- Motion: subtle fade/slide on scroll (CSS or light Framer Motion), respects `prefers-reduced-motion`

### 4.4 Imagery
- Hero: real technician photo or a clean illustration (no brand logos on the machine). Self-hosted, AVIF/WebP, explicit width/height.
- Icons: `lucide-react`.

---

## 5. Page Structure (single page, anchor navigation)

| # | Section | Anchor | CTA |
|---|---|---|---|
| 0 | Top bar: "Mon–Sun, 8 AM–9 PM · Call" | — | Call |
| 1 | Header (logo, nav, "Book a Repair") | — | Open modal |
| 2 | **Hero**: H1, sub-copy, trust chips, illustration, disclaimer line | `#top` | Book + Call + WhatsApp |
| 3 | Feature strip (Quick diagnosis · Clear quote · Warranty on repair) | — | — |
| 4 | **Services** (Front load, Top load, Semi-auto, Not draining/spinning, Drum noise/bearing, PCB & error codes, Water leakage, Installation) | `#services` | Per-card "Book this" |
| 5 | **Brands we repair** (text chips) + disclaimer | `#brands` | Book |
| 6 | **How it works** (4 steps) | `#process` | Book |
| 7 | Common problems / error-code help (SEO text, accordion) | `#problems` | Book |
| 8 | **Why choose us** | `#why-us` | Book |
| 9 | Pricing & warranty transparency | `#pricing` | Book |
| 10 | **Areas** (Western Line focus + Central/Harbour) | `#areas` | "Book in your area" |
| 11 | Reviews (real only / Google link) | `#reviews` | — |
| 12 | **FAQ** (+ FAQPage JSON-LD) | `#faq` | Book |
| 13 | Final CTA band (reference's "Let's work together" style) | `#contact` | Book + Call + WhatsApp |
| 14 | Footer: NAP, legal links, disclaimer | — | — |
| — | **Sticky mobile bar**: Call · WhatsApp · Book | — | Always visible |

Legal pages (separate minimal routes, required for ads compliance): `/privacy`, `/terms`, `/refund-policy`, `/disclaimer`.

---

## 6. Enquiry Form

### 6.1 Fields & validation (Zod, shared client + server)
| Field | Required | Rule |
|---|---|---|
| `name` | **Yes** | 2–60 chars, letters/spaces/`.`/`'`/`-` |
| `mobile` | **Yes** | Strip spaces/+91/0 → `^[6-9]\d{9}$` |
| `locality` | No | Select (station list) or "Other" |
| `brand` | No | Select list + "Other" |
| `machineType` | No | Front load / Top load / Semi-automatic / Not sure |
| `problem` | No | ≤ 500 chars |
| `address` | No | ≤ 200 chars |
| `preferredDate` | No | Today → +14 days |
| `preferredSlot` | No | Any / 9–12 / 12–3 / 3–6 / 6–9 |
| `consent` | **Yes** | Checkbox: agree to be contacted and to the privacy policy |
| `website` (honeypot) | Must be empty | Hidden from users |
| `startedAt` | Auto | Reject if submitted < 3 seconds after opening |
| `recaptchaToken` | Auto | Required |
| `source` | Auto | Which CTA opened the modal (e.g. `hero`, `sticky-mobile`) |
| `gclid`, `utm_*`, `pageUrl`, `referrer` | Auto | From URL/session |

Inline error messages, `inputMode="numeric"` on mobile, `autocomplete` attributes, `aria-invalid`/`aria-describedby`.

### 6.2 Bot protection (layered)
1. **reCAPTCHA v3**: token generated on submit (action `enquiry`), verified **server-side**; reject if `!success`, wrong action/hostname, or `score < 0.5` (tunable).
2. Honeypot field + minimum fill time.
3. Server-side Zod re-validation (never trust the client).
4. **Rate limit** per IP (e.g. 5 requests / 10 min) via Upstash Redis (or in-memory fallback).
5. Apps Script **shared secret** so only your API route can write to the Sheet.
6. Length caps and control-character stripping to prevent formula injection in Sheets (prefix `'` to values starting with `=`, `+`, `-`, `@`).
7. reCAPTCHA attribution text under the form (required if the badge is hidden).

### 6.3 Data flow

```
Browser (modal)
   │  POST JSON  (name, mobile, …, recaptchaToken)
   ▼
Next.js Route Handler  /api/enquiry   (runtime: nodejs)
   │  1. rate limit  2. Zod  3. honeypot/time  4. verify reCAPTCHA v3
   │  5. add metadata (IP hash, UA, score, timestamp IST)
   ▼  POST JSON + secret  (URL kept server-side)
Google Apps Script Web App  (doPost)
   │  - verify secret   - LockService
   │  - appendRow → Google Sheet
   │  - MailApp.sendEmail → you (+ optional customer ack)
   ▼
JSON {ok:true, leadId}  →  UI success state  →  fire Ads/GA4 conversion
```

The Apps Script URL is **never exposed to the browser**.

### 6.4 Google Sheet columns
`Timestamp (IST) | Lead ID | Name | Mobile | Locality | Brand | Machine Type | Problem | Address | Preferred Date | Preferred Slot | CTA Source | Page URL | Referrer | gclid | utm_source | utm_medium | utm_campaign | utm_term | reCAPTCHA Score | IP Hash | User Agent | Status`

### 6.5 Apps Script skeleton (`Code.gs`)
```javascript
const SHEET_NAME = 'Leads';
const SECRET = PropertiesService.getScriptProperties().getProperty('SECRET');
const NOTIFY_TO = PropertiesService.getScriptProperties().getProperty('NOTIFY_TO');

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SECRET) return out({ ok: false, error: 'unauthorized' });

    const sh = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    const leadId = 'WM-' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyMMdd-HHmmss');
    const safe = v => /^[=+\-@]/.test(String(v || '')) ? "'" + v : (v || '');

    sh.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd-MMM-yyyy HH:mm:ss'),
      leadId, safe(d.name), safe(d.mobile), safe(d.locality), safe(d.brand),
      safe(d.machineType), safe(d.problem), safe(d.address),
      safe(d.preferredDate), safe(d.preferredSlot), safe(d.source),
      safe(d.pageUrl), safe(d.referrer), safe(d.gclid),
      safe(d.utm_source), safe(d.utm_medium), safe(d.utm_campaign), safe(d.utm_term),
      d.recaptchaScore, d.ipHash, safe(d.userAgent), 'New'
    ]);

    MailApp.sendEmail({
      to: NOTIFY_TO,
      subject: `New repair enquiry ${leadId} – ${d.name} (${d.locality || 'n/a'})`,
      htmlBody: `<p><b>${d.name}</b> – ${d.mobile}</p>
                 <p>${d.brand || ''} ${d.machineType || ''} · ${d.locality || ''}</p>
                 <p>${d.problem || ''}</p><p>Source: ${d.source}</p>`
    });
    return out({ ok: true, leadId });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
const out = o => ContentService.createTextOutput(JSON.stringify(o))
  .setMimeType(ContentService.MimeType.JSON);
```
Deploy: **Web app → Execute as: Me → Who has access: Anyone**; store `SECRET` and `NOTIFY_TO` in Script Properties. Check current Apps Script email quotas for your account type (consumer accounts have a much lower daily limit than Workspace). Add a failure fallback: if Apps Script fails, the API route returns an error and the UI shows "Please call or WhatsApp us".

---

## 7. CTA & Modal System

- `EnquiryProvider` (React context) exposes `openEnquiry({ source })`.
- `<BookButton source="hero" />` is the only CTA component; it calls `openEnquiry`.
- Modal: accessible dialog (focus trap, ESC, `aria-modal`, scroll lock), loaded with `next/dynamic` on first interaction (idle/hover/click) so it doesn't affect LCP.
- States: `idle → validating → submitting (loader) → success | error`.
- Success: confirmation with lead ID, "we'll call you shortly", Call/WhatsApp buttons, and conversion event.
- **Never open automatically.**
- CTA placements: header, hero, each service card, brands, each process section, why-us, pricing, areas, FAQ end, final band, footer, sticky mobile bar.
- Call and WhatsApp links use `tel:` and `https://wa.me/<number>?text=...`, both tracked as events.

---

## 8. Loading Animation

- `components/ui/Loader.tsx` wraps your supplied asset. **Please tell me the format** (Lottie JSON / GIF / SVG / MP4).
- Use it in: form submit button, modal lazy-load fallback (`Suspense`), and optional image/section skeletons.
- Do **not** use a blocking full-page preloader (hurts LCP, Core Web Vitals and Ads landing-page quality).
- If Lottie: use `lottie-react` or `@lottiefiles/dotlottie-react`, dynamically imported.

---

## 9. SEO Architecture

### 9.1 Targeting
- **Primary:** washing machine repair Mumbai; washing machine service Mumbai; front load / top load washing machine repair Mumbai
- **Brand+service (organic body copy only):** Siemens / Samsung / Bosch / LG / IFB / Whirlpool washing machine repair Mumbai
- **Local (Western Line):** Churchgate, Marine Lines, Charni Road, Grant Road, Mumbai Central, Mahalaxmi, Lower Parel, Prabhadevi, Dadar, Matunga Road, Mahim, Bandra, Khar Road, Santacruz, Vile Parle, Andheri, Jogeshwari, Ram Mandir, Goregaon, Malad, Kandivali, Borivali, Dahisar, Mira Road, Bhayandar, Naigaon, Vasai Road, Nalasopara, Virar
- **Secondary:** Central & Harbour line stations (smaller block)
- Add "washing machine repair near <station>" phrasing inside the Areas section and FAQs, written naturally. No keyword stuffing, no hidden text.

### 9.2 Metadata (Next.js Metadata API in `app/layout.tsx` / `app/page.tsx`)
- Title (≤ 60 chars) e.g. `Washing Machine Repair in Mumbai | <Brand> – All Major Brands`
- Description (≤ 155 chars), **no** claims you can't prove
- `alternates.canonical`, `metadataBase`, `robots: index, follow, max-image-preview:large`
- `openGraph`: `type website`, `locale en_IN`, `siteName`, `title`, `description`, `url`, 1200×630 image
- `twitter`: `summary_large_image`
- `app/opengraph-image.tsx` (generated OG image), `app/twitter-image.tsx`
- `other`: `geo.region = IN-MH`, `geo.placename = Mumbai`, `theme-color` matching `brand-900`
- `format-detection` allows phone numbers; `viewport` configured via `generateViewport`
- `lang="en-IN"` on `<html>`

### 9.3 Structured data (JSON-LD, rendered server-side in `components/seo/JsonLd.tsx`)
| Schema | Notes |
|---|---|
| `LocalBusiness` (+ `serviceType`) | name, url, telephone, email, address, geo, `openingHoursSpecification`, `priceRange`, `areaServed[]` (Mumbai + stations), `sameAs` (GBP, socials), `hasOfferCatalog` |
| `Service` (one per service) | provider → LocalBusiness, `areaServed`, `serviceType` |
| `WebSite` + `Organization` | name, logo, url, contact point |
| `FAQPage` | Mirrors visible FAQs exactly. Google limits FAQ rich results for most sites now, but the markup still helps machine readers/LLMs |
| `BreadcrumbList` | Only for legal pages |
| `AggregateRating` / `Review` | **Skip** unless you display genuine, verifiable reviews; self-serving review markup for your own business is not eligible for rich results and risks a manual action |

Validate with Google's Rich Results Test and schema.org validator.

### 9.4 Crawl, discovery & AI files
| File | Implementation |
|---|---|
| `app/sitemap.ts` → `/sitemap.xml` | Home + legal pages, `lastModified`, `changeFrequency`, `priority` |
| `app/robots.ts` → `/robots.txt` | Allow all; `Sitemap:` line; disallow `/api/`. Decide on AI crawler policy (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — default: allow |
| `app/manifest.ts` → `/manifest.webmanifest` | name, short_name, `start_url`, `display: standalone`, theme/background colours, 192/512 + maskable icons |
| `public/llms.txt` | Short Markdown summary: who you are, services, brands (with independence statement), service areas, contact, key URLs |
| `public/llms-full.txt` | Full plain-text version of page content (services, FAQs, areas, policies) |
| Icons | `app/icon.png`, `app/apple-icon.png`, `favicon.ico` |
| `public/.well-known/security.txt` | Optional |

`llms.txt` must repeat the independence disclaimer so AI answers don't call you an official centre.

### 9.5 Off-page / integrations (not code, but part of the plan)
- **Google Business Profile**: same neutral name, address/service-area, categories ("Washing machine repair service"), same phone as site (NAP consistency)
- Google Search Console (domain property), Bing Webmaster Tools, submit sitemap
- Collect real Google reviews and link them from the page
- Local citations (Justdial, Sulekha, etc.) with identical NAP
- **Optional Phase 2:** programmatic station pages `/areas/[slug]` via `generateStaticParams` if you later want more organic reach. This is outside the single-page scope and not required for launch.

### 9.6 On-page rules
- One `<h1>`, logical `h2`/`h3` hierarchy, semantic landmarks
- Descriptive `alt` text, descriptive anchor text, internal anchor links
- Content depth: ~1,200–1,800 words across sections (services, problems, areas, FAQ)

---

## 10. Analytics & Conversion Tracking
- `@next/third-parties` (GA4 + Google tag) loaded after interaction/`lazyOnload`
- Events: `generate_lead` (form success, with `source`), `click_call`, `click_whatsapp`, `open_enquiry`
- Google Ads conversion for form success (+ call/WhatsApp clicks as secondary)
- Capture `gclid`/`utm_*` on first load into `sessionStorage` and include in the submission
- Cookie/consent notice if you use remarketing

---

## 11. Project Structure

```
.
├── app/
│   ├── layout.tsx                # fonts, metadata, JSON-LD, providers
│   ├── page.tsx                  # landing page (assembles sections)
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── icon.png / apple-icon.png
│   ├── api/enquiry/route.ts      # validate + reCAPTCHA + forward to Apps Script
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── refund-policy/page.tsx
│   └── disclaimer/page.tsx
├── components/
│   ├── layout/ (TopBar, Header, Footer, StickyMobileBar)
│   ├── sections/ (Hero, FeatureStrip, Services, Brands, Process, Problems,
│   │              WhyUs, Pricing, Areas, Reviews, Faq, FinalCta)
│   ├── enquiry/ (EnquiryProvider, EnquiryModal, EnquiryForm, BookButton, SuccessState)
│   ├── seo/ (JsonLd)
│   └── ui/ (Button, Input, Select, Accordion, Loader, Container)
├── config/site.ts                # name, phone, WhatsApp, address, hours, URLs
├── data/ (services.ts, brands.ts, areas.ts, faqs.ts, steps.ts)
├── lib/ (schema.ts [zod], recaptcha.ts, rate-limit.ts, apps-script.ts, tracking.ts, seo.ts)
├── public/ (images, llms.txt, llms-full.txt, icons)
├── apps-script/Code.gs           # reference copy of the script
├── next.config.ts                # image formats, security headers
├── tailwind config / globals.css # design tokens
└── .env.local
```

Content lives in `config/` and `data/`, so copy or number changes don't need component edits.

---

## 12. Performance, Security & Accessibility

**Performance targets (mobile 4G):** LCP < 2.5 s · INP < 200 ms · CLS < 0.1 · Lighthouse ≥ 95 (Performance, SEO, Best Practices, Accessibility)
- Server Components by default; client components only for modal, form, accordion, sticky bar
- `next/image` with AVIF/WebP, `priority` only on the hero image
- `next/font` with `display: swap`; two font families only
- Lazy-load modal, reCAPTCHA, analytics, Lottie
- Static generation of the landing page; ISR not needed

**Security**
- Headers in `next.config.ts`: HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP allowing Google reCAPTCHA/GA/Ads domains
- Secrets only in server env vars
- Escape output; strip control characters; formula-injection guard
- No PII in logs; store IP only as hash

**Accessibility:** WCAG 2.1 AA, visible focus, keyboard-operable modal, labelled inputs, sufficient contrast, reduced-motion support

---

## 13. Environment Variables
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_WHATSAPP=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
APPS_SCRIPT_URL=
APPS_SCRIPT_SECRET=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ADS_ID=
NEXT_PUBLIC_ADS_CONVERSION_LABEL=
UPSTASH_REDIS_REST_URL=      # optional, rate limiting
UPSTASH_REDIS_REST_TOKEN=    # optional
```

## 14. Dependencies
`next`, `react`, `typescript`, `tailwindcss`, `zod`, `react-hook-form`, `@hookform/resolvers`, `lucide-react`, `clsx`, `@next/third-parties`, `@upstash/ratelimit` + `@upstash/redis` (optional), `lottie-react` (if Lottie), `@radix-ui/react-dialog` + `@radix-ui/react-accordion` (accessible primitives)

---

## 15. Build Plan
1. **Foundation:** scaffold Next.js + TS + Tailwind, tokens, fonts, `site.ts`
2. **Static sections:** layout and all sections with placeholder copy
3. **Enquiry system:** provider, modal, form, validation, Loader
4. **Backend:** `/api/enquiry`, reCAPTCHA, rate limit, Apps Script + Sheet + email
5. **SEO layer:** metadata, JSON-LD, sitemap, robots, manifest, OG image, `llms.txt`
6. **Legal pages + disclaimers** (compliance pass using Section 3 checklist)
7. **Tracking:** GA4, Ads conversions, call/WhatsApp events
8. **QA:** Lighthouse, Rich Results Test, mobile devices, form abuse tests, Ads policy re-read
9. **Launch:** domain + SSL, Search Console/Bing, GBP link, submit sitemap

---

## 16. Pre-Launch Compliance Checklist
- [ ] No brand name in business name, domain, logo, favicon, title or H1
- [ ] No "Service Centre / Authorized / Official / Helpline / Customer Care"
- [ ] Independence disclaimer in hero, brands section and footer
- [ ] Every number, rating and warranty claim is true and provable
- [ ] Visit/inspection charge or quote policy stated clearly
- [ ] Real address/service area, phone, email, hours in the footer (matches GBP)
- [ ] Privacy, Terms, Refund, Disclaimer pages live
- [ ] No auto popups, timers or fake urgency
- [ ] No brand logos/colours/imagery
- [ ] Form consent checkbox and reCAPTCHA notice present
- [ ] Ad copy consistent with page content
- [ ] Appeal filed using the exact policy named in the suspension notice

---

## 17. Inputs Needed From You
1. Business name and domain (neutral, no brand names)
2. Phone and WhatsApp number, email, working hours
3. Address or service-area definition, and GBP link
4. Real figures: years in business, customers served, warranty terms, visit/inspection charge
5. Your base area and the exact stations you actually cover (Western Line focus)
6. Loading animation file and its format
7. Logo (or I'll suggest a wordmark), photos/illustrations
8. The exact policy reason in the Google Ads suspension notice

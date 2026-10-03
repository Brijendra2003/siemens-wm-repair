/**
 * Single source of truth for business details (NAP), contact and claims.
 * Keep this identical to your Google Business Profile.
 *
 * ⚠ Ads compliance: never put a manufacturer name (Siemens, Bosch…) in
 * `name`, `shortName`, `legalName` or the domain. See Architecture.md §3.
 */

const phoneDigits = (process.env.NEXT_PUBLIC_PHONE ?? "919833875771").replace(/\D/g, "");
const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP ?? phoneDigits).replace(/\D/g, "");

function formatIndian(d: string) {
  const local = d.slice(-10);
  return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
}

export const site = {
  // TODO: replace with your own neutral business name
  name: "SpinCare Repairs",
  shortName: "SpinCare",
  logoTagline: "Washing Machine Repair",
  legalName: "SpinCare Repairs",
  tagline: "Independent multi-brand washing machine repair across Mumbai",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),

  phone: {
    e164: `+${phoneDigits}`,
    display: formatIndian(phoneDigits),
    href: `tel:+${phoneDigits}`,
  },
  whatsapp: {
    digits: whatsappDigits,
    href: `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
      "Hi, I need help with my washing machine. ",
    )}`,
  },
  // TODO: real email + address (must match Google Business Profile)
  email: "hello@example.com",
  address: {
    street: "Service area business",
    locality: "Mumbai",
    region: "Maharashtra",
    regionCode: "IN-MH",
    postalCode: "400050",
    country: "IN",
  },
  geo: { lat: 19.0596, lng: 72.8295 },
  serviceAreaLabel: "Mumbai: Western Line, Central & Harbour",
  hours: {
    label: "Mon–Sun, 8 AM – 9 PM",
    opens: "08:00",
    closes: "21:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },

  /** Inspection / visit charge in ₹. `null` = show "quote shared before work starts". */
  visitCharge: null as number | null,
  warranty: {
    headline: "Warranty on replaced parts",
    detail:
      "Duration depends on the part (stated on your invoice). Free revisit if the same fault returns within the warranty period.",
  },

  /** Only set these once they're verifiable. Leave `null` to hide. */
  googleReviewsUrl: null as string | null,
  sameAs: [] as string[],

  disclaimer:
    "We are an independent repair service. We are not affiliated with, authorized by, or endorsed by Siemens, Bosch or any other brand. Brand names are used only to describe the machines we repair.",
} as const;

export type Site = typeof site;

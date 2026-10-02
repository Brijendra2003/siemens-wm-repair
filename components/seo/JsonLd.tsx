import { site } from "@/config/site";
import { areas, faqs, services } from "@/data/content";

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SiteJsonLd() {
  const businessId = `${site.url}/#business`;
  const areaServed = [
    { "@type": "City", name: "Mumbai" },
    ...areas.western.map((name) => ({ "@type": "Place", name: `${name}, Mumbai` })),
  ];

  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            inLanguage: "en-IN",
            publisher: { "@id": businessId },
          },
          {
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": businessId,
            name: site.name,
            description: `${site.tagline}. ${site.disclaimer}`,
            url: site.url,
            telephone: site.phone.e164,
            email: site.email,
            image: `${site.url}/opengraph-image`,
            logo: `${site.url}/icon.svg`,
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.locality,
              addressRegion: site.address.region,
              postalCode: site.address.postalCode,
              addressCountry: site.address.country,
            },
            geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: site.hours.days,
                opens: site.hours.opens,
                closes: site.hours.closes,
              },
            ],
            areaServed,
            ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Washing machine repair services",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.text,
                  serviceType: "Washing machine repair",
                  provider: { "@id": businessId },
                  areaServed: { "@type": "City", name: "Mumbai" },
                },
              })),
            },
          },
          {
            "@type": "FAQPage",
            "@id": `${site.url}/#faq`,
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }}
    />
  );
}

export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
        ],
      }}
    />
  );
}

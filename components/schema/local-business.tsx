import { content } from "@/lib/content";

export function LocalBusinessJsonLd() {
  const { business } = content;

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InsuranceAgency"],
    "@id": `${business.url}#organization`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    telephone: business.phone.e164,
    email: business.email,
    foundingDate: String(business.foundedYear),
    priceRange: "Free consultation",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "Medicare",
      "Medicare Supplement Insurance",
      "Medicare Advantage",
      "Medicare Part D",
      "Health Insurance",
    ],
    sameAs: Object.values(business.socials).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // Stable, server-rendered string — safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

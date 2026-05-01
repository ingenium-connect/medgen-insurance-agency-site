import React from "react";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "LocalBusiness" | "InsuranceAgency" | "BreadcrumbList";
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const data = {
    name: "Med-Gen Insurance Agency",
    alternateName: "Med-Gen Insurance",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://medgeninsurance.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://medgeninsurance.com"}/logo.png`,
    description:
      "Med-Gen Insurance Agency provides comprehensive medical and general insurance solutions in Kenya. Trusted by individuals and businesses for quality coverage and excellent customer service.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254717227690",
      contactType: "customer service",
      email: "support@medgeninsurance.com",
      availableLanguage: ["en", "sw"],
      areaServed: "KE",
    },
    sameAs: [
      "https://facebook.com/medgeninsurance",
      "https://twitter.com/medgeninsurance",
      "https://instagram.com/medgeninsurance",
      "https://linkedin.com/company/medgeninsurance",
    ],
  };

  return <StructuredData type="Organization" data={data} />;
}

// Website Schema
export function WebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medgeninsurance.com";

  const data = {
    name: "Med-Gen Insurance Agency",
    url: baseUrl,
    description:
      "Comprehensive medical and general insurance solutions in Kenya",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData type="WebSite" data={data} />;
}

// Insurance Agency Schema
export function InsuranceAgencySchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medgeninsurance.com";

  const data = {
    "@type": "InsuranceAgency",
    name: "Med-Gen Insurance Agency",
    image: `${baseUrl}/logo.png`,
    telephone: "+254717227690",
    email: "support@medgeninsurance.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    url: baseUrl,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Insurance",
            description:
              "Comprehensive health coverage for individuals, families, and groups",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Insurance",
            description:
              "Motor, property, travel, and business insurance solutions",
          },
        },
      ],
    },
  };

  return <StructuredData type="InsuranceAgency" data={data} />;
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medgeninsurance.com";

  const data = {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  return <StructuredData type="BreadcrumbList" data={data as any} />;
}

import type { Metadata } from "next";
import { CONTACT, INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const SITE_TITLE = `${SITE_NAME} | Grand Sky Urbanova - Lavagem e secagem`;

export const SITE_DESCRIPTION =
  "Lavanderia COP 30 — lavagem e secagem com qualidade e agilidade no Grand Sky Urbanova, São José dos Campos. Máquinas M, G e GG, incluindo a única GG da cidade.";

export const SITE_KEYWORDS = [
  "lavanderia",
  "lavanderia São José dos Campos",
  "lavanderia Urbanova",
  "lavanderia COP 30",
  "lavagem de roupas",
  "secagem de roupas",
  "Grand Sky Urbanova",
  "lavanderia self service",
  "máquina de lavar GG",
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/assets/images/logo01.png`,
    logo: `${SITE_URL}/assets/images/logo01.png`,
    telephone: `+${CONTACT.phone.replace(/\D/g, "")}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.state,
      postalCode: CONTACT.zip,
      addressCountry: CONTACT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.2203,
      longitude: -45.9341,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    sameAs: [INSTAGRAM_URL],
    areaServed: {
      "@type": "City",
      name: "São José dos Campos",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
  };
}

import { getLocalBusinessJsonLd, getWebSiteJsonLd } from "@/lib/seo";

export function JsonLd() {
  const schemas = [getLocalBusinessJsonLd(), getWebSiteJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

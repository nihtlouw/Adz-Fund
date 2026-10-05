import { SITE } from "@/data/site";

const DEFAULT_DESCRIPTION =
  "AzHcriel Capital Investment Fund — a company profile for prospective investors, founders, and partners.";

export function pageTitle(title?: string) {
  if (!title || title === SITE.shortName) return `${SITE.shortName} · Investment Fund`;
  return `${title} · ${SITE.shortName}`;
}

export function pageMeta(opts: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}) {
  const title = pageTitle(opts.title);
  const description = opts.description ?? DEFAULT_DESCRIPTION;
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "theme-color", content: "#0c1f18" },
    { name: "application-name", content: SITE.shortName },
  ];
  if (opts.noIndex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }
  return { title, description, meta };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: "/",
  logo: SITE.logoSrc,
};

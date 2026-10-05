export const SITE = {
  name: "AzHcriel Capital Investment Fund",
  shortName: "AzHcriel Capital",
  eyebrow: "AZHCRIEL CAPITAL",
  tagline: "Building Long-Term Value Through Disciplined Capital",
  positioning:
    "A multi-asset investment fund concentrating capital in Bitcoin and select altcoins, Indonesian equities, and gold.",
  description:
    "AzHcriel Capital Investment Fund pursues long-term capital growth through a disciplined, three-sleeve allocation: digital assets (BTC and altcoins), liquid Indonesian equities listed on the IDX, and gold as a diversifier.",
  mission:
    "To grow capital with discipline by combining high-conviction digital assets, domestic equity strength, and the stability of gold.",
  vision:
    "To be a trusted, institutional-grade investment partner across emerging digital and traditional markets.",
  disclaimer:
    "This website presents a model allocation and a hypothetical simulation for illustration only. Nothing here is an offer or solicitation to buy any security, crypto-asset or commodity. Simulated or past performance does not guarantee future results; digital assets are highly volatile and investments may lose value.",
  contactEmail: "Via the inquiry form",
  contactPhone: "Shared on request",
  address: "Indonesia · full address on request",
  officeHours: "By appointment",
  linkedinUrl: "",
  logoSrc: "/logo/azhcriel-mark.jpg",
  heroImage: "/images/hero-market.svg",
} as const;

export const VALUES = [
  {
    title: "Discipline",
    body: "Capital decisions follow consistent position sizing, liquidity screens and risk limits across every sleeve.",
  },
  {
    title: "Stewardship",
    body: "Long-horizon responsibility to partners: transparent reporting and clear separation of conviction from speculation.",
  },
  {
    title: "Partnership",
    body: "Working openly with co-investors, custodians and counterparties across digital and traditional markets.",
  },
] as const;

export const NAV = [
  { label: "About", to: "/about" },
  { label: "Strategy", to: "/strategy" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Performance", to: "/performance" },
  { label: "Team", to: "/team" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const INQUIRY_TYPES = [
  "Investor",
  "Founder / Investment Opportunity",
  "Partnership",
  "Media",
  "General",
  "Other",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export type PortfolioCompany = {
  slug: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  sector: string;
  stage: string;
  geography: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
};

/**
 * Model allocation (illustrative). Weights are percentages of the model
 * portfolio and are not live positions.
 */
export const PORTFOLIO: PortfolioCompany[] = [
  {
    slug: "bitcoin",
    name: "Bitcoin (BTC)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Digital Assets",
    stage: "Core · 22%",
    geography: "Global",
    description: "Anchor holding of the digital-asset sleeve.",
    imageUrl: "/images/focus-crypto.svg",
    featured: false,
    published: true,
  },
  {
    slug: "ethereum",
    name: "Ethereum (ETH)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Digital Assets",
    stage: "Satellite · 8%",
    geography: "Global",
    description: "Large-cap smart-contract platform exposure.",
    imageUrl: "/images/focus-crypto.svg",
    featured: false,
    published: true,
  },
  {
    slug: "solana",
    name: "Solana (SOL)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Digital Assets",
    stage: "Satellite · 5%",
    geography: "Global",
    description: "Selective high-throughput altcoin position.",
    imageUrl: "/images/focus-crypto.svg",
    featured: false,
    published: true,
  },
  {
    slug: "bbca",
    name: "Bank Central Asia (BBCA)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Indonesian Equities",
    stage: "Core · 14%",
    geography: "Indonesia",
    description: "Large-cap private bank listed on the IDX.",
    imageUrl: "/images/focus-idx.svg",
    featured: false,
    published: true,
  },
  {
    slug: "bbri",
    name: "Bank Rakyat Indonesia (BBRI)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Indonesian Equities",
    stage: "Core · 10%",
    geography: "Indonesia",
    description: "Large-cap bank with a broad retail and micro-finance base.",
    imageUrl: "/images/focus-idx.svg",
    featured: false,
    published: true,
  },
  {
    slug: "bmri",
    name: "Bank Mandiri (BMRI)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Indonesian Equities",
    stage: "Core · 8%",
    geography: "Indonesia",
    description: "Large-cap state-owned bank listed on the IDX.",
    imageUrl: "/images/focus-idx.svg",
    featured: false,
    published: true,
  },
  {
    slug: "tlkm",
    name: "Telkom Indonesia (TLKM)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Indonesian Equities",
    stage: "Core · 8%",
    geography: "Indonesia",
    description: "Telecommunications and digital infrastructure leader.",
    imageUrl: "/images/focus-idx.svg",
    featured: false,
    published: true,
  },
  {
    slug: "gold-physical",
    name: "Physical Gold",
    logoUrl: "",
    websiteUrl: "",
    sector: "Gold",
    stage: "Core · 15%",
    geography: "Indonesia",
    description: "Allocated bullion held as a store of value.",
    imageUrl: "/images/focus-gold.svg",
    featured: false,
    published: true,
  },
  {
    slug: "gold-market",
    name: "Market-Linked Gold (XAU)",
    logoUrl: "",
    websiteUrl: "",
    sector: "Gold",
    stage: "Satellite · 10%",
    geography: "Global",
    description: "Liquid gold-price exposure for tactical rebalancing.",
    imageUrl: "/images/focus-gold.svg",
    featured: false,
    published: true,
  },
];

export const PORTFOLIO_EMPTY =
  "Selected investments will be presented here as they become available for public disclosure.";

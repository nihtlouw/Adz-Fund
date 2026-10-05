export const PHILOSOPHY = [
  {
    id: "long-term",
    title: "Long-Term Perspective",
    body: "[INVESTMENT THESIS] Capital is allocated with a multi-year horizon. This card is a structural placeholder pending approved thesis language.",
  },
  {
    id: "underwriting",
    title: "Disciplined Underwriting",
    body: "[INVESTMENT THESIS] Opportunities are evaluated against a consistent underwriting standard. Replace with approved process language.",
  },
  {
    id: "value",
    title: "Value Creation",
    body: "[INVESTMENT THESIS] Partnership after close is intended to support durable operating improvement. Replace with approved language.",
  },
  {
    id: "partnership",
    title: "Strategic Partnership",
    body: "[INVESTMENT THESIS] Alignment with management teams and co-investors is treated as a core underwriting input. Replace with approved language.",
  },
] as const;

export const FOCUS_AREAS = [
  {
    slug: "digital-assets",
    name: "Digital Assets — BTC & Altcoins",
    shortDescription:
      "Core exposure to Bitcoin, complemented by a selective, size-limited allocation to large-cap altcoins such as Ethereum and Solana.",
    investmentRationale:
      "Bitcoin anchors the sleeve as a scarce, liquid, globally traded asset. Altcoins add selective upside under stricter position limits and liquidity screens.",
    imageUrl: "/images/focus-crypto.svg",
    imageAlt: "Placeholder artwork: volatile price line over a dark green grid",
    displayOrder: 1,
    published: true,
  },
  {
    slug: "indonesian-equities",
    name: "Indonesian Equities (IDX)",
    shortDescription:
      "Concentrated exposure to liquid, large-cap companies listed on the Indonesia Stock Exchange, across banking, telecommunications and consumer sectors.",
    investmentRationale:
      "Screened for liquidity, governance and earnings quality, with a domestic-growth thesis anchored in a large consumer base and a deep banking sector.",
    imageUrl: "/images/focus-idx.svg",
    imageAlt: "Placeholder artwork: candlestick bars over a dark green grid",
    displayOrder: 2,
    published: true,
  },
  {
    slug: "gold",
    name: "Gold",
    shortDescription:
      "Physical and market-linked gold exposure held as a diversifier and store of value within the portfolio.",
    investmentRationale:
      "Intended to dampen portfolio drawdowns through its historically low correlation to equities and digital assets.",
    imageUrl: "/images/focus-gold.svg",
    imageAlt: "Placeholder artwork: stacked gold bars over a dark green grid",
    displayOrder: 3,
    published: true,
  },
] as const;

export const PROCESS = [
  {
    step: 1,
    title: "Allocate",
    description:
      "Set target weights and allowed ranges for digital assets, Indonesian equities and gold.",
  },
  {
    step: 2,
    title: "Select",
    description:
      "Screen holdings for liquidity, custody and governance quality before any position is opened.",
  },
  {
    step: 3,
    title: "Size",
    description:
      "Cap each position and each sleeve so no single idea can dominate portfolio risk.",
  },
  {
    step: 4,
    title: "Rebalance",
    description:
      "Review quarterly and return weights to target when they drift beyond the agreed band.",
  },
  {
    step: 5,
    title: "Report",
    description:
      "Share allocation, simulated and realised results, and risk metrics with partners on a regular cadence.",
  },
] as const;

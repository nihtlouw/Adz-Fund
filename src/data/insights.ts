export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImageUrl: string;
  coverAlt: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  published: boolean;
  placeholder: boolean;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "bitcoin-anchors-the-digital-asset-sleeve",
    title: "Why Bitcoin Anchors the Digital-Asset Sleeve",
    excerpt: "Bitcoin is the most liquid and widely held crypto asset, which is why it leads the digital-asset sleeve while altcoins stay size-limited.",
    category: "Digital Assets",
    coverImageUrl: "/images/insight-bitcoin.svg",
    coverAlt: "Gold Bitcoin coin on a dark green chart background",
    publishedAt: "2026-09-18",
    seoTitle: "Why Bitcoin Anchors the Digital-Asset Sleeve — AzHcriel Capital",
    seoDescription: "Bitcoin is the most liquid and widely held crypto asset, which is why it leads the digital-asset sleeve while altcoins stay size-limited.",
    featured: true,
    published: true,
    placeholder: false,
    body: [
      "Bitcoin is the deepest and most liquid market in digital assets, with the longest trading history and the widest custody options. That makes it the natural anchor for the sleeve.",
      "Altcoins such as Ethereum and Solana add selective upside, but they are more volatile and less liquid. They are held in smaller sizes under hard position caps.",
      "Digital assets can fall sharply in short periods. Sizing the sleeve to about a third of the portfolio is a deliberate choice to keep that volatility from dominating results.",
      "Simulated or past performance does not guarantee future results. This article is educational and is not investment advice.",
    ],
  },
  {
    slug: "indonesian-equities-owning-domestic-growth",
    title: "Indonesian Equities: Owning Domestic Growth",
    excerpt: "Large IDX companies in banking, telecommunications and consumer give the portfolio exposure to Indonesia's domestic economy.",
    category: "Equities",
    coverImageUrl: "/images/insight-idx.svg",
    coverAlt: "Rising candlestick bars over a Jakarta skyline silhouette",
    publishedAt: "2026-08-27",
    seoTitle: "Indonesian Equities: Owning Domestic Growth — AzHcriel Capital",
    seoDescription: "Large IDX companies in banking, telecommunications and consumer give the portfolio exposure to Indonesia's domestic economy.",
    featured: false,
    published: true,
    placeholder: false,
    body: [
      "Indonesia has a large, young consumer base and a banking system that serves much of it. Liquid large-cap stocks are the simplest way to hold that growth story.",
      "Holdings are screened for trading liquidity, governance and earnings quality, and sized so that no single stock drives the sleeve.",
      "Equity returns vary by quarter and are affected by rates, the rupiah and global risk appetite. The sleeve is meant to compound over years, not to win every quarter.",
      "Simulated or past performance does not guarantee future results. This article is educational and is not investment advice.",
    ],
  },
  {
    slug: "gold-the-stabiliser",
    title: "Gold: The Portfolio Stabiliser",
    excerpt: "Gold has historically moved differently from equities and crypto, which is why it earns a standing allocation.",
    category: "Diversification",
    coverImageUrl: "/images/insight-gold.svg",
    coverAlt: "Stacked gold bars on a dark green background",
    publishedAt: "2026-07-30",
    seoTitle: "Gold: The Portfolio Stabiliser — AzHcriel Capital",
    seoDescription: "Gold has historically moved differently from equities and crypto, which is why it earns a standing allocation.",
    featured: false,
    published: true,
    placeholder: false,
    body: [
      "Gold does not rely on company earnings or network adoption. Its price has often held up when risk assets fall, which helps soften portfolio drawdowns.",
      "The sleeve mixes physical gold, held as a store of value, with market-linked exposure that is easier to rebalance quickly.",
      "Gold can also fall or go sideways for long periods, and it pays no income. It is a stabiliser, not a growth driver.",
      "Simulated or past performance does not guarantee future results. This article is educational and is not investment advice.",
    ],
  },
];

export function getPublishedInsights() {
  return INSIGHTS.filter((item) => item.published).sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

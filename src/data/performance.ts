export const QUARTERS = ["Q1", "Q2", "Q3", "Q4"] as const;

export const SIM_NOTE =
  "Illustrative simulation based on hypothetical assumptions and quarterly rebalancing. Not actual performance, not a guarantee or promise of returns, and not an offer of any investment. Digital assets are highly volatile and capital may be lost.";

type Asset = { id: string; name: string; weight: number; color: string; returns: number[] };

export const ASSET_CLASSES: Asset[] = [
  { id: "crypto", name: "Digital Assets — BTC & Altcoins", weight: 0.35, color: "#e8a33d", returns: [18, -9, 14, 11] },
  { id: "idx", name: "Indonesian Equities (IDX)", weight: 0.4, color: "#5fa8d3", returns: [3.5, 1.8, -2.2, 4.6] },
  { id: "gold", name: "Gold", weight: 0.25, color: "#d8c27a", returns: [5.2, 2.4, 3.1, 1.9] },
];

const compound = (r: number[]) =>
  r.reduce<number[]>((a, x) => [...a, a[a.length - 1] * (1 + x / 100)], [100]);

export const FUND_RETURNS = QUARTERS.map((_, q) =>
  ASSET_CLASSES.reduce((s, a) => s + a.weight * a.returns[q], 0),
);

export const SERIES = [
  { id: "fund", name: "Model Portfolio", color: "#3ddc97", returns: FUND_RETURNS, values: compound(FUND_RETURNS) },
  ...ASSET_CLASSES.map((a) => ({ id: a.id, name: a.name, color: a.color, returns: a.returns, values: compound(a.returns) })),
];

export const SLEEVES = [
  { id: "crypto", role: "Growth engine", detail: "BTC as the core holding, with selective large-cap altcoins under strict size caps.", min: 30, max: 40, risk: "High", riskShare: 62 },
  { id: "idx", role: "Core compounding", detail: "Liquid IDX large caps across banking, telecommunications and consumer.", min: 35, max: 45, risk: "Medium", riskShare: 28 },
  { id: "gold", role: "Stabiliser", detail: "Physical and market-linked gold as a cushion when risk assets draw down.", min: 20, max: 30, risk: "Low–Medium", riskShare: 10 },
] as const;

export const HOLDING_RING = [
  { sleeve: "crypto", name: "BTC", w: 22 }, { sleeve: "crypto", name: "ETH", w: 8 }, { sleeve: "crypto", name: "SOL", w: 5 },
  { sleeve: "idx", name: "BBCA", w: 14 }, { sleeve: "idx", name: "BBRI", w: 10 }, { sleeve: "idx", name: "BMRI", w: 8 }, { sleeve: "idx", name: "TLKM", w: 8 },
  { sleeve: "gold", name: "Physical", w: 15 }, { sleeve: "gold", name: "XAU", w: 10 },
] as const;

export const REBALANCE = ["Quarterly review", "±5 pt drift band", "Rebalance to target", "Report to partners"] as const;

import { Container } from "@/components/ui/container";
import { ASSET_CLASSES, QUARTERS, SERIES, SIM_NOTE } from "@/data/performance";

const W = 640, H = 300, L = 44, R = 20, T = 16, B = 30;
const LABELS = ["Start", ...QUARTERS];
const all = SERIES.flatMap((s) => s.values);
const lo = Math.floor(Math.min(...all) / 10) * 10 - 10;
const hi = Math.ceil(Math.max(...all) / 10) * 10;
const x = (i: number) => L + (i * (W - L - R)) / 4;
const y = (v: number) => T + ((hi - v) / (hi - lo)) * (H - T - B);
const ticks = Array.from({ length: (hi - lo) / 10 + 1 }, (_, i) => lo + i * 10);
const pct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;
const tone = (n: number) => (n >= 0 ? "text-[#3ddc97]" : "text-[#ff8a80]");

export function PerformanceChart() {
  const fund = SERIES[0];
  const ytd = fund.values[4] - 100;
  return (
    <section className="bg-forest-deep py-20 text-cream sm:py-28">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#3ddc97] uppercase">YTD Growth Simulation</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium sm:text-5xl">Q1–Q4 illustration of a model portfolio.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-light">{SIM_NOTE}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <figure className="border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Line chart of simulated growth from start to Q4, indexed to 100" className="h-auto w-full">
              {ticks.map((t) => (
                <g key={t}>
                  <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="rgba(255,255,255,0.08)" />
                  <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#b8b6b0">{t}</text>
                </g>
              ))}
              {LABELS.map((l, i) => (
                <text key={l} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#b8b6b0">{l}</text>
              ))}
              {SERIES.map((s, k) => {
                const pts = s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
                const main = k === 0;
                return (
                  <g key={s.id}>
                    {main && <polygon points={`${x(0)},${y(lo)} ${pts} ${x(4)},${y(lo)}`} fill={s.color} opacity="0.12" />}
                    <polyline points={pts} fill="none" stroke={s.color} strokeWidth={main ? 3 : 1.75} strokeLinejoin="round" strokeDasharray={main ? undefined : "5 4"} />
                    {s.values.map((v, i) => (
                      <circle key={i} cx={x(i)} cy={y(v)} r={main ? 4 : 2.5} fill={s.color} />
                    ))}
                  </g>
                );
              })}
            </svg>
            <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-light">
              {SERIES.map((s) => (
                <span key={s.id} className="inline-flex items-center gap-2">
                  <i className="inline-block size-2.5" style={{ background: s.color }} />
                  {s.name}
                </span>
              ))}
              <span>Index: start = 100</span>
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6">
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.14em] text-stone-light uppercase">Model portfolio · simulated YTD</p>
              <p className={`mt-3 font-display text-6xl font-medium ${tone(ytd)}`}>{pct(ytd)}</p>
              <div className="mt-6 grid grid-cols-4 gap-2 text-center">
                {QUARTERS.map((q, i) => (
                  <div key={q} className="border border-white/10 py-3">
                    <p className="text-[11px] text-stone-light">{q}</p>
                    <p className={`mt-1 text-sm font-semibold ${tone(fund.returns[i])}`}>{pct(fund.returns[i])}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.14em] text-stone-light uppercase">Model allocation</p>
              <div className="mt-4 flex h-3 overflow-hidden">
                {ASSET_CLASSES.map((a) => (
                  <div key={a.id} style={{ width: `${a.weight * 100}%`, background: a.color }} />
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {ASSET_CLASSES.map((a) => (
                  <li key={a.id} className="flex justify-between gap-4">
                    <span className="text-stone-light">{a.name}</span>
                    <span className="font-semibold">{Math.round(a.weight * 100)}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto border border-white/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="text-xs tracking-[0.14em] text-stone-light uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Sleeve</th>
                {QUARTERS.map((q) => (<th key={q} className="px-4 py-3 text-right font-medium">{q}</th>))}
                <th className="px-4 py-3 text-right font-medium">YTD</th>
              </tr>
            </thead>
            <tbody>
              {SERIES.map((s) => (
                <tr key={s.id} className="border-t border-white/10">
                  <td className="px-4 py-3">{s.name}</td>
                  {s.returns.map((r, i) => (<td key={i} className={`px-4 py-3 text-right ${tone(r)}`}>{pct(r)}</td>))}
                  <td className={`px-4 py-3 text-right font-semibold ${tone(s.values[4] - 100)}`}>{pct(s.values[4] - 100)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

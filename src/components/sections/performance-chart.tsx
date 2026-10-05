import { useState } from "react";
import { Container } from "@/components/ui/container";
import { CountUp, useInView } from "@/components/ui/motion";
import { ASSET_CLASSES, QUARTERS, SERIES, SIM_NOTE } from "@/data/performance";

const W = 640, H = 300, L = 44, R = 20, T = 16, B = 30;
const LABELS = ["Start", ...QUARTERS];
const SHORT: Record<string, string> = { fund: "Model portfolio", crypto: "Digital assets", idx: "IDX equities", gold: "Gold" };
const all = SERIES.flatMap((s) => s.values);
const lo = Math.floor(Math.min(...all) / 10) * 10 - 10;
const hi = Math.ceil(Math.max(...all) / 10) * 10;
const x = (i: number) => L + (i * (W - L - R)) / 4;
const y = (v: number) => T + ((hi - v) / (hi - lo)) * (H - T - B);
const ticks = Array.from({ length: (hi - lo) / 10 + 1 }, (_, i) => lo + i * 10);
const pct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;
const tone = (n: number) => (n >= 0 ? "text-[#3ddc97]" : "text-[#ff8a80]");

export function PerformanceChart() {
  const { ref, seen } = useInView<HTMLElement>(0.25);
  const [off, setOff] = useState<string[]>([]);
  const [hov, setHov] = useState(4);
  const fund = SERIES[0];
  const ytd = fund.values[4] - 100;
  const toggle = (id: string) => setOff((o) => (o.includes(id) ? o.filter((k) => k !== id) : [...o, id]));
  const colW = (W - L - R) / 4;

  return (
    <section className="bg-forest-deep py-20 text-cream sm:py-28">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#3ddc97] uppercase">YTD Growth Simulation</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium sm:text-5xl">Q1–Q4 illustration of a model portfolio.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-light">{SIM_NOTE}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <figure ref={ref} className="border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Animated line chart of simulated growth from start to Q4, indexed to 100" className="h-auto w-full touch-pan-y">
              {ticks.map((t) => (
                <g key={t}>
                  <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="rgba(255,255,255,0.08)" />
                  <text x={L - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#b8b6b0">{t}</text>
                </g>
              ))}
              <line x1={L} x2={W - R} y1={y(100)} y2={y(100)} stroke="rgba(255,255,255,0.28)" strokeDasharray="2 4" />
              {LABELS.map((l, i) => (
                <text key={l} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={i === hov ? "#ffffff" : "#b8b6b0"} fontWeight={i === hov ? 700 : 400}>{l}</text>
              ))}
              <line x1={x(hov)} x2={x(hov)} y1={T} y2={H - B} stroke="rgba(255,255,255,0.35)" strokeDasharray="4 4" style={{ transition: "all .25s ease" }} />
              {SERIES.map((s, k) => {
                const pts = s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
                const main = k === 0;
                const hidden = off.includes(s.id);
                return (
                  <g key={s.id} style={{ opacity: hidden ? 0 : 1, transition: "opacity .3s ease" }}>
                    {main && <polygon points={`${x(0)},${y(lo)} ${pts} ${x(4)},${y(lo)}`} fill={s.color} style={{ opacity: seen ? 0.14 : 0, transition: "opacity 1.2s ease 1s" }} />}
                    <polyline points={pts} pathLength={1} fill="none" stroke={s.color} strokeWidth={main ? 3.5 : 2} strokeLinejoin="round" strokeLinecap="round" strokeDasharray={1} strokeDashoffset={seen ? 0 : 1} style={{ transition: `stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1) ${k * 0.25}s` }} />
                    {s.values.map((v, i) => (
                      <circle key={i} cx={x(i)} cy={y(v)} r={i === hov ? (main ? 6 : 4.5) : main ? 4 : 2.5} fill={s.color} style={{ opacity: seen ? 1 : 0, transition: `opacity .4s ease ${0.4 + i * 0.4 + k * 0.1}s, r .2s ease` }} />
                    ))}
                  </g>
                );
              })}
              {[1, 2, 3, 4].map((i) => (
                <rect key={i} x={x(i) - colW / 2} y={T} width={colW} height={H - T - B} fill="transparent" className="cursor-pointer" onMouseEnter={() => setHov(i)} onClick={() => setHov(i)} onTouchStart={() => setHov(i)} />
              ))}
            </svg>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SERIES.filter((s) => !off.includes(s.id)).map((s) => (
                <div key={s.id} className="border border-white/10 px-3 py-2">
                  <p className="text-[10px] tracking-[0.12em] text-stone-light uppercase">{LABELS[hov]} · {SHORT[s.id]}</p>
                  <p className={`mt-1 text-sm font-semibold ${tone(s.values[hov] - 100)}`}>{pct(s.values[hov] - 100)}</p>
                </div>
              ))}
            </div>
            <figcaption className="mt-4 flex flex-wrap gap-2 text-xs text-stone-light">
              {SERIES.map((s) => (
                <button key={s.id} type="button" onClick={() => toggle(s.id)} aria-pressed={!off.includes(s.id)} className={`inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 transition-opacity ${off.includes(s.id) ? "opacity-40" : ""}`}>
                  <i className="inline-block size-2.5" style={{ background: s.color }} />
                  {SHORT[s.id]}
                </button>
              ))}
              <span className="self-center">Cumulative, start = 100. Tap a quarter or a label.</span>
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6">
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.14em] text-stone-light uppercase">Model portfolio · simulated YTD</p>
              <p className={`mt-3 font-display text-6xl font-medium ${tone(ytd)}`}><CountUp to={ytd} decimals={1} signed suffix="%" /></p>
              <div className="mt-6 grid grid-cols-4 gap-2 text-center">
                {QUARTERS.map((q, i) => (
                  <button key={q} type="button" onClick={() => setHov(i + 1)} className={`border py-3 transition-colors ${hov === i + 1 ? "border-[#3ddc97]" : "border-white/10"}`}>
                    <p className="text-[11px] text-stone-light">{q}</p>
                    <p className={`mt-1 text-sm font-semibold ${tone(fund.returns[i])}`}>{pct(fund.returns[i])}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.14em] text-stone-light uppercase">Model allocation</p>
              <div className="mt-4 flex h-3 overflow-hidden">
                {ASSET_CLASSES.map((a, i) => (
                  <div key={a.id} style={{ width: seen ? `${a.weight * 100}%` : "0%", background: a.color, transition: `width 1.2s cubic-bezier(.2,.8,.2,1) ${i * 0.2}s` }} />
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

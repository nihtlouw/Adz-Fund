import { Container } from "@/components/ui/container";
import { useInView } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ASSET_CLASSES, HOLDING_RING, REBALANCE, SLEEVES } from "@/data/performance";

const col = (id: string) => ASSET_CLASSES.find((a) => a.id === id)!.color;
const P = (r: number, a: number) => `${150 + r * Math.sin(a)} ${150 - r * Math.cos(a)}`;
const seg = (r0: number, r1: number, a0: number, a1: number) => {
  const l = a1 - a0 > Math.PI ? 1 : 0;
  return `M${P(r1, a0)}A${r1} ${r1} 0 ${l} 1 ${P(r1, a1)}L${P(r0, a1)}A${r0} ${r0} 0 ${l} 0 ${P(r0, a0)}Z`;
};

function Ring({ items, r0, r1, labels, seen }: { items: { w: number; id: string; label: string }[]; r0: number; r1: number; labels?: boolean; seen: boolean }) {
  let a = 0;
  const cnt: Record<string, number> = {};
  return (
    <>
      {items.map((it) => {
        const span = (it.w / 100) * 2 * Math.PI;
        const a0 = a + 0.012, a1 = a + span - 0.012, mid = a + span / 2;
        a += span;
        const d = ((a - span) / (2 * Math.PI)) * 0.9 + (labels ? 0.35 : 0);
        const n = (cnt[it.id] = (cnt[it.id] ?? -1) + 1);
        const [tx, ty] = P((r0 + r1) / 2, mid).split(" ");
        return (
          <g key={it.label}>
            <path d={seg(r0, r1, a0, a1)} fill={col(it.id)} style={{ opacity: seen ? (labels ? 1 - n * 0.2 : 1) : 0, transformOrigin: "150px 150px", transform: seen ? "none" : "rotate(-50deg) scale(0.88)", transition: `opacity .8s ease ${d}s, transform 1s cubic-bezier(.2,.8,.2,1) ${d}s` }}>
              <title>{it.label} {it.w}%</title>
            </path>
            {labels && <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" fontSize="8" fontWeight="700" fill="#0c1f18" style={{ opacity: seen ? 1 : 0, transition: `opacity .6s ease ${d + 0.5}s` }}>{it.label}</text>}
          </g>
        );
      })}
    </>
  );
}

const Bar = ({ title, values, seen }: { title: string; values: number[]; seen: boolean }) => (
  <div>
    <p className="mb-2 text-xs tracking-[0.14em] text-stone uppercase">{title}</p>
    <div className="flex h-9 overflow-hidden text-xs font-semibold text-ink">
      {values.map((v, i) => (
        <div key={i} className="flex items-center justify-center" style={{ width: seen ? `${v}%` : "0%", background: col(SLEEVES[i].id), transition: `width 1.2s cubic-bezier(.2,.8,.2,1) ${i * 0.15}s` }}>{v}%</div>
      ))}
    </div>
  </div>
);

export function Diversification() {
  const { ref, seen } = useInView<HTMLElement>(0.1);
  return (
    <section ref={ref} className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Diversification"
          title="Three sleeves, each with a clear job."
          description="Capital is split across assets that behave differently. Digital assets drive growth, Indonesian equities compound, and gold steadies the portfolio. Weights are a model allocation, not live positions."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <figure className="mx-auto w-full max-w-sm">
            <svg viewBox="0 0 300 300" role="img" aria-label="Donut chart: inner ring shows three asset sleeves, outer ring shows nine holdings" className="h-auto w-full">
              <Ring items={ASSET_CLASSES.map((a) => ({ w: a.weight * 100, id: a.id, label: a.name }))} r0={62} r1={96} seen={seen} />
              <Ring items={HOLDING_RING.map((h) => ({ w: h.w, id: h.sleeve, label: h.name }))} r0={102} r1={140} labels seen={seen} />
              <text x="150" y="146" textAnchor="middle" fontSize="22" fontWeight="600" fill="#0c1f18">3 · 9</text>
              <text x="150" y="164" textAnchor="middle" fontSize="8" letterSpacing="1.5" fill="#6b6a64">SLEEVES · HOLDINGS</text>
            </svg>
          </figure>
          <div className="space-y-4">
            {SLEEVES.map((s, i) => {
              const a = ASSET_CLASSES[i];
              return (
                <article key={s.id} className="border border-line bg-paper p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="flex items-center gap-2 text-xs tracking-[0.14em] text-stone uppercase"><i className="inline-block size-2.5" style={{ background: a.color }} />{s.role}</p>
                      <h3 className="mt-1 font-display text-xl font-medium text-ink">{a.name}</h3>
                    </div>
                    <span className="shrink-0 text-xs text-stone">Risk: {s.risk}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{s.detail}</p>
                  <div className="relative mt-4 h-2 bg-line/60" aria-hidden="true">
                    <div className="absolute inset-y-0" style={{ left: `${(s.min / 60) * 100}%`, width: `${((s.max - s.min) / 60) * 100}%`, background: a.color, opacity: 0.45 }} />
                    <div className="absolute -top-1 h-4 w-1 bg-ink" style={{ left: `${(a.weight * 100 / 60) * 100}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-stone">Target {Math.round(a.weight * 100)}% · allowed range {s.min}–{s.max}%</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border border-line bg-paper p-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-5">
            <Bar seen={seen} title="Share of capital" values={ASSET_CLASSES.map((a) => a.weight * 100)} />
            <Bar seen={seen} title="Share of risk (illustrative)" values={SLEEVES.map((s) => s.riskShare)} />
            <p className="text-xs leading-relaxed text-stone">Digital assets hold about a third of capital but most of the risk. Equities and gold balance it. Risk shares are estimates from assumed volatilities, not measured data.</p>
          </div>
          <ol className="grid grid-cols-2 gap-3">
            {REBALANCE.map((r, i) => (
              <li key={r} className="border border-line bg-cream p-4">
                <span className="font-display text-2xl text-forest">0{i + 1}</span>
                <p className="mt-1 text-sm text-ink">{r}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

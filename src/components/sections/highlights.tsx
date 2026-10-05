import { FileText, Handshake, Layers, Lock, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CountUp, Reveal, useInView } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const TICKER = ["BTC", "ETH", "SOL", "BBCA", "BBRI", "BMRI", "TLKM", "GOLD · XAU"];
const KPIS = [
  { to: 3, label: "Asset sleeves", prefix: "" },
  { to: 9, label: "Model holdings", prefix: "" },
  { to: 4, label: "Rebalance reviews a year", prefix: "" },
  { to: 5, label: "Pt drift band", prefix: "±" },
];

export function KpiStrip() {
  return (
    <section className="border-y border-white/10 bg-forest-deep text-cream">
      <div className="overflow-hidden border-b border-white/10 py-3 text-xs tracking-[0.2em] text-stone-light uppercase">
        <div className="marquee">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-2 whitespace-nowrap">
              <i className="pulse-dot inline-block size-1.5 rounded-full bg-[#3ddc97]" />
              {t}
            </span>
          ))}
        </div>
      </div>
      <Container className="grid grid-cols-2 gap-px py-10 lg:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="px-2 py-4 text-center">
            <p className="font-display text-5xl font-medium text-[#3ddc97]">{k.prefix}<CountUp to={k.to} /></p>
            <p className="mt-2 text-xs tracking-[0.14em] text-stone-light uppercase">{k.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

const WHY = [
  { icon: Layers, title: "Three different engines", body: "Digital assets, Indonesian equities and gold respond to different forces, so one weak sleeve need not sink the portfolio." },
  { icon: ShieldCheck, title: "Risk limits by design", body: "Every position and every sleeve has a size cap and an allowed range before any capital is committed." },
  { icon: RefreshCw, title: "Quarterly rebalancing", body: "Weights are reviewed each quarter and brought back to target once they drift beyond the agreed band." },
  { icon: Lock, title: "Custody first", body: "Custody and counterparty checks come before a position is opened, especially for digital assets." },
  { icon: FileText, title: "Clear reporting", body: "Partners receive allocation, results and risk metrics on a regular cadence, in plain language." },
  { icon: Handshake, title: "Aligned with partners", body: "Terms, fees and reporting are explained up front during onboarding, with no surprises later." },
];

export function WhyUs() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Why AzHcriel" title="What partners get from a three-sleeve fund." description="A simple structure with clear rules, designed to be easy to understand and easy to review." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.1} className="h-full">
              <article className="group h-full border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-lg">
                <w.icon className="size-7 text-forest transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const STEPS = [
  ["Intro call", "A short conversation about your goals, horizon and comfort with volatility."],
  ["Suitability review", "We confirm the fund fits your profile and share the full risk disclosures."],
  ["Onboarding", "Documents, terms and subscription steps are completed with a named contact."],
  ["Ongoing reporting", "Quarterly updates on allocation, results and rebalancing decisions."],
];

export function InvestorJourney() {
  const { ref, seen } = useInView<HTMLElement>(0.2);
  return (
    <section ref={ref} className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Becoming a partner" title="From first call to quarterly report." description="A clear four-step path for new investors." />
        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute top-6 left-0 hidden h-px bg-forest/40 lg:block" style={{ width: seen ? "100%" : "0%", transition: "width 1.8s ease" }} />
          <ol className="grid gap-8 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateY(20px)", transition: `all .7s ease ${0.3 + i * 0.25}s` }}>
                <span className="relative z-10 flex size-12 items-center justify-center border border-forest bg-cream font-display text-xl text-forest">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

const FAQS = [
  ["What does the fund invest in?", "Three sleeves: Bitcoin and select altcoins, liquid Indonesian equities listed on the IDX, and gold. The model targets about 35%, 40% and 25%."],
  ["How is risk managed?", "Each position and sleeve has a size cap and an allowed range, holdings are screened for liquidity, and weights are rebalanced when they drift more than five points from target."],
  ["How often is the portfolio rebalanced?", "Reviewed every quarter, and sooner if a sleeve moves outside its allowed range."],
  ["Are the performance figures real?", "No. The Q1–Q4 chart is a hypothetical simulation for illustration. Actual results will differ and are not guaranteed."],
  ["What are the fees and minimum investment?", "Terms are shared during onboarding and are not published on this website."],
  ["What are the main risks?", "Sharp swings in crypto prices, equity market and currency moves, gold price changes, liquidity limits, and the possible loss of capital."],
];

export function Faq() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Questions investors ask first." />
        </div>
        <div className="lg:col-span-8">
          {FAQS.map(([q, a]) => (
            <details key={q} className="faq border-b border-line py-5">
              <summary className="flex items-center justify-between gap-6 font-display text-xl text-ink">
                {q}
                <span className="faq-plus text-3xl leading-none text-forest transition-transform duration-300">+</span>
              </summary>
              <p className="faq-body mt-3 max-w-2xl text-sm leading-relaxed text-stone">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

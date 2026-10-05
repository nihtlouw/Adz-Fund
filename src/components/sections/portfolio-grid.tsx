import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_EMPTY } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioGrid() {
  const items = PORTFOLIO.filter((item) => item.published);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Model holdings across the three sleeves."
        />
        {items.length === 0 ? (
          <div className="mt-12 border border-dashed border-line bg-cream px-6 py-16 text-center sm:px-12">
            <p className="mx-auto max-w-xl text-base leading-relaxed text-stone">{PORTFOLIO_EMPTY}</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.slug} className="flex flex-col border border-line bg-cream p-6">
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt="" className="h-10 w-auto object-contain object-left" />
                ) : null}
                <h3 className="mt-6 font-display text-2xl font-medium text-ink">{item.name}</h3>
                <p className="mt-2 text-xs tracking-[0.14em] text-stone uppercase">
                  {item.sector} · {item.stage} · {item.geography}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{item.description}</p>
                {item.websiteUrl ? (
                  <a
                    href={item.websiteUrl}
                    className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-forest"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Visit website
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

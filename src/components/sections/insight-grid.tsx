import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getPublishedInsights } from "@/data/insights";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function InsightGrid({ limit }: { limit?: number }) {
  const items = getPublishedInsights().slice(0, limit ?? 12);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Notes on digital assets, equities and gold."
          description="Short, plain-language notes on how each sleeve of the portfolio works."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.slug} className="group flex flex-col">
              <Link to="/insights/$slug" params={{ slug: item.slug }} className="block overflow-hidden">
                <img
                  src={item.coverImageUrl}
                  alt={item.coverAlt}
                  width={1792}
                  height={1008}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </Link>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">
                {item.category} · {formatDate(item.publishedAt)}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                <Link
                  to="/insights/$slug"
                  params={{ slug: item.slug }}
                  className="text-ink no-underline"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.excerpt}</p>
              <Link
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-forest no-underline"
              >
                Read more
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

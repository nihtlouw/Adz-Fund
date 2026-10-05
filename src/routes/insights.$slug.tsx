import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { getInsight } from "@/data/insights";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => {
    const insight = loaderData?.insight;
    const meta = pageMeta({
      title: insight?.seoTitle ?? "Insight",
      description: insight?.seoDescription,
      path: insight ? `/insights/${insight.slug}` : "/insights",
    });
    return { meta: meta.meta };
  },
  component: InsightDetailPage,
});

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function InsightDetailPage() {
  const { insight } = Route.useLoaderData();

  return (
    <SiteLayout>
      <article>
        <header className="bg-forest-deep py-16 text-cream sm:py-20">
          <Container className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-cream/65 uppercase">
              {insight.category} · {formatDate(insight.publishedAt)}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.12] font-medium sm:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/72">{insight.excerpt}</p>
          </Container>
        </header>
        <img
          src={insight.coverImageUrl}
          alt={insight.coverAlt}
          width={1792}
          height={1008}
          className="aspect-[21/9] w-full object-cover"
        />
        <Container className="max-w-3xl py-16 sm:py-20">
          {insight.placeholder ? (
            <p className="mb-8 border border-line bg-paper px-4 py-3 text-sm text-stone">
              Placeholder content pending approved company messaging. This is not an official firm view.
            </p>
          ) : null}
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            {insight.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <Link to="/insights" className="mt-12 inline-flex min-h-11 items-center text-sm font-semibold text-forest">
            All insights
          </Link>
        </Container>
      </article>
      <CtaBand />
    </SiteLayout>
  );
}

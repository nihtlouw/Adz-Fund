import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { CtaBand } from "@/components/sections/cta-band";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Portfolio",
  description: "Selected investments of AzHcriel Capital, disclosed only when approved.",
  path: "/portfolio",
});

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: meta.meta }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="A model allocation across three asset classes."
        description="Model holdings across digital assets, Indonesian equities and gold. Weights are illustrative, not live positions."
      />
      <PortfolioGrid />
      <CtaBand />
    </SiteLayout>
  );
}

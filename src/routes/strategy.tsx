import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { CtaBand } from "@/components/sections/cta-band";
import { Diversification } from "@/components/sections/diversification";
import { FocusAreaGrid } from "@/components/sections/focus-area-grid";
import { InvestmentProcess } from "@/components/sections/investment-process";
import { PhilosophyCards } from "@/components/sections/philosophy-cards";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Strategy",
  description: "Investment philosophy, focus areas, and process at AzHcriel Capital.",
  path: "/strategy",
});

export const Route = createFileRoute("/strategy")({
  head: () => ({ meta: meta.meta }),
  component: StrategyPage,
});

function StrategyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Strategy"
        title="Philosophy, focus, and process."
        description="A disciplined three-sleeve strategy: Bitcoin and select altcoins for growth, Indonesian equities for compounding, and gold for stability."
      />
      <PhilosophyCards />
      <FocusAreaGrid />
      <Diversification />
      <InvestmentProcess />
      <CtaBand />
    </SiteLayout>
  );
}

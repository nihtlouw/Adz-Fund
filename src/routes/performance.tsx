import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { CtaBand } from "@/components/sections/cta-band";
import { Diversification } from "@/components/sections/diversification";
import { PerformanceChart } from "@/components/sections/performance-chart";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Performance",
  description: "Simulated Q1–Q4 growth and diversification of the AzHcriel Capital model portfolio.",
  path: "/performance",
});

export const Route = createFileRoute("/performance")({
  head: () => ({ meta: meta.meta }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Performance"
        title="Growth and diversification, illustrated."
        description="A hypothetical Q1–Q4 simulation of the model portfolio across digital assets, Indonesian equities and gold."
      />
      <PerformanceChart />
      <Diversification />
      <CtaBand />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { InsightGrid } from "@/components/sections/insight-grid";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Insights",
  description: "Notes and thought leadership from AzHcriel Capital.",
  path: "/insights",
});

export const Route = createFileRoute("/insights/")({
  head: () => ({ meta: meta.meta }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Writing that can wait for the right sentence."
        description="Sample articles are labelled Placeholder. They exist so the editorial layout can be reviewed, not as official firm views."
      />
      <InsightGrid />
    </SiteLayout>
  );
}

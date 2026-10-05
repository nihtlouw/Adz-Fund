import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { CtaBand } from "@/components/sections/cta-band";
import { TeamGrid } from "@/components/sections/team-grid";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Team",
  description: "Public biographies for AzHcriel Capital, published only when approved.",
  path: "/team",
});

export const Route = createFileRoute("/team")({
  head: () => ({ meta: meta.meta }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Team"
        title="The team behind the allocation."
        description="Four core roles run allocation, selection, sizing and reporting for the portfolio."
      />
      <TeamGrid />
      <CtaBand />
    </SiteLayout>
  );
}

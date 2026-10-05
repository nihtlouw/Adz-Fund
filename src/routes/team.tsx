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
        title="People, named only when they can be named."
        description="This page will hold approved portraits and biographies. No individuals have been fabricated."
      />
      <TeamGrid />
      <CtaBand />
    </SiteLayout>
  );
}

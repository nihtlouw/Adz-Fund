import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { AboutSection } from "@/components/sections/about-section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "About",
  description: "An introduction to AzHcriel Capital Investment Fund.",
  path: "/about",
});

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta.meta }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="An institutional profile, written with restraint."
        description={SITE.description}
      />
      <AboutSection />
      <CtaBand />
    </SiteLayout>
  );
}

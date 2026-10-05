import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/hero";
import { SiteLayout } from "@/components/layout/site-layout";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FocusAreaGrid } from "@/components/sections/focus-area-grid";
import { InsightGrid } from "@/components/sections/insight-grid";
import { InvestmentProcess } from "@/components/sections/investment-process";
import { PerformanceChart } from "@/components/sections/performance-chart";
import { Diversification } from "@/components/sections/diversification";
import { PhilosophyCards } from "@/components/sections/philosophy-cards";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { TeamGrid } from "@/components/sections/team-grid";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "AzHcriel Capital",
  description:
    "AzHcriel Capital Investment Fund. Building long-term value through disciplined capital.",
  path: "/",
});

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta.meta }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection compact />
      <PhilosophyCards />
      <FocusAreaGrid />
      <PerformanceChart />
      <Diversification />
      <InvestmentProcess />
      <PortfolioGrid />
      <TeamGrid />
      <InsightGrid limit={3} />
      <CtaBand />
      <ContactSection />
    </SiteLayout>
  );
}

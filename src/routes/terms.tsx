import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Terms & Disclaimer",
  description: "Terms and disclaimer placeholder for AzHcriel Capital Investment Fund.",
  path: "/terms",
});

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: meta.meta }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Disclaimer" />
      <Container className="max-w-3xl py-16 sm:py-20">
        <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
          Placeholder pending approved legal copy
        </p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>{SITE.disclaimer}</p>
          <p>
            [TERMS OF USE] Access to this website is subject to terms that will be published here once
            they are approved. This placeholder is not a contract and is not an offer of securities.
          </p>
          <p>
            Past performance, AUM, licences, offices, and team identities are omitted until they can
            be stated as verified facts. Do not rely on placeholder copy for any investment decision.
          </p>
        </div>
      </Container>
    </SiteLayout>
  );
}

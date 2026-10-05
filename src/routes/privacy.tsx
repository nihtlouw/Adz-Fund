import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for AzHcriel Capital Investment Fund.",
  path: "/privacy",
});

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: meta.meta }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Container className="max-w-3xl py-16 sm:py-20">
        <p className="text-sm font-semibold tracking-[0.16em] text-stone uppercase">
          Placeholder pending approved legal copy
        </p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            [PRIVACY POLICY] This page will publish the firm’s approved privacy notice. No legal advice
            is offered here, and this draft must not be treated as a live policy.
          </p>
          <p>
            Inquiries submitted through the contact form are used only to respond to the sender. Do not
            include confidential deal materials or special-category personal data in the form.
          </p>
          <p>
            Replace this language with counsel-approved policy text, including lawful bases, retention,
            international transfers, and data-subject rights, before any public launch.
          </p>
        </div>
      </Container>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { ContactSection } from "@/components/sections/contact-section";
import { pageMeta } from "@/lib/seo";

const meta = pageMeta({
  title: "Contact",
  description: "Contact AzHcriel Capital Investment Fund.",
  path: "/contact",
});

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta.meta }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <ContactSection />
    </SiteLayout>
  );
}

import { SITE } from "@/data/site";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Start a confidential conversation."
            description="Use this form for investor, founder, partnership, and media inquiries. Contact details below are placeholders until official channels are supplied."
          />
          <PlaceholderNote className="mt-4" />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Email</dt>
              <dd className="mt-1 text-ink">{SITE.contactEmail}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Phone</dt>
              <dd className="mt-1 text-ink">{SITE.contactPhone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Address</dt>
              <dd className="mt-1 max-w-xs leading-relaxed text-ink">{SITE.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Hours</dt>
              <dd className="mt-1 text-ink">{SITE.officeHours}</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { SITE, VALUES } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Firm"
              title="Three asset classes. One disciplined framework."
            />
            {compact ? (
              <Button asChild variant="outline" className="mt-10">
                <Link to="/about">Read about the firm</Link>
              </Button>
            ) : null}
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-soft">{SITE.description}</p>
            <p className="mt-6 text-base leading-relaxed text-stone">{SITE.mission}</p>
            <div className="mt-10 overflow-hidden">
              <img
                src="/images/about-desk.svg"
                alt="Research desk with three screens showing market charts (placeholder artwork)"
                width={1792}
                height={1008}
                className="aspect-[16/9] w-full object-cover"
                loading={compact ? "lazy" : "eager"}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-3">
          {VALUES.map((value) => (
            <article key={value.title} className="bg-paper px-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <h3 className="font-display text-2xl font-medium text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{value.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

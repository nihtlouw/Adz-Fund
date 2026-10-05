import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-16 text-cream sm:py-20">
      <div aria-hidden="true" className="diamond pointer-events-none absolute -top-24 right-0 size-80 border border-forest/40" />
      <Container>
        <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-cream/70 uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-cream sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/72 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

import { FOCUS_AREAS } from "@/data/strategy";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FocusAreaGrid() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Focus Areas"
          title="Three asset classes, one portfolio."
          description="Digital assets, Indonesian equities and gold, each with a clear role and a size limit."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {FOCUS_AREAS.map((area) => (
            <article key={area.slug} className="flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={area.imageUrl}
                  alt={area.imageAlt}
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">
                {String(area.displayOrder).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink">{area.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{area.shortDescription}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.investmentRationale}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { PHILOSOPHY } from "@/data/strategy";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PhilosophyCards() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Investment Philosophy"
          title="A consistent standard for how capital is committed."
          description="Four principles guide how capital is allocated, sized and reported."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {PHILOSOPHY.map((item, index) => (
            <article
              key={item.id}
              className="group border border-line bg-paper p-8 transition-[border-color,transform] duration-200 ease-out hover:border-forest sm:p-10"
            >
              <p className="font-display text-4xl text-forest/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-3xl font-medium text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

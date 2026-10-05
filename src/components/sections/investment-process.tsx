import { PROCESS } from "@/data/strategy";
import { Container } from "@/components/ui/container";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { SectionHeading } from "@/components/ui/section-heading";

export function InvestmentProcess() {
  return (
    <section className="bg-forest-deep py-20 text-cream sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Investment Process"
          title="A five-stage path from origination to ownership."
          description="Each stage is editable. The labels below are a recommended structure until the firm’s actual process is supplied."
          tone="dark"
        />
        <PlaceholderNote className="mt-4 text-cream/45" />
        <ol className="mt-14 grid gap-0 border-t border-cream/15 lg:grid-cols-5">
          {PROCESS.map((stage) => (
            <li
              key={stage.step}
              className="border-b border-cream/15 py-8 lg:border-r lg:border-b-0 lg:px-6 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="font-display text-3xl text-forest">{String(stage.step).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-wide text-cream">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{stage.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

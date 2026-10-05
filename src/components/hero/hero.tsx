import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden="true"
        className="diamond pointer-events-none absolute -top-28 -right-16 size-80 border border-forest/35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-forest/40"
      />
      <Container className="grid min-h-[calc(100dvh-5rem)] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <p className="reveal text-xs font-semibold tracking-[0.28em] text-forest uppercase">
            {SITE.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] font-medium tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream/72 sm:text-lg">
            {SITE.positioning}
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/strategy" onClick={() => track("hero_cta_click", { cta: "approach" })}>
                Explore Our Approach
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border border-cream/20">
              <Link to="/contact" onClick={() => track("hero_cta_click", { cta: "contact" })}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="reveal reveal-delay-2 lg:col-span-6">
          <figure className="angle-frame relative overflow-hidden bg-ink">
            <img
              src={SITE.heroImage}
              alt="Jakarta skyline at dusk with a rising growth line, Bitcoin and gold coins (placeholder artwork)"
              width={1200}
              height={1200}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
            />
            <figcaption className="sr-only">
              Placeholder artwork representing digital assets, Indonesian equities and gold.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

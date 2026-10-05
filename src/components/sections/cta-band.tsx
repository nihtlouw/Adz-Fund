import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBand() {
  return (
    <section className="bg-forest text-cream">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase">AzHcriel Capital</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-medium sm:text-5xl">
            Ready to see how the allocation fits your goals?
          </h2>
        </div>
        <Button asChild size="lg" variant="inverse">
          <Link to="/contact">Request an Intro Call</Link>
        </Button>
      </Container>
    </section>
  );
}

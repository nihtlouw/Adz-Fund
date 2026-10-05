import { TEAM, TEAM_EMPTY } from "@/data/team";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TeamGrid() {
  const members = TEAM.filter((member) => member.published).sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="The people behind the firm."
          description="Portraits and biographies are published only after they are approved for public disclosure. No names have been invented for this profile."
        />
        {members.length === 0 ? (
          <div className="mt-12 border border-dashed border-line bg-paper px-6 py-16 text-center sm:px-12">
            <p className="mx-auto max-w-xl text-base leading-relaxed text-stone">{TEAM_EMPTY}</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <article key={member.fullName}>
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt=""
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[4/5] bg-paper-warm" />
                )}
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{member.fullName}</h3>
                <p className="mt-1 text-xs tracking-[0.16em] text-forest uppercase">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{member.biography}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

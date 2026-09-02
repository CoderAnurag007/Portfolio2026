import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <section className="section-pad border-t border-border bg-card/40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title={education.degree}
            description={`${education.school} · ${education.location}`}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <article className="mt-10 rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow)] md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-accent">{education.duration}</p>
                <p className="mt-2 font-display text-xl font-semibold text-foreground">
                  {education.school}
                </p>
                <p className="mt-1 text-sm text-muted">{education.location}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  CGPA
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                  {education.cgpa}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Relevant coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

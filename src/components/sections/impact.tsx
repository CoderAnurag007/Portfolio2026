import { impactStats } from "@/data/impact";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Impact() {
  return (
    <section id="impact" className="section-pad border-t border-border bg-card/40">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Engineering Impact" />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.03}>
              <article className="h-full rounded-3xl border border-border bg-background p-5 shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-hover)] md:p-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-[2rem]">
                  {stat.value}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-accent">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {stat.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

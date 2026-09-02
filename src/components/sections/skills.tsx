import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Layout,
  Rocket,
  Server,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const icons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "AI & ML": BrainCircuit,
  "DevOps & Tools": Rocket,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Skills from production work."
            description="Full-stack engineering, web accessibility, cloud deployment, and AI integration — grouped by capability."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title as keyof typeof icons] ?? Boxes;
            const featured = group.title === "AI & ML";

            return (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className={featured ? "md:col-span-2 xl:col-span-3" : undefined}
              >
                <article
                  className={`h-full rounded-3xl border border-border bg-card p-6 transition hover:border-border-strong hover:shadow-[var(--shadow)] md:p-7 ${
                    featured ? "bg-accent-soft/40" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

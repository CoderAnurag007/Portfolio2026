import Image from "next/image";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Featured AI & Product Work"
            title="Selected systems, not a project dump."
            description="A curated set of products that show engineering maturity, product thinking, and an emerging AI-first craft."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="overflow-hidden rounded-[2rem] border border-border bg-card transition hover:border-border-strong hover:shadow-[var(--shadow-hover)]">
                <div
                  className={cn(
                    "grid lg:grid-cols-2",
                    index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative min-h-[240px] border-b border-border bg-background lg:min-h-full lg:border-b-0 lg:border-r">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex flex-col p-6 md:p-8 lg:p-10">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                      Case study
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted md:text-base">
                      {project.tagline}
                    </p>

                    <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-[15px]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Problem
                        </p>
                        <p className="mt-1 text-foreground/85">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Solution
                        </p>
                        <p className="mt-1 text-foreground/85">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Architecture
                        </p>
                        <p className="mt-1 text-foreground/85">
                          {project.architecture}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Business value
                        </p>
                        <p className="mt-1 text-foreground/85">
                          {project.businessValue}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClassName({
                            variant: "secondary",
                            size: "sm",
                          })}
                        >
                          <FolderGit2 className="h-4 w-4" />
                          GitHub
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClassName({ size: "sm" })}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

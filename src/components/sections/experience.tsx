"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);

  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've shipped."
            description="4+ years building production systems — ecommerce platforms, healthcare products, and AI integrations."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-[11px] top-3 bottom-3 w-px bg-border md:left-[15px]"
            aria-hidden
          />

          <ol className="space-y-5">
            {experiences.map((exp, index) => {
              const open = openId === exp.id;
              return (
                <Reveal key={exp.id} delay={index * 0.05}>
                  <li className="relative pl-10 md:pl-12">
                    <span
                      className={cn(
                        "absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full border md:h-8 md:w-8 md:top-6",
                        open
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border bg-background text-muted"
                      )}
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>

                    <article
                      className={cn(
                        "rounded-3xl border bg-card transition-all duration-300",
                        open
                          ? "border-border-strong shadow-[var(--shadow-hover)]"
                          : "border-border hover:border-border-strong hover:shadow-[var(--shadow)]"
                      )}
                    >
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-7 focus-ring rounded-3xl"
                        aria-expanded={open}
                        onClick={() =>
                          setOpenId((current) =>
                            current === exp.id ? null : exp.id
                          )
                        }
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                              {exp.role}
                            </h3>
                            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                              {exp.type}
                            </span>
                          </div>
                          <p className="mt-1 text-sm font-medium text-accent md:text-base">
                            {exp.companyShort}
                          </p>
                          <p className="mt-2 text-sm text-muted">
                            {exp.duration} · {exp.location}
                          </p>
                          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-[15px]">
                            <span className="font-medium text-foreground">
                              Impact:{" "}
                            </span>
                            {exp.impact}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition",
                            open && "rotate-180 bg-accent-soft text-accent"
                          )}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {open ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-border px-5 pb-6 pt-5 md:px-7 md:pb-7">
                              <p className="text-sm leading-relaxed text-muted md:text-[15px]">
                                {exp.summary}
                              </p>

                              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {exp.metrics.map((metric) => (
                                  <div
                                    key={metric.label}
                                    className="rounded-2xl border border-border bg-background px-4 py-3"
                                  >
                                    <p className="text-[11px] uppercase tracking-wider text-muted">
                                      {metric.label}
                                    </p>
                                    <p className="mt-1 font-display text-lg font-semibold text-foreground">
                                      {metric.value}
                                    </p>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                                <div>
                                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                                    Key responsibilities
                                  </h4>
                                  <ul className="mt-3 space-y-2.5">
                                    {exp.responsibilities.map((item) => (
                                      <li
                                        key={item}
                                        className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                                      >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                                    Achievements
                                  </h4>
                                  <ul className="mt-3 space-y-2.5">
                                    {exp.achievements.map((item) => (
                                      <li
                                        key={item}
                                        className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                                      >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="mt-8">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                                  Technologies
                                </h4>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {exp.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </article>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

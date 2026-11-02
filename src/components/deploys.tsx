"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, GitBranch } from "lucide-react";
import { experiences, type Experience } from "@/data/experience";
import { SectionLabel } from "@/components/section-label";

const STATUS: Record<Experience["status"], string> = {
  running: "text-ok border-ok/40 bg-ok/10",
  shipped: "text-violet border-violet/40 bg-violet/10",
  merged: "text-info border-info/40 bg-info/10",
};

export function Deploys() {
  const [open, setOpen] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="scroll-mt-16 py-20 md:py-28">
      <div className="wrap">
        <SectionLabel
          path="deploys --history"
          title="Deploy history."
          lead="Every role, newest first. The one still running is where I spend my days: marketplace integrations, sync and the dashboards on top."
        />

        <ol className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-line md:space-y-5">
          {experiences.map((exp) => {
            const expanded = open === exp.id;
            return (
              <li key={exp.id} className="relative pl-10">
                <span
                  className={`absolute top-5 left-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border bg-bg ${
                    exp.status === "running" ? "border-ok" : "border-line-strong"
                  }`}
                  aria-hidden
                >
                  <span className={`h-2 w-2 rounded-full ${exp.status === "running" ? "pulse-dot bg-ok text-ok" : "bg-dim"}`} />
                </span>

                <div className="panel transition-colors hover:border-line-strong">
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? "" : exp.id)}
                    aria-expanded={expanded}
                    className="focus-ring flex w-full flex-col gap-3 rounded-[14px] p-5 text-left md:flex-row md:items-center md:gap-6 md:p-6"
                  >
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="flex items-center gap-1 text-dim">
                        <GitBranch size={13} aria-hidden />
                        {exp.hash}
                      </span>
                      <span className={`rounded-full border px-2 py-0.5 text-[11px] ${STATUS[exp.status]}`}>{exp.status}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold text-fg md:text-2xl">{exp.role}</h3>
                      <p className="mt-0.5 text-sm text-muted">{exp.company}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 md:justify-end">
                      <p className="font-mono text-xs text-muted">
                        {exp.duration}
                        <span className="text-dim"> · {exp.location}</span>
                      </p>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-dim transition-transform ${expanded ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </div>
                  </button>

                  {expanded ? (
                    <div className="border-t border-line px-5 pt-5 pb-6 md:px-6">
                      <p className="text-sm text-muted md:text-base">{exp.summary}</p>
                      <ul className="mt-4 space-y-2.5">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm leading-relaxed text-fg/90 md:text-[15px]">
                            <span className="mt-[3px] font-mono text-xs text-ok" aria-hidden>
                              +
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      {exp.media ? (
                        <div className="mt-6 grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
                          {exp.media.map((m) => (
                            <figure key={m.src} className="overflow-hidden rounded-lg border border-line bg-panel-2">
                              <Image
                                src={m.src}
                                alt={m.alt}
                                width={m.width}
                                height={m.height}
                                sizes="(min-width: 640px) 40vw, 100vw"
                                className="h-56 w-full object-cover object-top"
                              />
                              <figcaption className="border-t border-line px-3 py-2 font-mono text-[11px] text-muted">
                                {m.caption}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      ) : null}
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {exp.technologies.map((t) => (
                          <li key={t} className="rounded border border-line bg-panel-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

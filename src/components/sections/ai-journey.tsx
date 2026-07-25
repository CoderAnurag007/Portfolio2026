"use client";

import { ArrowDown } from "lucide-react";
import { aiJourney } from "@/data/journey";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function AiJourney() {
  return (
    <section
      id="journey"
      className="section-pad border-t border-border bg-card/40"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="AI Journey"
            title="From products to intelligence."
            description="4 years shipping software — now building AI into everything I make."
          />
        </Reveal>

        <ol className="relative mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          {aiJourney.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04} className="h-full">
              <li className="relative flex h-full flex-col rounded-3xl border border-border bg-background p-5 shadow-[var(--shadow)] transition hover:border-border-strong hover:shadow-[var(--shadow-hover)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < aiJourney.length - 1 ? (
                    <ArrowDown className="h-4 w-4 text-muted lg:absolute lg:-right-3 lg:top-8 lg:rotate-[-90deg]" />
                  ) : null}
                </div>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

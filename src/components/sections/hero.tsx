import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buttonClassName } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-28 md:pt-36"
      aria-label="Introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-bg"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Anurag Singh
              </p>
            </Reveal>

            <Reveal delay={0.04}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Software Engineer → AI Engineer
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
                I build AI , Products and Systems that ships.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-sm font-medium text-muted sm:text-[15px]">
                LLMs · RAG · Full Stack · Production Systems
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                4+ years shipping scalable software. Now turning that craft into
                intelligent products people can trust.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({ size: "lg" })}
                >
                  View Resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className={buttonClassName({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  View Projects
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-hover)]">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 45%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 40%)",
                }}
                aria-hidden
              />
              <Image
                src="/images/profile3.jpeg"
                alt="Anurag Singh, software engineer transitioning into AI and ML"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 420px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { siteConfig } from "@/data/site";
import { Trace } from "@/components/trace";
import { AskButton } from "@/components/ask-button";

const STATS = [
  { k: "uptime", v: "4+ yrs", d: "production engineering" },
  { k: "role", v: "Ex-CTO", d: "co-founded Ayum Healthcare" },
  { k: "services", v: "5", d: "projects shipped or running" },
  { k: "cgpa", v: "8.71", d: "B.Tech CSE" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-ok/10 blur-[120px]"
        aria-hidden
      />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/profile3.jpeg"
              alt="Anurag Singh"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full border border-line-strong object-cover"
            />
            <div className="font-mono text-xs leading-5">
              <p className="text-fg">{siteConfig.name}</p>
              <p className="text-muted">
                {siteConfig.role} · {siteConfig.location}
              </p>
            </div>
          </div>

          <h1 className="font-display mt-8 text-[2.6rem] leading-[1.02] font-semibold text-fg sm:text-6xl lg:text-[4.2rem]">
            I build software that keeps <span className="text-ok">commerce data in sync</span>, and makes it{" "}
            <span className="text-violet">smart</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Full-stack engineer with 4+ years shipping production software, from B2B commerce to a healthcare startup I
            co-founded: React and Next.js front ends, Node.js and Python services, marketplace integrations, and LLM
            features like RAG that are grounded in real data.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ok px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              See what I&apos;ve built <ArrowDownRight size={16} aria-hidden />
            </a>
            <AskButton />
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring rounded hover:text-fg">
              <Github size={18} />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring rounded hover:text-fg">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="focus-ring rounded hover:text-fg">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <Trace />
      </div>

      <dl className="wrap relative mt-16 grid grid-cols-2 gap-px overflow-hidden md:mt-20 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.k} className="border-t border-line py-5 pr-4">
            <dt className="font-mono text-[11px] tracking-wider text-dim uppercase">{s.k}</dt>
            <dd className="font-display mt-1 text-3xl font-semibold text-fg">{s.v}</dd>
            <dd className="mt-1 text-sm text-muted">{s.d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

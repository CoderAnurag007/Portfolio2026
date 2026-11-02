import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionLabel } from "@/components/section-label";
import { GithubIcon } from "@/components/brand-icons";

const STATUS: Record<Project["status"], { label: string; cls: string }> = {
  live: { label: "live", cls: "text-ok" },
  repo: { label: "source", cls: "text-info" },
  private: { label: "demo on request", cls: "text-warn" },
};

/** Stand-in visual for projects without a screenshot: a mini editor timeline. */
function TimelineArt() {
  const tracks = [
    { label: "video", color: "bg-info/60", blocks: [[0, 92]] },
    { label: "captions", color: "bg-ok/70", blocks: [[2, 14], [18, 30], [33, 47], [50, 63], [66, 80], [83, 95]] },
    { label: "maps", color: "bg-violet/70", blocks: [[20, 44], [70, 86]] },
    { label: "titles", color: "bg-warn/70", blocks: [[0, 12], [48, 60]] },
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 bg-[radial-gradient(ellipse_at_top,rgba(92,200,255,0.08),transparent_70%)] p-6">
      {tracks.map((t) => (
        <div key={t.label} className="flex items-center gap-3">
          <span className="w-16 shrink-0 font-mono text-[10px] text-dim">{t.label}</span>
          <div className="relative h-4 flex-1 rounded bg-white/[0.03]">
            {t.blocks.map(([a, b]) => (
              <span key={a} className={`absolute inset-y-0 rounded-sm ${t.color}`} style={{ left: `${a}%`, width: `${b - a}%` }} />
            ))}
          </div>
        </div>
      ))}
      <div className="relative mt-1 ml-[76px] h-px bg-line">
        <span className="absolute -top-[52px] left-[38%] h-[110px] w-px bg-fg/70" aria-hidden />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionLabel
          path="services --list"
          title="Services I've shipped."
          lead="Side projects and products, treated like production services: what they do, what they run on and where to see them."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`panel group flex flex-col overflow-hidden transition-colors hover:border-line-strong ${
                i === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr]" : ""
              }`}
            >
              <div className={`relative overflow-hidden border-b border-line bg-panel-2 ${i === 0 ? "aspect-[16/10] md:aspect-auto md:border-r md:border-b-0" : "aspect-[16/9]"}`}>
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                ) : (
                  <TimelineArt />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-dim">{p.service}</span>
                  <span className={STATUS[p.status].cls}>● {STATUS[p.status].label}</span>
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold text-fg md:text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-ok/90">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-fg/85">
                      <span className="font-mono text-xs text-dim" aria-hidden>
                        ›
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.demo || p.github ? (
                  <div className="mt-auto flex gap-4 pt-6 font-mono text-xs">
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded text-fg hover:text-ok">
                        open live <ArrowUpRight size={13} aria-hidden />
                      </a>
                    ) : null}
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded text-muted hover:text-fg">
                        <GithubIcon size={13} /> source
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

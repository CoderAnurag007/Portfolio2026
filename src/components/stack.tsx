import { stack } from "@/data/skills";
import { education } from "@/data/education";
import { SectionLabel } from "@/components/section-label";

const entries = Object.entries(stack);

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionLabel
            path="stack.json"
            title="The stack, as config."
            lead="What I reach for and use in production. If it's in this file, I can talk about it in an interview."
          />
          <div className="panel p-5">
            <p className="font-mono text-[11px] text-dim">education.ts</p>
            <p className="font-display mt-2 text-lg font-semibold text-fg">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">
              {education.school}, {education.location}
            </p>
            <p className="mt-3 font-mono text-xs text-muted">
              {education.duration} · <span className="text-ok">CGPA {education.cgpa}/10</span>
            </p>
          </div>
        </div>

        <div className="panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-dim">
            <span>~/anurag.sys/stack.json</span>
            <span>json · utf-8</span>
          </div>
          <div className="p-5 font-mono text-[12.5px] leading-7 md:text-sm md:leading-8" aria-label="Skills">
            <p className="text-muted">{"{"}</p>
            {entries.map(([key, values], i) => (
              <p key={key} className="pl-8 -indent-4">
                <span className="text-info">&quot;{key}&quot;</span>
                <span className="text-muted">: [</span>
                {values.map((v, j) => (
                  <span key={v}>
                    <span className="whitespace-nowrap text-ok">&quot;{v}&quot;</span>
                    {j < values.length - 1 ? <span className="text-muted">, </span> : null}
                  </span>
                ))}
                <span className="text-muted">]{i < entries.length - 1 ? "," : ""}</span>
              </p>
            ))}
            <p className="text-muted">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

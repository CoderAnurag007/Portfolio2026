import { runbook } from "@/data/testimonials";
import { SectionLabel } from "@/components/section-label";

export function Runbook() {
  return (
    <section id="runbook" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionLabel path="RUNBOOK.md" title="How I work." lead="The operating rules behind the code." />
        <ol className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-2">
          {runbook.map((r) => (
            <li key={r.step} className="bg-bg p-6 md:p-8">
              <p className="font-mono text-xs text-ok">step {r.step}</p>
              <h3 className="font-display mt-3 text-xl font-semibold text-fg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

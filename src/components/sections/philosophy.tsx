import { philosophy } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Philosophy"
            title="How I think about building."
            description="A concise operating system for solving problems, learning in public through projects, and shipping software that lasts."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {philosophy.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-border bg-card p-6 md:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

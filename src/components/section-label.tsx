export function SectionLabel({
  path,
  title,
  lead,
}: {
  path: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="font-mono text-xs text-ok">
        <span className="text-dim">~/anurag.sys/</span>
        {path}
      </p>
      <h2 className="font-display mt-3 text-3xl font-semibold text-fg md:text-5xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{lead}</p> : null}
    </div>
  );
}

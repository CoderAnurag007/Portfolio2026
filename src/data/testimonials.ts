export const runbook = [
  {
    step: "01",
    title: "Start from the failure mode",
    body: "Before picking a framework, find out what breaks, for whom, and what it costs. Then build the smallest reliable interface around it.",
  },
  {
    step: "02",
    title: "Boring reliability wins",
    body: "Clear boundaries, idempotent sync jobs, honest error messages. Maintainable beats clever, every time the pager goes off.",
  },
  {
    step: "03",
    title: "AI only where it earns its place",
    body: "LLMs are leverage on knowledge work, not decoration. Grounded retrieval, evaluation and a fallback path, or it does not ship.",
  },
  {
    step: "04",
    title: "Learn by shipping",
    body: "Foundations first, then a real project with real constraints. ReelStudio, this site and every side project exist because of that habit.",
  },
] as const;

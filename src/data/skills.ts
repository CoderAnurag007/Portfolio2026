/** Rendered as a stack.json file; keys become JSON keys. */
export const stack = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  frontend: ["React", "Next.js", "Tailwind CSS", "PWA", "WCAG 2.x", "WAI-ARIA"],
  backend: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "JWT auth"],
  data: ["PostgreSQL", "MongoDB", "Aggregation pipelines", "Qdrant", "Query tuning"],
  ai: ["LLM APIs", "RAG", "Embeddings", "Vector search", "OpenAI", "Gemini", "AI agents"],
  delivery: ["AWS", "GCP", "Docker", "CI/CD", "Git", "Vercel"],
} as const;

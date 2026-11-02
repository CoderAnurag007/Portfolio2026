/**
 * Tiny in-browser retrieval over hand-written facts about Anurag.
 * TF-IDF-style scoring with a synonym map; no LLM, no network, no API key.
 */
import { siteConfig } from "@/data/site";

export type Doc = {
  id: string;
  source: string;
  title: string;
  answer: string;
  keywords: string;
};

export const docs: Doc[] = [
  {
    id: "who",
    source: "profile.md",
    title: "Who is Anurag?",
    answer:
      "Anurag Singh is a Full Stack Software Engineer with 4+ years building production software for B2B commerce and healthcare: React and Next.js front ends, Node.js and Python (FastAPI) back ends, REST APIs and marketplace integrations on PostgreSQL and MongoDB. He also builds LLM features like RAG into real products.",
    keywords: "who about anurag summary intro profile engineer background overview",
  },
  {
    id: "current",
    source: "experience.ts#onechanneladmin",
    title: "Current role",
    answer:
      "Since July 2023 he has been a Software Engineer (Full Stack) at Modern Techserv India, building OneChannelAdmin, a multi-channel commerce platform. He owns marketplace integrations end to end (API design, data mapping, sync jobs, production debugging) and works across catalog, inventory, order and admin features.",
    keywords: "current job role work company onechanneladmin modern techserv now present ecommerce commerce marketplace integration sync inventory orders catalog",
  },
  {
    id: "ayum",
    source: "experience.ts#ayum",
    title: "Founder experience",
    answer:
      "From July 2022 to April 2023 he co-founded Ayum Healthcare and was its CTO, leading all engineering for a platform covering doctor appointments, pathology bookings, home sample collection and digital lab reports. The team was selected for state incubation and received an INR 1 lakh seed grant from the Madhya Pradesh Government. He also built Ayum Doctor, pharmacy software for medical stores (prescriptions, billing, inventory, customers).",
    keywords: "ayum healthcare startup founder cofounder cto lead leadership health doctor appointments lab booking grant incubation pharmacy medical store",
  },
  {
    id: "intern",
    source: "experience.ts#sortwind",
    title: "Internship",
    answer:
      "He interned as a Full Stack Developer at Sortwind Pvt. Ltd. (Oct–Dec 2022), building and debugging frontend and backend features and API integrations on the MERN stack.",
    keywords: "intern internship sortwind first mern",
  },
  {
    id: "years",
    source: "experience.ts",
    title: "Years of experience",
    answer:
      "4+ years in total: 3+ years at OneChannelAdmin (since Jul 2023), close to a year co-founding and leading Ayum Healthcare as CTO, and an internship at Sortwind.",
    keywords: "years experience how long senior level seniority yoe",
  },
  {
    id: "rag",
    source: "projects.ts#k8s-rag-assistant",
    title: "RAG and LLM work",
    answer:
      "Yes. He built an agentic RAG assistant that answers Kubernetes documentation questions using embeddings, Qdrant vector search and OpenAI models, plus an AI diagnosis app on Google Gemini and a conversational trip planner. At work he integrates LLM APIs into product workflows where they add operational value.",
    keywords: "rag retrieval llm ai ml genai generative openai gemini embeddings vector qdrant agents agentic chatbot machine learning kubernetes",
  },
  {
    id: "frontend",
    source: "stack.json#frontend",
    title: "Frontend",
    answer:
      "React, Next.js and TypeScript daily, with Tailwind CSS. He builds dashboards, PWAs and accessible UI (semantic HTML, WCAG 2.x, WAI-ARIA, keyboard and screen-reader testing). This site is Next.js + TypeScript.",
    keywords: "frontend front end react nextjs next typescript ui ux tailwind css html dashboard pwa",
  },
  {
    id: "backend",
    source: "stack.json#backend",
    title: "Backend",
    answer:
      "Node.js with Express and Python with FastAPI: REST API design, authentication (JWT), WebSockets, third-party API integrations and background sync jobs.",
    keywords: "backend back end node nodejs express python fastapi api rest apis server auth jwt websockets integrations microservices",
  },
  {
    id: "data",
    source: "stack.json#data",
    title: "Databases",
    answer:
      "PostgreSQL and MongoDB in production: schema design, query tuning and MongoDB aggregation pipelines for reporting dashboards. Qdrant for vector search in AI projects.",
    keywords: "database databases sql postgres postgresql mongodb mongo nosql data query aggregation qdrant",
  },
  {
    id: "cloud",
    source: "stack.json#delivery",
    title: "Cloud and DevOps",
    answer:
      "AWS and GCP, Docker, CI/CD pipelines and Git-based workflows; front ends deployed on Vercel.",
    keywords: "cloud devops aws gcp docker cicd ci cd deploy deployment vercel git",
  },
  {
    id: "a11y",
    source: "experience.ts",
    title: "Accessibility",
    answer:
      "He ships accessible UI with semantic HTML, WCAG 2.x and WAI-ARIA, and tests with keyboard and screen readers, both at OneChannelAdmin and on the Ayum platform.",
    keywords: "accessibility a11y wcag aria screen reader keyboard",
  },
  {
    id: "projects",
    source: "projects.ts",
    title: "Projects",
    answer:
      "Kubernetes RAG assistant, ReelStudio (a local video-editing toolkit), AI Cancer Diagnose (Gemini), Ayum Healthcare platform and Tourplanner AI. Scroll to the services section for links and details.",
    keywords: "projects portfolio built side work demos services",
  },
  {
    id: "reelstudio",
    source: "projects.ts#reelstudio",
    title: "ReelStudio",
    answer:
      "ReelStudio is his local-first video editor built with Next.js, TypeScript and Remotion. It turns a clip plus a subtitle file into a finished reel with word-timed captions, animated maps and titles, entirely offline. He uses it for his tech Instagram channel, @anuraag.dev.",
    keywords: "reelstudio video editor remotion instagram reels content creator anuraag.dev",
  },
  {
    id: "education",
    source: "education.ts",
    title: "Education",
    answer:
      "B.Tech in Computer Science & Engineering from Jawaharlal Nehru College of Technology, Rewa (RGPV Bhopal), 2019–2023, CGPA 8.71/10.",
    keywords: "education degree college university btech cgpa gpa study graduate",
  },
  {
    id: "contact",
    source: "contact",
    title: "Contact and hiring",
    answer: `Email ${siteConfig.email} or call ${siteConfig.phone}. He is based in India and works remotely today. For availability and notice period, email is fastest.`,
    keywords: "contact hire hiring email phone call reach available availability notice join location remote india relocate salary interview resume cv",
  },
];

const STOP = new Set(
  "a an and are as at be by can did do does for from has have he him his how i in is it me of on or so that the their them this to was what when where which who why with you your about tell".split(
    " ",
  ),
);

const SYNONYMS: Record<string, string> = {
  ai: "llm",
  genai: "llm",
  chatgpt: "openai",
  gpt: "openai",
  js: "javascript",
  ts: "typescript",
  postgre: "postgres",
  k8s: "kubernetes",
  job: "role",
  employer: "company",
  experienced: "experience",
  built: "projects",
  build: "projects",
  made: "projects",
  stack: "backend",
  db: "database",
  hire: "hiring",
  cv: "resume",
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9.+#\s]/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/\.$/, ""))
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => SYNONYMS[t] ?? t);
}

const index = docs.map((d) => {
  const tokens = tokenize(`${d.title} ${d.keywords} ${d.keywords} ${d.answer}`);
  const tf = new Map<string, number>();
  for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
  return { doc: d, tf, len: tokens.length };
});

const df = new Map<string, number>();
for (const { tf } of index) for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);

export type Hit = { doc: Doc; score: number };

export function ask(query: string): Hit[] {
  const q = tokenize(query);
  if (!q.length) return [];
  const n = index.length;
  const scored = index.map(({ doc, tf, len }) => {
    let score = 0;
    for (const t of q) {
      // prefix match lets "integrat" find "integrations"
      let f = tf.get(t) ?? 0;
      if (!f && t.length > 3) for (const [k, v] of tf) if (k.startsWith(t) || t.startsWith(k)) f += v * 0.6;
      if (!f) continue;
      const idf = Math.log(1 + n / (df.get(t) ?? 1));
      score += ((f * 2.2) / (f + 1.2 * (0.25 + (0.75 * len) / 60))) * idf;
    }
    return { doc, score };
  });
  return scored.filter((h) => h.score > 0.8).sort((a, b) => b.score - a.score).slice(0, 3);
}

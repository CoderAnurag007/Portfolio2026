export type Experience = {
  id: string;
  company: string;
  companyShort: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  impact: string;
  responsibilities: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "oneautoparts",
    company: "Modern Techserv pvt. ltd ( Onechanneladmin )",
    companyShort: "Modern Techserv pvt. ltd ( Onechanneladmin )",
    role: "Full Stack Web Developer",
    duration: "June 2023 — Present",
    period: "3+ years",
    location: "Remote / India",
    type: "Full-time",
    summary:
      "Build and ship ecommerce platform systems — APIs, admin tools, and AI-assisted workflows that keep catalog, inventory, and orders running at scale.",
    impact:
      "Cut manual ops work across catalog and order flows by ~40% through automation, smarter admin tools, and AI-assisted product workflows.",
    responsibilities: [
      "Ship full-stack features in React/Next.js and Node.js for catalog, inventory, and order systems used daily in production.",
      "Design APIs and data models for complex ecommerce rules; keep services fast, maintainable, and easy to extend.",
      "Build AI-assisted tools for catalog enrichment, search relevance, and ops automation using LLMs and embeddings.",
      "Partner with stakeholders to turn bottlenecks into shipped product — clearer workflows, fewer handoffs.",
    ],
    achievements: [
      "Owned 20+ production features live in US ecommerce operations.",
      "Reduced multi-step admin workflows from 8+ clicks to 2–3 with unified tooling.",
      "Introduced LLM/RAG helpers that cut catalog and support triage time by ~30%.",
    ],
    metrics: [
      { label: "Tenure", value: "3+ years" },
      { label: "Domain", value: "Ecommerce Ecosystem software" },
      { label: "Focus", value: "Full Stack + AI" },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "OpenAI",
      "LangChain",
      "RAG",
      "Vector DB",
      "AWS",
      "REST APIs",
    ],
  },
  {
    id: "sortwind",
    company: "SortWind Private Limited",
    companyShort: "SortWind",
    role: "Full Stack Web Developer Intern",
    duration: "October 2022 — December 2022",
    period: "3 months",
    location: "India",
    type: "Internship",
    summary:
      "Contributed across frontend and backend on real-world product workstreams, learning production collaboration, code review discipline, and shipping under team constraints.",
    impact:
      "Accelerated feature delivery on live client projects while building professional engineering habits — ownership, communication, and shipping quality under deadlines.",
    responsibilities: [
      "Built and iterated UI and API features across multiple project modules using the MERN stack.",
      "Participated in sprint planning, code reviews, and cross-functional collaboration with designers and senior engineers.",
      "Debugged production-bound issues and improved feature stability before release.",
    ],
    achievements: [
      "Delivered production-ready contributions across frontend and backend within a short internship window.",
      "Strengthened system thinking by working on multi-module applications rather than isolated UI tasks.",
    ],
    metrics: [
      { label: "Stack", value: "MERN" },
      { label: "Mode", value: "Team Delivery" },
      { label: "Outcome", value: "Shipped Features" },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: "ayum",
    company: "Ayum Healthcare Private Limited",
    companyShort: "Ayum Healthcare",
    role: "Full Stack Web Developer",
    duration: "December 2021 — August 2022",
    period: "9 months",
    location: "India",
    type: "Full-time",
    summary:
      "Built a healthcare progressive web application from zero to production — owning product UI, backend services, database design, deployment, and ongoing reliability while still in college.",
    impact:
      "Took a healthcare product from concept to a live production PWA, enabling real users to access care workflows through a reliable, deployable full-stack system.",
    responsibilities: [
      "Designed and engineered the full application stack using Next.js, React, and Node.js.",
      "Owned database schema design, hosting, deployment pipelines, and production operations.",
      "Balanced academic commitments with production ownership through disciplined time and release management.",
    ],
    achievements: [
      "Shipped a fully functional healthcare PWA (ayum.in) from scratch to production.",
      "Managed end-to-end ownership — architecture, implementation, deployment, and iteration.",
      "Demonstrated early product thinking: reliability, usability, and real-world healthcare constraints.",
    ],
    metrics: [
      { label: "Scope", value: "0 → Production" },
      { label: "Product", value: "Healthcare PWA" },
      { label: "Ownership", value: "End-to-End" },
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Vercel",
      "PWA",
      "JavaScript",
    ],
  },
];

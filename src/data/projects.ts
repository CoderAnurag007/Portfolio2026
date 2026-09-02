export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "k8s-rag-assistant",
    title: "Enterprise Agentic Assistant — Kubernetes RAG",
    tagline: "RAG-powered agent for querying Kubernetes docs in natural language",
    category: "AI · RAG · Kubernetes",
    year: "2025",
    image: "/images/k8s-rag-assistant.png",
    description:
      "Enterprise-grade RAG assistant that lets teams query Kubernetes documentation through natural language — with context-aware retrieval and agentic workflows.",
    highlights: [
      "Built RAG pipeline with embeddings and Qdrant for Kubernetes documentation retrieval.",
      "Integrated LLMs and OpenAI for context-aware, grounded responses.",
      "Shipped customer-facing React/Node.js interface for the knowledge base.",
      "Designed agentic workflow for multi-step documentation queries.",
    ],
    tech: [
      "RAG",
      "LLMs",
      "OpenAI",
      "Embeddings",
      "Qdrant",
      "AI Agents",
      "Kubernetes",
      "React",
      "Node.js",
    ],
    featured: true,
  },
  {
    id: "cancer-diagnose-ai",
    title: "AI Cancer Diagnose",
    tagline: "AI-powered diagnostic tool with dynamic clinical question flows",
    category: "AI · Healthcare",
    year: "2024",
    image: "/images/cancer-diagnose-ai.png",
    description:
      "Diagnostic application integrating Google Gemini for dynamic clinical question flows, automated risk analysis, and secure end-to-end data handling.",
    highlights: [
      "Integrated Google Gemini API for dynamic clinical question flows and risk analysis.",
      "Built Node.js backend with API orchestration, validation, and secure data handling.",
      "Delivered React frontend with Tailwind CSS for a clean clinical UX.",
      "Connected MongoDB for patient/session data across the full stack.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini API",
      "Prompt Engineering",
    ],
    demo: "https://smartdiagnose.vercel.app/",
    featured: true,
  },
  {
    id: "ayum",
    title: "Ayum Healthcare Platform",
    tagline: "Full-stack healthcare platform — zero to production",
    category: "Healthcare · Full Stack",
    year: "2022–2023",
    image: "/images/ayum.png",
    description:
      "End-to-end healthcare platform with accessible UI, REST APIs, WebSockets, authentication, and production deployment — led as CTO.",
    highlights: [
      "Architected full-stack platform with React, Node.js, Express, and MongoDB.",
      "Implemented WCAG 2.x / WAI-ARIA accessibility across forms, navigation, and controls.",
      "Built REST APIs, JWT auth, WebSocket features, and secure application workflows.",
      "Led development, code reviews, testing, and Agile delivery end-to end.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "Azure",
      "JWT",
      "WCAG 2.x",
      "WAI-ARIA",
    ],
    github: "https://github.com/dwivediom/ayumClient",
    demo: "https://www.ayum.in/",
    featured: true,
  },
  {
    id: "tourplanner-ai",
    title: "Tourplanner AI",
    tagline: "Conversational trip planning with AI assistance",
    category: "LLM Application",
    year: "2024",
    image: "/images/tourplan.png",
    description:
      "Full-stack tour planning product with chatbot-assisted itinerary generation — users explore and refine travel plans through natural conversation.",
    highlights: [
      "Built Next.js frontend with conversational UI for guided itinerary creation.",
      "Integrated chatbot workflows for destination, budget, and preference planning.",
      "Deployed as a production web application on Vercel.",
    ],
    tech: ["Next.js", "React", "Node.js", "AI UX", "Vercel"],
    github: "https://github.com/CoderAnurag007/Tourplannerai-Frontend.git",
    demo: "https://tourplannerai.netlify.app/",
    featured: true,
  },
];

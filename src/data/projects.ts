export type Project = {
  id: string;
  service: string;
  title: string;
  tagline: string;
  status: "live" | "repo" | "private";
  year: string;
  image?: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "k8s-rag-assistant",
    service: "svc/rag-assistant",
    title: "Enterprise Agentic Assistant — Kubernetes RAG",
    tagline: "Ask Kubernetes docs questions in plain English, get grounded answers.",
    status: "private",
    year: "2025",
    image: "/images/k8s-rag-assistant.png",
    description:
      "RAG assistant that lets teams query Kubernetes documentation in natural language, with context-aware retrieval and an agentic workflow for multi-step questions.",
    highlights: [
      "RAG pipeline with embeddings and Qdrant for documentation retrieval.",
      "OpenAI LLMs for grounded, context-aware answers.",
      "React / Node.js interface over the knowledge base.",
    ],
    tech: ["RAG", "OpenAI", "Embeddings", "Qdrant", "AI Agents", "React", "Node.js"],
  },
  {
    id: "reelstudio",
    service: "svc/reelstudio",
    title: "ReelStudio — Local Video Editing Toolkit",
    tagline: "Recorded clip + subtitle file in, finished short-form video out.",
    status: "private",
    year: "ongoing",
    description:
      "Local-first editor that adds word-timed captions, animated maps, zooms and titles from a JSON cue sheet. Runs fully offline; used to produce reels for the @anuraag.dev Instagram channel.",
    highlights: [
      "SRT parser for word-level timing, so no heavy speech-to-text runs on the machine.",
      "Live preview with cue-sheet validation and insert-at-playhead editing.",
      "Node.js CLI tools for project setup, rendering and auto-edit.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Remotion", "Node.js", "D3"],
  },
  {
    id: "cancer-diagnose-ai",
    service: "svc/smart-diagnose",
    title: "AI Cancer Diagnose",
    tagline: "Dynamic clinical question flows powered by Gemini.",
    status: "live",
    year: "2024",
    image: "/images/cancer-diagnose-ai.png",
    description:
      "Diagnostic app that uses Google Gemini to drive dynamic clinical question flows and automated risk analysis, with secure end-to-end data handling.",
    highlights: [
      "Gemini API for adaptive question flows and risk analysis.",
      "Node.js backend with API orchestration and validation.",
      "React + Tailwind front end, MongoDB for session data.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind CSS"],
    demo: "https://smartdiagnose.vercel.app/",
  },
  {
    id: "ayum",
    service: "svc/ayum",
    title: "Ayum Healthcare Platform",
    tagline: "Appointments, lab bookings and reports — zero to production as CTO.",
    status: "live",
    year: "2022–23",
    image: "/images/ayum.png",
    description:
      "Progressive web app for doctor appointments, pathology bookings, home sample collection and online lab reports.",
    highlights: [
      "Booking APIs and data models for clinics, patients and appointments.",
      "JWT auth, WebSocket features and accessible forms and navigation.",
      "Ayum Doctor: pharmacy software for prescriptions, billing and inventory.",
      "Led code reviews, testing and releases in a small founding team.",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "AWS", "JWT", "WebSockets"],
    github: "https://github.com/dwivediom/ayumClient",
    demo: "https://www.ayum.in/",
  },
  {
    id: "tourplanner-ai",
    service: "svc/tourplanner",
    title: "Tourplanner AI",
    tagline: "Plan a trip by talking to it.",
    status: "live",
    year: "2024",
    image: "/images/tourplan.png",
    description:
      "Conversational trip planner: users shape destination, budget and preferences through a chat interface that generates itineraries.",
    highlights: [
      "Next.js conversational UI for guided itinerary creation.",
      "Chatbot workflows for destination, budget and preferences.",
    ],
    tech: ["Next.js", "React", "Node.js", "LLM UX"],
    github: "https://github.com/CoderAnurag007/Tourplannerai-Frontend.git",
    demo: "https://tourplannerai.netlify.app/",
  },
];

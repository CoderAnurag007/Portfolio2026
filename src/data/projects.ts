export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  architecture: string;
  businessValue: string;
  tech: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "tourplanner-ai",
    title: "Tourplanner AI",
    tagline: "Conversational trip planning powered by AI assistance",
    category: "LLM Application",
    image: "/images/tourplan.png",
    problem:
      "Travelers struggle to assemble itineraries across destinations, budgets, and preferences — often bouncing between fragmented tools with no intelligent guidance.",
    solution:
      "Built a full-stack tour planning product with chatbot-assisted itinerary generation, enabling users to explore and refine travel plans through natural conversation.",
    architecture:
      "Next.js frontend with conversational UI, Node.js services for planning workflows, and chatbot integration for guided itinerary creation. Deployed as a production web application.",
    businessValue:
      "Turns trip planning from a manual research chore into an assisted product experience — reducing decision friction and demonstrating practical LLM UX in a consumer domain.",
    tech: ["Next.js", "React", "Node.js", "Chatbot", "AI UX", "Vercel"],
    github: "https://github.com/CoderAnurag007/Tourplannerai-Frontend.git",
    demo: "https://tourplannerai.netlify.app/",
    caseStudy: "#projects",
    featured: true,
  },
  {
    id: "ayum",
    title: "Ayum.in",
    tagline: "Healthcare PWA from zero to production",
    category: "Production Platform",
    image: "/images/ayum.png",
    problem:
      "Healthcare access workflows needed a reliable digital product that patients and providers could use without native app friction — with production-grade uptime and maintainability.",
    solution:
      "Designed and engineered a progressive web application covering core healthcare flows, shipping a complete stack from UI to database and deployment.",
    architecture:
      "Next.js + React client as a PWA, Node.js backend services, MongoDB persistence, and Vercel-hosted delivery with production deployment ownership.",
    businessValue:
      "Enabled a live healthcare product (ayum.in) with end-to-end engineering ownership — proving ability to take ambiguous product needs to production systems.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "PWA", "Vercel"],
    github: "https://github.com/dwivediom/ayumClient",
    demo: "https://www.ayum.in/",
    caseStudy: "#projects",
    featured: true,
  },
  {
    id: "thoughtshare",
    title: "Thoughtshare",
    tagline: "Notes sharing platform with full CRUD workflows",
    category: "Full Stack System",
    image: "/images/thoughtshare.png",
    problem:
      "Students and professionals needed a simple, reliable way to publish, organize, and share important notes without heavyweight tooling.",
    solution:
      "Engineered a full-stack notes platform with authentication-ready sharing flows and complete create, read, update, and delete operations.",
    architecture:
      "React frontend consuming Node.js APIs with MongoDB for document storage — modular CRUD services and responsive UI for browsing and managing notes.",
    businessValue:
      "Delivered a complete content-sharing product loop — demonstrating scalable CRUD architecture, data modeling, and user-facing reliability.",
    tech: ["React", "Node.js", "MongoDB", "Express", "REST"],
    github: "https://github.com/CoderAnurag007/Rezzit-frontend",
    demo: "https://thoughtshare.netlify.app/",
    featured: true,
  },
  {
    id: "machz",
    title: "MachZ Clothing",
    tagline: "E-commerce storefront with realtime-backed commerce flows",
    category: "Commerce Platform",
    image: "/images/machz.png",
    problem:
      "Independent apparel brands need a polished storefront with catalog browsing and cart flows without standing up heavy custom infrastructure.",
    solution:
      "Built a full-stack e-commerce experience on React and Firebase, covering product discovery and purchase-oriented user journeys.",
    architecture:
      "React client with Firebase-backed data and auth primitives — modular product, cart, and checkout-oriented UI layers for a responsive commerce experience.",
    businessValue:
      "Showcases product thinking in commerce: conversion-oriented UX, clean component architecture, and practical use of managed backend services.",
    tech: ["React", "Firebase", "E-commerce", "JavaScript"],
    github: "https://github.com/CoderAnurag007/Machz_Clothing",
    demo: "https://calm-cannoli-d6d618.netlify.app/",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    tagline: "Trading-style analytics UI for dense operational data",
    category: "Data Interface",
    image: "/images/dashboard.png",
    problem:
      "Dense operational and trading metrics are hard to scan when interfaces lack hierarchy, visual clarity, and responsive chart composition.",
    solution:
      "Designed a responsive analytics dashboard with graph-driven views and a disciplined visual system for monitoring key signals.",
    architecture:
      "React UI with composed chart modules, theming, and layout systems optimized for readability across desktop and mobile viewports.",
    businessValue:
      "Demonstrates interface engineering for data-heavy products — the same craft required for ML observability, ops consoles, and AI evaluation dashboards.",
    tech: ["React", "Charts", "Dashboard UI", "Responsive Design"],
    github:
      "https://github.com/CoderAnurag007/Analytic-Dashboard-using-react-js",
    demo: "https://venerable-bavarois-c20bb4.netlify.app/",
    featured: true,
  },
];

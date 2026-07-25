export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core languages for systems, products, and AI work.",
    skills: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Databases",
    description: "Persistent storage and caching for production workloads.",
    skills: ["MongoDB", "Postgres", "Redis", "SQL DB", "Vector DB"],
  },
  {
    title: "Backend",
    description: "APIs and services designed for scale and maintainability.",
    skills: ["Node.js", "Express", "FastAPI"],
  },
  {
    title: "Frontend",
    description: "Product interfaces with clarity, speed, and polish.",
    skills: ["React", "Next.js", "Vue", "Angular", "Svelte", "Remix", "Tailwind"],
  },
  {
    title: "AI & ML",
    description: "The stack powering the transition into AI engineering.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "Vector Databases",
      "Embeddings",
      "Prompt Engineering",
      "OpenAI APIs",
      "MCP",
      "AI Agents",
    ],
  },
  {
    title: "Deployment",
    description: "Shipping and operating reliable production systems.",
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD"],
  },
];

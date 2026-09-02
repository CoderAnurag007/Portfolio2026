export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core languages for full-stack and AI development.",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "C/C++"],
  },
  {
    title: "Frontend",
    description: "Accessible, responsive product interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Semantic HTML",
      "WCAG 2.x",
      "WAI-ARIA",
    ],
  },
  {
    title: "Backend",
    description: "APIs, services, and real-time systems.",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    description: "Relational, NoSQL, and vector storage.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "DynamoDB",
      "SQLite",
      "Firebase",
      "Qdrant",
    ],
  },
  {
    title: "AI & ML",
    description: "LLM integration, RAG, and AI-assisted development.",
    skills: [
      "LLMs",
      "OpenAI",
      "RAG",
      "AI Agents",
      "NLP",
      "Embeddings",
      "Prompt Engineering",
      "Google Gemini API",
      "Machine Learning",
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Cloud, containers, CI/CD, and engineering workflow.",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "GitLab CI",
      "Kafka",
      "Linux",
      "Postman",
    ],
  },
];

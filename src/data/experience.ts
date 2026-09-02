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
    id: "onechanneladmin",
    company: "Modern Techserv Private Ltd. (OneChanneladmin)",
    companyShort: "OneChanneladmin",
    role: "AI Software Engineer",
    duration: "Jul 2023 — Present",
    period: "3+ years",
    location: "Remote · Orlando, Florida, US",
    type: "Full-time",
    summary:
      "Building production features for a multi-tenant e-commerce and logistics platform — full-stack delivery with accessibility, API design, and LLM integration.",
    impact:
      "Optimized REST APIs for 30% better platform performance while shipping accessible, production-ready UI across catalog, order, and admin workflows.",
    responsibilities: [
      "Ship full-stack features with React, JavaScript, Node.js, and MongoDB for a multi-tenant e-commerce platform.",
      "Build reusable UI with semantic HTML, WCAG 2.x, and WAI-ARIA — including keyboard and screen-reader testing.",
      "Design and optimize REST APIs; collaborate on technical design, code reviews, testing, and deployment.",
      "Integrate LLMs and AI APIs into product workflows where they add clear operational value.",
    ],
    achievements: [
      "Improved platform API performance by 30% through optimization and better service design.",
      "Remediated accessibility issues across focus, labels, navigation, and interactive controls.",
      "Delivered production features across catalog, inventory, order, and admin systems.",
    ],
    metrics: [
      { label: "Tenure", value: "3+ years" },
      { label: "Domain", value: "Ecommerce Ecosystem" },
      { label: "Focus", value: "Full Stack + AI" },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "AWS",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "LLMs",
      "Kafka",
      "WCAG 2.x",
      "WAI-ARIA",
    ],
  },
  {
    id: "ayum",
    company: "Ayum Healthcare Private Limited",
    companyShort: "Ayum Healthcare",
    role: "CTO",
    duration: "Jul 2022 — Apr 2023",
    period: "10 months",
    location: "On-site · Rewa, Madhya Pradesh",
    type: "Self-employed",
    summary:
      "Led end-to-end development of a full-stack healthcare platform — architecture, accessible UI, APIs, auth, WebSockets, and production delivery.",
    impact:
      "Took a healthcare product from architecture to production with accessible forms, secure workflows, and real-time features.",
    responsibilities: [
      "Architected and developed the platform with React, Node.js, Express.js, and MongoDB.",
      "Implemented accessible forms, navigation, and interactive components using semantic HTML and WAI-ARIA.",
      "Built REST APIs, JWT authentication, WebSocket features, and secure application workflows.",
      "Led development, code reviews, accessibility testing, and Agile delivery.",
    ],
    achievements: [
      "Shipped ayum.in — a live healthcare platform from zero to production.",
      "Passed keyboard and screen-reader accessibility testing across core flows.",
      "Owned full technical leadership as CTO while still completing college.",
    ],
    metrics: [
      { label: "Role", value: "CTO" },
      { label: "Product", value: "Healthcare Platform" },
      { label: "Scope", value: "0 → Production" },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "Azure",
      "JWT",
      "REST APIs",
      "WCAG 2.x",
      "WAI-ARIA",
    ],
  },
  {
    id: "sortwind",
    company: "Sortwind Private Limited",
    companyShort: "SortWind",
    role: "Full Stack Developer Intern",
    duration: "Oct 2022 — Dec 2022",
    period: "3 months",
    location: "Remote · Delhi, India",
    type: "Internship",
    summary:
      "Developed MERN stack applications, backend APIs, and server-side features — with TDD practices and production deployment support.",
    impact:
      "Contributed to 20% faster project delivery through TDD, API optimization, and disciplined testing.",
    responsibilities: [
      "Developed and maintained MERN stack applications, backend APIs, and server-side functionality.",
      "Improved performance through API optimization, testing, and debugging.",
      "Supported production deployments using AWS, Git, and Postman.",
    ],
    achievements: [
      "Applied TDD practices contributing to 20% faster project delivery.",
      "Shipped production-ready features across frontend and backend within the internship.",
    ],
    metrics: [
      { label: "Stack", value: "MERN" },
      { label: "Practice", value: "TDD" },
      { label: "Outcome", value: "+20% delivery" },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Git",
      "Postman",
      "Tailwind CSS",
    ],
  },
];

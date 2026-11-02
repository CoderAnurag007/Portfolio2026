export type Experience = {
  id: string;
  hash: string;
  status: "running" | "shipped" | "merged";
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  media?: { src: string; alt: string; caption: string; width: number; height: number }[];
};

export const experiences: Experience[] = [
  {
    id: "onechanneladmin",
    hash: "a3f9c21",
    status: "running",
    company: "Modern Techserv India (OneChannelAdmin)",
    role: "Software Engineer (Full Stack)",
    duration: "Jul 2023 — Present",
    location: "Remote",
    summary:
      "Multi-channel commerce platform that helps sellers manage listings, inventory and orders across marketplaces.",
    bullets: [
      "Build and maintain full-stack features with React, TypeScript, Node.js and REST APIs across catalog, inventory, order and admin workflows.",
      "Own third-party marketplace integrations end to end: API design, data mapping, sync jobs and production debugging.",
      "Write and tune PostgreSQL queries and MongoDB aggregation pipelines behind reporting and operational dashboards.",
      "Resolve production incidents in data-sync workflows with root-cause fixes, validation and better error handling.",
      "Ship accessible UI (semantic HTML, WCAG 2.x, WAI-ARIA) and integrate LLM APIs where they add real operational value.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "FastAPI", "AWS", "Docker", "LLMs"],
  },
  {
    id: "ayum",
    hash: "7be04d8",
    status: "shipped",
    company: "Ayum Healthcare",
    role: "Co-founder & CTO",
    duration: "Jul 2022 — Apr 2023",
    location: "Rewa, Madhya Pradesh",
    summary:
      "Healthcare startup: doctor discovery, appointments, pathology booking, home sample collection and digital lab reports.",
    bullets: [
      "Co-founded the company and led all engineering, taking the platform from architecture to production.",
      "Built it as a Progressive Web App with Next.js, React, Node.js, MongoDB and AWS — auth, booking APIs and data models for clinics, patients and appointments.",
      "Built Ayum Doctor, pharmacy software for medical stores covering prescriptions, billing, inventory and customer management.",
      "Part of the founding team selected for state incubation, receiving an INR 1 lakh seed grant from the Madhya Pradesh Government.",
    ],
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "AWS", "JWT", "WebSockets"],
    media: [
      {
        src: "/images/ayum-grant.png",
        alt: "Ayum Healthcare team receiving a seed grant cheque from Madhya Pradesh Government officials on stage",
        caption: "Ayum team receiving the Madhya Pradesh Government seed grant",
        width: 447,
        height: 447,
      },
      {
        src: "/images/ayum-doctor.png",
        alt: "Ayum Doctor promotional banner: smart pharmacy software for medical stores",
        caption: "Ayum Doctor: pharmacy software for medical stores",
        width: 596,
        height: 335,
      },
    ],
  },
  {
    id: "sortwind",
    hash: "1c58e6f",
    status: "merged",
    company: "Sortwind Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Oct 2022 — Dec 2022",
    location: "Remote",
    summary: "MERN stack applications, backend APIs and server-side features.",
    bullets: [
      "Built, tested and debugged frontend and backend features and API integrations for production web applications.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "Postman"],
  },
];

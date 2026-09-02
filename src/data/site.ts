export const siteConfig = {
  name: "Anurag Singh",
  title: "Anurag Singh — Software Engineer | Web Accessibility & Full Stack",
  description:
    "Full Stack Engineer with 4+ years building production applications using React, Next.js, TypeScript, Node.js, Python, and MongoDB. Experienced in accessible UI, scalable REST APIs, AWS deployments, and LLM integration.",
  url: "https://anuragsingh.dev",
  email: "Anuragsinghg999@gmail.com",
  phone: "+91 6261178107",
  location: "Rewa, India",
  resumePath: "/resume/AnuragSinghResume.pdf",
  links: {
    github: "https://github.com/CoderAnurag007",
    linkedin: "https://www.linkedin.com/in/anurag-singh-97009b1a0/",
    email: `mailto:Anuragsinghg999@gmail.com?subject=${encodeURIComponent("Hello Anurag")}`,
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Impact", href: "#impact" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

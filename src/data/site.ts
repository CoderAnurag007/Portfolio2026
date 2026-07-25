export const siteConfig = {
  name: "Anurag Singh",
  title: "Anurag Singh — AI Engineer & Full Stack Engineer",
  description:
    "Experienced software engineer building production AI systems, LLM applications, and scalable full-stack platforms. Transitioning into AI/ML engineering with strong software foundations.",
  url: "https://anuragsingh.dev",
  email: "Anuragsinghg999@gmail.com",
  phone: "+91 6261178107",
  location: "India",
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

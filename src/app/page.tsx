import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { AiJourney } from "@/components/sections/ai-journey";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Impact } from "@/components/sections/impact";
import { Philosophy } from "@/components/sections/philosophy";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <AiJourney />
        <Skills />
        <Impact />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

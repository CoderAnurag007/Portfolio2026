import { Topbar } from "@/components/topbar";
import { Hero } from "@/components/hero";
import { Deploys } from "@/components/deploys";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Runbook } from "@/components/runbook";
import { Contact } from "@/components/contact";
import { Ask } from "@/components/ask";

export default function HomePage() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Deploys />
        <Services />
        <Stack />
        <Runbook />
        <Contact />
      </main>
      <Ask />
    </>
  );
}

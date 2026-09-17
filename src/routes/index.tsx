import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagwadi Denzel Phaweni — Aspiring Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Sagwadi Denzel Phaweni, an aspiring data analyst skilled in Excel, data analysis, research, and AI-assisted development.",
      },
      {
        property: "og:title",
        content: "Sagwadi Denzel Phaweni — Aspiring Data Analyst",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Sagwadi Denzel Phaweni, an aspiring data analyst skilled in Excel, data analysis, research, and AI-assisted development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

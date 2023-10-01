import { HeroBox, InfoBox, Project } from "@/components/Boxes";
import { Footer } from "@/components/Footer";
import projects from "src/projects";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-5 p-7 md:p-10 max-w-7xl mx-auto w-full">
        <HeroBox />

        {projects.map((project) => (
          <Project key={project.link} data={{ ...project }} />
        ))}

        <InfoBox />
      </main>
      <Footer />
    </>
  );
}

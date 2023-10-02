import { Project } from "@/components/Boxes/Content";
import { HeroBox, InfoBox } from "@/components/Boxes/Main";
import { Footer } from "@/components/Footer";
import { projects } from "src/meta";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-7 lg:p-10 max-w-7xl mx-auto w-full">
        <HeroBox />

        {projects.map((project) => (
          <Project key={project.link} data={{ ...project }} />
        ))}
        {/* <BunBox /> */}

        <InfoBox />
      </main>
      <Footer />
    </>
  );
}

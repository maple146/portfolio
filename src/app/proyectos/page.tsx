import Projects from "@/app/_home/projects";
import { PROJECTS_DATA } from "@/data/home/projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Projects {...PROJECTS_DATA.projects} />
    </main>
  );
}

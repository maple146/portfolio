import About from "@/app/_home/about";
import Contact from "@/app/_home/contact";
import Header from "@/app/_home/header";
import Projects from "@/app/_home/projects";

import { PROJECTS_DATA } from "@/data/home/projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
      <Projects {...PROJECTS_DATA.home} />
      <Contact />
    </main>
  );
}

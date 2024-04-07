import About from "@/app/_home/about";
import Contact from "@/app/_home/contact";
import Header from "@/app/_home/header";
import Projects from "@/app/_home/projects";
import { HEADER_DATA } from "@/data/home/header";
import { ABOUT_DATA } from "@/data/home/about";
import { PROJECTS_DATA } from "@/data/home/projects";
import { CONTACT_DATA } from "@/data/home/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header {...HEADER_DATA.home} />
      <About {...ABOUT_DATA.home} />
      <Projects {...PROJECTS_DATA.home} />
      <Contact {...CONTACT_DATA.home} />
    </main>
  );
}

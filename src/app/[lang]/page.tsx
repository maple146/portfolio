import About from "@/app/_home/about";
import Contact from "@/app/_home/contact";
import Header from "@/app/_home/header";
import Projects from "@/app/_home/projects";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const langData = await getDictionary(lang);

  return (
    <main className="flex flex-col">
      <Header {...langData.header} />
      <About {...langData.about} />
      <Projects {...langData.projects} />
      <Contact {...langData.contact} />
    </main>
  );
}

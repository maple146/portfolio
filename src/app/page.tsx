import About from "@/app/_home/about";
import Contact from "@/app/_home/contact";
import Header from "@/app/_home/header";
import Projects from "@/app/_home/projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

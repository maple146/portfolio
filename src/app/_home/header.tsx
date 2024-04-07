import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <p className="text-xl lg:text-xl-4 mb-4 font-bold">Luciano Alcaraz</p>
        <p className="text-lg lg:text-xl-3 mb-8 font-semibold">Desarrollador Front-end</p>
        <div className="flex gap-4 flex-col lg:flex-row">
          <Button href="https://github.com/maple146">Github</Button>
          <Button href="https://www.linkedin.com/in/lucianoalcaraz/">Linkedin</Button>
        </div>
      </div>
    </div>
  );
}

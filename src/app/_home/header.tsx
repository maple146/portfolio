import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <p className="text-xl lg:text-xl-4 mb-4 font-bold">Luciano Alcaraz</p>
        <p className="text-lg lg:text-xl-3 mb-8 font-semibold">Desarrollador Front-end</p>
        <div className="flex gap-4 flex-col lg:flex-row">
          <Link href="https://github.com/maple146">
            <Button>Github</Button>
          </Link>
          <Link href="https://www.linkedin.com/in/lucianoalcaraz/">
            <Button>Linkedin</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-main-900">
      <div className="container flex flex-col items-center">
        <p className="text-sm">Text SM</p>
        <p className="text-base">Text BASE</p>
        <p className="text-lg">Text LG</p>
        <p className="text-xl">Text XL</p>
        <p className="text-xl-2">Text XL-2</p>
        <p className="text-xl-3">Text XL-3</p>
        <p className="text-xl-4">Text XL-4</p>
        <div className="flex gap-4">
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

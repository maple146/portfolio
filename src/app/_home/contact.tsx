import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Contact() {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <Title text={"Contacto"} />

        <div className="my-4 lg:my-8 max-w-[700px]">
          <Alert>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque dui lectus, consectetur nec elementum eget.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <Link
            href="mailto:LGA-dev@hotmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Email</Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucianoalcaraz/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Linkedin</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

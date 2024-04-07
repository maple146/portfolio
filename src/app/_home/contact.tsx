import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Contact() {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <Title text={"Contacto"} />

        <div className="my-4 lg:my-8 max-w-[700px]">
          <Alert>
            <AlertDescription>
              Si crees que encajaría bien en tu equipo o si deseas discutir
              algún proyecto en particular, no dudes en enviarme un correo o un
              mensaje en LinkedIn.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <Button href="mailto:LGA-dev@hotmail.com">Email</Button>
          <Button href="https://www.linkedin.com/in/lucianoalcaraz/">Linkedin</Button>
        </div>
      </div>
    </div>
  );
}

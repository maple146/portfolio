import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ContactTypes } from "@/types/contact.types";

export default function Contact({ title, text, buttons }: ContactTypes) {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <Title text={title} />
        <div className="my-4 lg:my-8 max-w-[700px]">
          <Alert>
            <AlertDescription>
              {text}
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {
            buttons.map((button) => (
              <Button key={button.buttonText} href={button.externalUrl}>{button.buttonText}</Button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { HeaderTypes } from "@/types/header.types";

export default function Header({ title, subtitle, buttons }: HeaderTypes) {
  return (
    <div className="bg-main-900 h-screen lg:h-[480px]">
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <p className="text-xl lg:text-xl-4 mb-4 font-bold">{title}</p>
        <p className="text-lg lg:text-xl-3 mb-8 font-semibold">{subtitle}</p>
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

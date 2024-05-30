import Image from "next/image";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";

export interface CardTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  linksArray?: any;
}

const Card = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  externalUrl,
  linksArray,
}: CardTypes) => {
  console.log(linksArray);

  return (
    // Agregar 'shadow' cuando se implemente el light mode
    <div className="rounded-lg overflow-hidden h-full flex flex-col max-w-[396px] justify-self-center border-b border-white">
      <div className="relative min-h-[200px] w-full">
        <Image
          fill
          src={image}
          alt={imageAlt}
          className="object-cover object-top"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full border-l border-r border-white">
        <div className="">
          <h5 className="text-lg font-bold text-white">{title}</h5>
          <h6 className="text-sm font-bold text-white">{subtitle}</h6>
          <hr className="my-2"></hr>
          <p className="text-sm font-normal text-white">{description}</p>
          {
            linksArray && (
              <div className="mt-2">
                <ul className="list-disc list-inside">
                  {/* Quitar el any mas adelante */}
                  {linksArray?.map((link: any) => (
                    <CustomLink
                      key={link.text}
                      url={link.url}
                      text={link.text}
                      fontSize="sm"
                    />
                  ))}
                </ul>
              </div>
            )
          }
        </div>
        {externalUrl && (
          <div className="flex gap-4 mt-4">
            <Button
              href={externalUrl}
            >
              Ver sitio
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

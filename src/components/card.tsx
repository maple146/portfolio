import Image from "next/image";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";
import Link from "next/link";

export interface CardTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  linksArray?: any;
  techStack: any;
}

const Card = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  externalUrl,
  linksArray,
  techStack
}: CardTypes) => {
  // console.log(techStack);
  console.log(externalUrl)

  return (
    // Agregar 'shadow' cuando se implemente el light mode
    <div className="rounded-lg overflow-hidden h-full flex flex-col max-w-[396px] justify-self-center border-b border-white bg-white bg-opacity-100 text-black">
      <div className="relative min-h-[200px] w-full">
        {
          externalUrl
            ?
            (
              <Link href={externalUrl} rel="noopener noreferrer" target="_blank">
                <Image
                  fill
                  src={image}
                  alt={imageAlt}
                  className="object-cover object-top border rounded-t-lg border-b-main-100 border-b-8"
                />
              </Link>
            )
            :
            (
              <Image
                fill
                src={image}
                alt={imageAlt}
                className="object-cover object-top border rounded-t-lg border-b-main-100 border-b-8"
              />
            )
        }
      </div>
      <div className="p-4 flex flex-col justify-between h-full border-l border-r border-white relative">
        <div className="">
          <h5 className="text-lg font-bold text-main-700">{title}</h5>
          <h6 className="text-sm font-bold text-main-900">{subtitle}</h6>
          <hr className="mt-2 mb-4"></hr>
          <p className="text-sm font-normal">{description}</p>
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
          <div className="flex mt-4 text-white">
            <Button
              href={externalUrl}
            >
              Ver sitio
            </Button>
          </div>
        )}
        {
          techStack && (
            <div className="flex absolute bottom-4 right-4 gap-1">
              {
                techStack.map((tech: any) => (
                  <div key={tech.text} className="bg-main-900 w-auto text-white px-2 select-none rounded-sm">
                    {tech.text}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Card;

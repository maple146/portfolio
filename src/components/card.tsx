import Image from "next/image";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";
import Link from "next/link";
import { CardTypes } from "@/types/card.types";

const Card = ({
  index,
  showCards,
  image,
  imageAlt,
  title,
  subtitle,
  description,
  externalUrl,
  linksArray,
  techStack
}: CardTypes) => {
  return (
    <div className={`rounded-lg overflow-hidden h-full flex-col max-w-[396px] justify-self-center border-b border-white bg-white bg-opacity-100 text-black ${(index === 0 || index === 1) || showCards === true ? 'flex' : 'hidden'}`}>
      <>
        {
          externalUrl
            ?
            (
              <Link href={externalUrl} rel="noopener noreferrer" target="_blank">
                <div className="relative min-h-[200px]">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image}
                    alt={imageAlt}
                    className="object-cover object-top border rounded-t-lg border-b-main-100 border-b-8"
                  />
                </div>
              </Link>
            )
            :
            (
              <div className="relative min-h-[200px]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={image}
                  alt={imageAlt}
                  className="object-cover object-top border rounded-t-lg border-b-main-100 border-b-8"
                />
              </div>
            )
        }
      </>
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
                  {linksArray?.map((link) => (
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
        {
          !linksArray && (
            <div className="flex mt-4 text-white">
              <Button
                href={externalUrl}
                disabled={externalUrl === ""}
              >
                {externalUrl ? 'Ver sitio' : 'Sitio privado'}
              </Button>
            </div>
          )
        }
        {
          techStack && (
            <div className="flex flex-col absolute bottom-4 right-4 gap-0.5">
              {
                techStack.map((tech) => (
                  <div
                    key={tech.text}
                    className="bg-main-900 w-[90px] text-white px-2 py-0.5 select-none text-xxxs md:text-xxs rounded-sm text-center"
                  >
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

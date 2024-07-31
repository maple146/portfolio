import Image from "next/image";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";
import Link from "next/link";
import { CardTypes } from "@/types/card.types";

const CardImage = ({ image, imageAlt }: { image: string, imageAlt: string }) => {
  return (
    <div className="relative min-h-[200px] rounded-t-lg">
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={image}
        alt={imageAlt}
        className="object-cover object-top rounded-t-lg"
      />
    </div>
  );
}

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
  techStack,
  viewSiteButton,
  privateSiteButton
}: CardTypes) => {
  return (
    <div
      className={`
        col-span-2 md:col-span-1
        rounded-lg overflow-hidden h-full flex-col max-w-[396px] justify-self-center bg-[#252525] text-white 
        border-2 border-[rgba(46,187,144,0.3)] bg-gradient-to-t from-[rgba(46,187,144,0.15)] to-[rgba(0,0,0,0.2)]
        ${(index === 0 || index === 1) || showCards === true ? 'flex' : 'hidden'}
      `}>
      {
        externalUrl
          ?
          (
            <Link href={externalUrl} rel="noopener noreferrer" target="_blank">
              <CardImage image={image} imageAlt={imageAlt} />
            </Link>
          )
          :
          (
            <CardImage image={image} imageAlt={imageAlt} />
          )
      }
      <div className="p-4 flex flex-col h-full relative justify-between">
        <div>
          <h5 className="text-lg font-bold">{title}</h5>
          <h6 className="text-sm font-bold text-main-700">{subtitle}</h6>
          <hr className="mt-2 mb-4 text-main-900"></hr>
          <p className="text-sm font-normal mb-6">{description}</p>
        </div>
        <div className="min-h-9 md:min-h-10 flex justify-between items-end">
          {/* Links */}
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
          {/* Botones */}
          {
            !linksArray && (
              <div className="flex text-white">
                <Button
                  href={externalUrl}
                  disabled={externalUrl === ""}
                >
                  {externalUrl ? viewSiteButton : privateSiteButton}
                </Button>
              </div>
            )
          }
          {/* Pills */}
          <div className="flex flex-col justify-between h-9 md:h-10">
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
        </div>
      </div>
    </div>
  );
};

export default Card;

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export interface CardTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
}

const Card = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  externalUrl,
}:
CardTypes) => {
  return (
    // Agregar 'shadow' cuando se implemente el light mode
    <div className="bg-main-700 rounded-lg overflow-hidden h-full flex flex-col max-w-[396px] justify-self-center">
      <div className="relative min-h-[200px] w-full">
        <Image fill src={image} alt={imageAlt} className="object-cover object-top"/>
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="pb-8">
          <h5 className="text-lg font-bold text-white">{title}</h5>
          <h6 className="text-sm font-bold text-white">{subtitle}</h6>
          <hr className="my-2"></hr>
          <p className="text-sm font-normal text-white">{description}</p>
        </div>
        <div className="flex gap-4">
          <Link href={externalUrl} rel="noopener noreferrer" target="_blank">
            <Button>Ver sitio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

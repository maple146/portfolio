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
  internalUrl: string;
}

const Card = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  externalUrl,
}: // internalUrl,
CardTypes) => {
  return (
    <div className="bg-main-700 rounded-lg shadow overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image fill src={image} alt={imageAlt} className="object-cover object-top"/>
      </div>
      <div className="p-4 flex flex-col justify-between min-h-[320px]">
        <div>
          <h5 className="text-lg font-bold text-white">{title}</h5>
          <h6 className="text-sm font-bold text-white">{subtitle}</h6>
          <hr className="my-2"></hr>
          <p className="text-sm font-normal text-white pb-8">{description}</p>
        </div>
        <div className="flex gap-4">
          <Link href={externalUrl} rel="noopener noreferrer" target="_blank">
            <Button>Ver sitio</Button>
          </Link>
          {/* <Link href={internalUrl} >
            <Button >Ver más info</Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

import Link from "next/link";
import { Button } from "./ui/button";

export interface CardTypes {
  img: string;
  title: string;
  description: string;
  url: string;
}

const Card = ({ img, title, description, url }: CardTypes) => {
  return (
    <div className="bg-main-700 rounded-lg shadow">
      <a href={url} target="blank">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
        <p className="mb-4 font-normal text-white">{description}</p>
        <div className="flex gap-4">
          <Link href={url}>
            <Button>Ver sitio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

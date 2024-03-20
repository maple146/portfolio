import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export interface CustomLinkTypes {
  url: string;
  text: string;
  size: string;
}

const CustomLink = ({ url, text, size }: CustomLinkTypes) => {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank" className="text-main-100 flex items-center hover:underline">
      <ExternalLinkIcon />
      <p
        className={`${size === "sm" ? "text-sm" : "text-base lg:text-lg"} ml-2`}
      >
        {text}
      </p>
    </Link>
  );
};

export default CustomLink;

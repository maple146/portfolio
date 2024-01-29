import Link from "next/link";

export interface CustomLinkTypes {
  url: string;
  text: string;
}

const CustomLink = ({ url, text }: CustomLinkTypes) => {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <p className="text-main-100 text-base lg:text-lg hover:underline">
        {text}
      </p>
    </Link>
  );
};

export default CustomLink;

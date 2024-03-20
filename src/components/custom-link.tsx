import Link from "next/link";

export interface CustomLinkTypes {
  url: string;
  text: string;
  size: string;
}

const CustomLink = ({ url, text, size }: CustomLinkTypes) => {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <p
        className={`text-main-100 ${
          // Refactorizar usando cva
          size === "sm" ? "text-sm" : "text-base lg:text-lg"
        }  hover:underline`}
      >
        {text}
      </p>
    </Link>
  );
};

export default CustomLink;

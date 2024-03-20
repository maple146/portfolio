import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { cva } from "class-variance-authority";

type fontSize = "sm" | "default";

type LinkVariantsProps = {
  fontSize?: fontSize;
}

type LinkProps = LinkVariantsProps & {
  url: string;
  text: string;
  customClassNames?: string;
  [key: string]: any;
}

type LinkVariantsFunction = (props: LinkVariantsProps) => string;

const LinkVariants: LinkVariantsFunction = cva(
  "text-main-100 flex items-center hover:underline",
  {
    variants: {
      fontSize: {
        sm:
          "text-sm",
        default:
          "text-base lg:text-lg bg-main-500",
      },
    },

    defaultVariants: {
      fontSize: "default",
    },
  }
);

export default function CustomLink({
  url,
  text,
  fontSize,
  customClassNames = "",
  ...props
}: LinkProps): JSX.Element {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank" className={`${LinkVariants({ fontSize })} ${customClassNames}`} {...props}>
      <ExternalLinkIcon />
      <p
        className={`ml-2`}
      >
        {text}
      </p>
    </Link>
  )
}

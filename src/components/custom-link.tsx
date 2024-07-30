import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { LinkProps, LinkVariantsFunction } from "@/types/custom-link-types";

const LinkVariants: LinkVariantsFunction = cva(
  "text-main-700 flex items-center hover:underline hover:text-main-900",
  {
    variants: {
      fontSize: {
        sm:
          "text-sm",
        default:
          "text-sm lg:text-base",
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
      <ExternalLinkIcon size={fontSize === 'sm' ? (16) : (20)} />
      <p
        className={`ml-2`}
      >
        {text}
      </p>
    </Link>
  )
}

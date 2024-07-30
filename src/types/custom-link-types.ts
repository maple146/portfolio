type fontSize = "sm" | "default";

type LinkVariantsProps = {
    fontSize?: fontSize;
}

export type LinkProps = LinkVariantsProps & {
    url: string;
    text: string;
    customClassNames?: string;
    [key: string]: any;
}

export type LinkVariantsFunction = (props: LinkVariantsProps) => string;
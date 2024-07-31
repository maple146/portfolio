interface techStackTypes {
    text: string;
}

interface linksArrayTypes {
    text: string;
    url: string;
}

export interface CardTypes {
    index: number;
    showCards: boolean;
    image: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    externalUrl: string;
    linksArray?: linksArrayTypes[];
    techStack: techStackTypes[];
}
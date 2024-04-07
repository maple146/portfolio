interface LinksTypes {
  text: string;
  externalUrl: string;
}

interface BulletsTypes {
  text: string;
}

interface ParagraphTypes {
  text?: string;
  bullets?: BulletsTypes[];
  links?: LinksTypes[];
}

interface SectionsTypes {
  title: string;
  paragraphs: ParagraphTypes[];
}

export interface AboutTypes {
  title: string;
  sections: SectionsTypes[];
}

interface SkillsTypes {
  category: string;
  items: string;
}

interface SectionsTypes {
  title: string;
  paragraph: string;
  bullets: string[];
  skills: SkillsTypes[];
}

export interface AboutTypes {
  title: string;
  sections: SectionsTypes[];
}

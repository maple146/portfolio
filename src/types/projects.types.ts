interface techStackTypes {
  text: string;
}

interface linksArrayTypes {
  text: string;
  url: string;
}

interface ProjectTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  linksArray?: linksArrayTypes[];
  techStack: techStackTypes[];
}

export interface ProjectsTypes {
  title: string;
  projects: ProjectTypes[];
}

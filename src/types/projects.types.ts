interface techStackTypes {
  text: string;
}

interface ProjectTypes {
  linksArray?: any;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  techStack: techStackTypes[];
}

export interface ProjectsTypes {
  title: string;
  projects: ProjectTypes[];
}

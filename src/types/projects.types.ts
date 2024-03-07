interface ProjectTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
}

export interface ProjectsTypes {
  sectionLink: null | string;
  title: string;
  projects: ProjectTypes[];
}

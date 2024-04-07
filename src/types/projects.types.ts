interface ProjectTypes {
  linksArray?: any;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
}

export interface ProjectsTypes {
  title: string;
  projects: ProjectTypes[];
}

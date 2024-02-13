interface ProjectTypes {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  internalUrl: string;
}

export interface ProjectsTypes {
  title: string;
  projects: ProjectTypes[];
}

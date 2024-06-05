import Card from "@/components/card";
import Title from "@/components/title";
import { ProjectsTypes } from "@/types/projects.types";

export default function Projects({
  title,
  projects,
}: ProjectsTypes) {
  return (
    <div className="flex flex-col container py-8 lg:py-12 gap-4 lg:gap-12">
      <div className="flex justify-center mb-2 lg:mb-4">
        <Title text={title} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-auto gap-4 md:gap-8">
        {projects.map((project) => (
          <Card
            // Pasarle solo props y destructurar adentro
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
            imageAlt={project.imageAlt}
            externalUrl={project.externalUrl}
            linksArray={project.linksArray}
          />
        ))}
      </div>
    </div>
  );
}

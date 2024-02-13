import Card from "@/components/card";
import Title from "@/components/title";
import { ProjectsTypes } from "@/types/projects.types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects({
  title,
  projects,
  sectionLink,
}: ProjectsTypes) {
  return (
    <div className="flex flex-col container py-8 lg:py-12 gap-4 lg:gap-12">
      <div className="flex justify-center">
        <Title text={title} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-4 lg:gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
            imageAlt={project.imageAlt}
            externalUrl={project.externalUrl}
            internalUrl={project.internalUrl}
          />
        ))}
      </div>
      {sectionLink && (
        <div className="flex justify-center">
          <Link href={sectionLink}>
            <Button>Ver más proyectos</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

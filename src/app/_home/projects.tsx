"use client"

import Card from "@/components/card";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ProjectsTypes } from "@/types/projects.types";
import { useState } from "react";

export default function Projects({
  title,
  projects,
  showAllProjectsButton,
  viewSiteButton,
  privateSiteButton
}: ProjectsTypes) {
  const [showCards, setShowCards] = useState(false)
  return (
    <div className="flex flex-col container py-8 lg:py-12 gap-4 lg:gap-12">
      <div className="flex justify-center mb-2 lg:mb-4">
        <Title text={title} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-auto gap-4 md:gap-8 justify-items-center">
        {projects.map((project, index) => (
          <Card
            index={index}
            showCards={showCards}
            viewSiteButton={viewSiteButton}
            privateSiteButton={privateSiteButton}
            key={project.title}
            {...project}
          />
        ))}
        {
          !showCards && (
            <div className="col-span-2">
              <Button onClick={() => setShowCards(true)}>
                {showAllProjectsButton}
              </Button>
            </div>
          )
        }
      </div>
    </div>
  );
}

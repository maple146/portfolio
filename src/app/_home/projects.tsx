"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showCards, setShowCards] = useState(false);

  return (
    <section ref={ref} className="flex flex-col container py-8 lg:py-12 gap-4 lg:gap-12">
      <div
        className="flex justify-center mb-2 lg:mb-4"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        <Title text={title} />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-auto gap-4 md:gap-8 justify-items-center"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}
      >
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
    </section>
  );
}

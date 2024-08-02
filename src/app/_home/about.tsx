"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Title from "@/components/title";
import { AboutTypes } from "@/types/about.types";

export default function About({ title, sections }: AboutTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="container flex flex-col py-8 md:py-16 gap-8 md:gap-12">
      <div
        className="flex justify-center mb-2 md:mb-4"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        <Title text={title} />
      </div>
      {
        sections.map((section, index) => (
          <div
            key={section.title}
            className="flex flex-col"
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`
            }}
          >
            <Title text={section.title} variant={"fullWidth"} />
            <div className='flex flex-col gap-4'>
              <p className="text-base md:text-lg">
                {section.paragraph}
              </p>
              {
                section.bullets && (
                  <ul className="list-disc list-inside text-sm leading-6 md:text-base md:leading-8">
                    {
                      section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))
                    }
                  </ul>
                )
              }
              {
                section.skills && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {
                      section.skills.map((skill) => (
                        <div key={skill.category} className="flex flex-col gap-2">
                          <p className="text-sm md:text-base">{skill.category}</p>
                          <p className="text-xs md:text-sm text-gray">{skill.items}</p>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </div>
        ))
      }
    </section>
  );
}

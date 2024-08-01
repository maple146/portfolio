"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Title from "@/components/title";
import { AboutTypes } from "@/types/about.types";

export default function About({ title, sections }: AboutTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="container grid grid-cols-1 py-8 lg:py-12 gap-4 lg:gap-12">
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
              <p className="text-base lg:text-lg">
                {section.paragraph}
              </p>
              {
                section.bullets && (
                  <ul className="list-disc list-inside text-sm leading-6 lg:text-base lg:leading-8">
                    {
                      section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
          </div>
        ))
      }
    </section>
  );
}

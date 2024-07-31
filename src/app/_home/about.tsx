import Title from "@/components/title";
import { AboutTypes } from "@/types/about.types";

export default function About({ title, sections }: AboutTypes) {
  return (
    <div className="container grid grid-cols-1 py-8 lg:py-12 gap-4 lg:gap-12">
      <div className="flex justify-center mb-2 lg:mb-4">
        <Title text={title} />
      </div>
      {
        sections.map((section) => (
          <div key={section.title} className="flex flex-col">
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
    </div >
  );
}

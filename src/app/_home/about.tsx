import CustomLink from "@/components/custom-link";
import Title from "@/components/title";
import { AboutTypes } from "@/types/about.types";

export default function About({ title, sections }: AboutTypes) {
  return (
    <div className="container grid grid-cols-1 py-8 lg:py-12 gap-4 lg:gap-12">
      <div className="col-span-full flex justify-center mb-2 lg:mb-4">
        <Title text={title} />
      </div>
      {
        sections.map((section) => (
          <div className="flex flex-col" key={section.title}>
            <Title text={section.title} variant={"fullWidth"} />
            <div className='flex flex-col gap-4'>
              {
                section?.paragraphs?.map((paragraph => (
                  <p key={paragraph.text} className="text-base lg:text-lg">
                    {paragraph.text}
                  </p>
                )))
              }
            </div>
            <ul className="list-disc list-inside text-sm leading-6 lg:text-base lg:leading-8">
              {
                section?.paragraphs?.map(paragraph => (
                  paragraph?.bullets?.map(bullet => (
                    <li key={bullet.text}>{bullet.text}</li>
                  ))
                ))
              }
            </ul>
            <div className='flex flex-col gap-2' >
              {
                section?.paragraphs?.map((paragraph => (
                  paragraph?.links?.map(link => (
                    <CustomLink
                      key={link.text}
                      url={link.externalUrl}
                      text={link.text}
                    />
                  ))
                )))
              }
            </div>
          </div>
        ))
      }
    </div >
  );
}

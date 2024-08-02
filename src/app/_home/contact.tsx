"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ContactTypes } from "@/types/contact.types";

export default function Contact({ title, text, buttons }: ContactTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="container min-h-[480px] py-8 md:py-16"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      <div className="flex flex-col gap-8 md:gap-12 items-center justify-center h-full text-center">
        <Title text={title} />
        <div className="
          max-w-[700px] relative w-full rounded-lg p-4 md:px-12 md:py-8
          border-2 border-[rgba(46,187,144,0.3)] bg-gradient-to-tl from-[rgba(46,187,144,0.15)] to-[rgba(0,0,0,0.05)]
        ">
          <p className="text-base md:text-base">
            {text}
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          {
            buttons.map((button) => (
              <Button key={button.buttonText} href={button.externalUrl}>{button.buttonText}</Button>
            ))
          }
        </div>
      </div>
    </section>
  );
}

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
      className="h-[480px]"
      style={{
        transform: isInView ? "none" : "translateY(0px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <Title text={title} />
        <div className="
          max-w-[700px] relative w-full rounded-lg p-4 lg:px-12 lg:py-8 my-4 lg:my-8
          border-2 border-[rgba(46,187,144,0.3)] bg-gradient-to-tl from-[rgba(46,187,144,0.15)] to-[rgba(0,0,0,0.05)]
        ">
          <p className="text-base lg:text-base">
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

"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeaderTypes } from "@/types/header.types";

export default function Header({ title, subtitle, buttons }: HeaderTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="container mt-16 pt-16 pb-8 md:pt-32 md:pb-16">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1
          className="text-xl md:text-xl-4 mb-4 font-bold"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
        >
          {title}
        </h1>
        <h2
          className="text-lg md:text-xl-3 mb-8 font-semibold"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        >
          {subtitle}
        </h2>
        <div
          className="flex gap-4 flex-col sm:flex-row"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
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

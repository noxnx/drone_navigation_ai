"use client";
import { useInView } from "motion/react";
import { useRef } from "react";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span className={isInView ? "text-slidein" : ""}>{children}</span>
    </section>
  );
}

export default Section;

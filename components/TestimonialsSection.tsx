"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Marko Stojkovic",
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/8d639d1e-d912-4423-9bdb-6890242eea15",
    position: "lg:left-[7%] lg:top-[14%] lg:-rotate-[6.85deg]",
    y: [220, -80],
  },
  {
    name: "Lukas Weber",
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/bb9e63c1-8c71-4c81-a3f3-bc4fcec4e4ee",
    position: "lg:left-[47%] lg:top-[25%] lg:rotate-[2.9deg]",
    y: [0, 260],
  },
  {
    name: "Sarah Jenkins",
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/95a3b005-fffe-4cca-bbc5-ab1fb8ea7257",
    position: "lg:left-[22%] lg:top-[56%] lg:rotate-[2.23deg]",
    y: [180, -120],
  },
  {
    name: "Sofia Martinez",
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/8b445955-2cdb-4afd-95ce-3d1a7619af95",
    position: "lg:right-[6%] lg:top-[55%] lg:-rotate-[4.15deg]",
    y: [40, 300],
  },
];

function TestimonialCard({
  testimonial,
  scrollYProgress,
}: {
  testimonial: typeof testimonials[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], testimonial.y);

  return (
    <motion.article
      style={{ y }}
      className={`rounded border border-[#ddd] bg-[#f1f1f1] p-6 lg:absolute lg:w-[353px] ${testimonial.position}`}
    >
      <img
        src={testimonial.logo}
        alt=""
        className="mb-4 h-8 w-auto max-w-[145px] object-contain object-left"
      />
      <p className="m-0 text-lg leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {testimonial.quote}
      </p>
      <p className="m-0 mt-4 font-[family-name:var(--font-display)] text-base font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
        {testimonial.name}
      </p>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white px-5 py-16 sm:px-8 lg:min-h-[987px] lg:py-[120px]"
    >
      <h2 className="relative z-0 m-0 text-center font-[family-name:var(--font-display)] text-[clamp(58px,13.75vw,198px)] font-medium capitalize leading-[1.1] tracking-[-0.07em] text-black">
        Testimonials
      </h2>

      <div className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2 lg:absolute lg:inset-0 lg:mt-0 lg:block">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.name}
            testimonial={t}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

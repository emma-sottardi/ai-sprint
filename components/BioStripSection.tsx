"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function Line({
  progress,
  range,
  className,
  style,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.08, 1]);
  return (
    <motion.div style={{ opacity, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

export function BioStripSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end 70%"],
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white px-8"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="flex flex-col gap-6 w-full">

        {/* Header: label + rule */}
        <Line progress={scrollYProgress} range={[0, 0.25]} className="flex flex-col gap-3 items-end w-full">
          <span className="font-mono text-sm text-[#1f1f1f] uppercase tracking-wide">
            [ 8+ years in industry ]
          </span>
          <div className="w-full border-t border-[#1f1f1f]" />
        </Line>

        {/* Staggered type lines */}
        <div className="flex flex-col w-full" style={{ gap: "8px" }}>

          <Line progress={scrollYProgress} range={[0.15, 0.4]} className="flex items-start gap-3 uppercase">
            <p className="m-0 p-0 font-[family-name:var(--font-inter-light)] font-light tracking-[-0.08em] whitespace-nowrap text-black"
               style={{ fontSize: "clamp(40px, 6.67vw, 96px)", lineHeight: "0.84" }}>
              A creative director&nbsp;&nbsp;&nbsp;/
            </p>
            <span className="font-mono text-sm text-[#1f1f1f] mt-1">001</span>
          </Line>

          <Line progress={scrollYProgress} range={[0.25, 0.5]} style={{ paddingLeft: "15.6%" }} className="w-full">
            <p className="m-0 p-0 font-[family-name:var(--font-inter-light)] font-light tracking-[-0.08em] uppercase whitespace-nowrap text-black"
               style={{ fontSize: "clamp(40px, 6.67vw, 96px)", lineHeight: "0.84" }}>
              Photographer
            </p>
          </Line>

          <Line progress={scrollYProgress} range={[0.35, 0.6]} style={{ paddingLeft: "44.3%" }} className="w-full">
            <p className="m-0 p-0 font-[family-name:var(--font-inter-light)] font-light tracking-[-0.08em] uppercase whitespace-nowrap text-black"
               style={{ fontSize: "clamp(40px, 6.67vw, 96px)", lineHeight: "0.84" }}>
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] italic normal-case">&amp;</span>
              {" "}raised
            </p>
          </Line>

          <Line progress={scrollYProgress} range={[0.45, 0.7]} className="w-full">
            <p className="m-0 p-0 font-[family-name:var(--font-inter-light)] font-light tracking-[-0.08em] uppercase whitespace-nowrap text-black"
               style={{ fontSize: "clamp(40px, 6.67vw, 96px)", lineHeight: "0.84" }}>
              on the south side
            </p>
          </Line>

          <Line progress={scrollYProgress} range={[0.55, 0.8]} style={{ paddingLeft: "44%" }} className="relative w-full">
            <p className="m-0 p-0 font-[family-name:var(--font-inter-light)] font-light tracking-[-0.08em] uppercase whitespace-nowrap text-black"
               style={{ fontSize: "clamp(40px, 6.67vw, 96px)", lineHeight: "0.84" }}>
              of chicago.
            </p>
            <span className="absolute right-0 top-[26px] font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">
              [ creative freelancer ]
            </span>
          </Line>

        </div>
      </div>
    </section>
  );
}

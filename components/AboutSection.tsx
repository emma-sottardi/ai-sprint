"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fallbackPhoto =
  "https://www.figma.com/api/mcp/asset/0f876f44-0b66-4735-b435-8d3dbe27c6e3";

const fallbackBio =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

type AboutProps = {
  about?: { bio: string | null; photoUrl: string | null } | null;
};

export function AboutSection({ about }: AboutProps) {
  const photo = about?.photoUrl ?? fallbackPhoto;
  const bio = about?.bio ?? fallbackBio;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "center 20%"],
  });

  const curtainX = useTransform(scrollYProgress, [0, 0.75], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="w-full bg-white px-8"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Outer: About label on the left, content on the right */}
      <div className="flex items-start justify-between">

        {/* Left div: just the [About] label */}
        <div>
          <span className="font-mono text-sm uppercase text-[#1f1f1f]">
            [ About ]
          </span>
        </div>

        {/* Right div: paragraph + 002 label + image, flex with 32px gap */}
        <div className="flex items-end gap-8">

          {/* Bracketed paragraph */}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-col justify-between shrink-0 w-4">
              <div className="w-4 h-4 border-t border-l border-[#1f1f1f]" />
              <div className="w-4 h-4 border-b border-l border-[#1f1f1f]" />
            </div>
            <p className="m-0 w-[393px] py-3 text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
              {bio}
            </p>
            <div className="flex flex-col justify-between items-end shrink-0 w-4">
              <div className="w-4 h-4 border-t border-r border-[#1f1f1f]" />
              <div className="w-4 h-4 border-b border-r border-[#1f1f1f]" />
            </div>
          </div>

          {/* 002 number label */}
          <span className="self-start font-mono text-sm text-[#1f1f1f]">002</span>

          {/* Image with black curtain reveal */}
          <div className="relative flex overflow-hidden">
            <img
              src={photo}
              alt="Portrait"
              className="w-full"
            />
            <motion.div
              className="absolute inset-0 bg-black"
              style={{ x: curtainX }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

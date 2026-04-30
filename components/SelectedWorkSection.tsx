"use client";

import { motion } from "framer-motion";

const ease = [0.33, 1, 0.68, 1];

const workArrow =
  "https://www.figma.com/api/mcp/asset/432fe2d3-e798-4459-b9d8-bcfab287c29d";

const selectedWorks = [
  { title: "Surfers Paradise",   image: "https://www.figma.com/api/mcp/asset/e5f7002f-be5b-4597-b736-262f3defff59", imageHeight: "lg:h-[744px]" },
  { title: "Cyberpunk Caffe",    image: "https://www.figma.com/api/mcp/asset/ad70ac11-fb1a-44bf-9710-4005169d2d83", imageHeight: "lg:h-[699px]" },
  { title: "Agency 976",         image: "https://www.figma.com/api/mcp/asset/c9be02a6-9f64-4f1b-b3ed-27fb11940bc4", imageHeight: "lg:h-[699px]" },
  { title: "Minimal Playground", image: "https://www.figma.com/api/mcp/asset/76374325-56a0-4a80-b271-8afe97829d5f", imageHeight: "lg:h-[744px]" },
];

function WorkCard({ project }: { project: typeof selectedWorks[0] }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="flex cursor-pointer flex-col gap-[10px]"
    >
      {/* Image — scales up on hover, clipped by overflow-hidden */}
      <div className={`relative h-[390px] w-full overflow-hidden ${project.imageHeight}`}>
        <motion.img
          src={project.image}
          alt=""
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.55, ease }}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/30 px-2 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-[#111] backdrop-blur-[10px]">
            Social Media
          </span>
          <span className="rounded-full bg-white/30 px-2 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-[#111] backdrop-blur-[10px]">
            Photography
          </span>
        </div>
      </div>

      {/* Title + arrow */}
      <div className="flex items-start justify-between gap-4">
        <motion.h3
          variants={{ rest: { fontStyle: "normal" }, hover: { fontStyle: "italic" } }}
          className="m-0 font-[family-name:var(--font-display)] text-[clamp(28px,2.5vw,36px)] font-black uppercase leading-[1.1] tracking-[-0.04em] text-black"
        >
          {project.title}
        </motion.h3>

        {/* Arrow: -90 (pointing up-right) → 90 (pointing down) */}
        <motion.img
          src={workArrow}
          alt=""
          variants={{ rest: { rotate: -90 }, hover: { rotate: 0 } }}
          transition={{ duration: 0.4, ease }}
          className="mt-1 h-8 w-8 shrink-0"
        />
      </div>
    </motion.article>
  );
}

export function SelectedWorkSection() {
  return (
    <section id="projects" className="w-full bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="flex w-full flex-col gap-12 lg:gap-[61px]">

        {/* Section header */}
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-[10px]">
            <h2 className="m-0 font-[family-name:var(--font-inter-light)] text-[clamp(54px,6.67vw,96px)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black">
              Selected<br />Work
            </h2>
            <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">004</span>
          </div>
          <span className="hidden origin-center -rotate-90 whitespace-nowrap font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] lg:block">
            [ portfolio ]
          </span>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">

          {/* Left column */}
          <div className="flex flex-col gap-12 lg:gap-[123px]">
            {selectedWorks.slice(0, 2).map((p) => (
              <WorkCard key={p.title} project={p} />
            ))}

            {/* Bracketed CTA */}
            <div className="hidden w-full max-w-[465px] items-stretch gap-3 lg:flex">
              <div className="flex w-6 shrink-0 flex-col justify-between">
                <div className="h-4 w-4 border-l border-t border-[#1f1f1f]" />
                <div className="h-4 w-4 border-b border-l border-[#1f1f1f]" />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center gap-[10px] py-3">
                <p className="m-0 text-sm italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                  Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
                </p>
                <button className="cursor-pointer rounded-full bg-black px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-80">
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex w-6 shrink-0 flex-col items-end justify-between">
                <div className="h-4 w-4 border-r border-t border-[#1f1f1f]" />
                <div className="h-4 w-4 border-b border-r border-[#1f1f1f]" />
              </div>
            </div>
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-12 lg:gap-[117px] lg:pt-60">
            {selectedWorks.slice(2).map((p) => (
              <WorkCard key={p.title} project={p} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

const projects = [
  {
    title: "Surfers Paradise",
    imageUrl: "https://www.figma.com/api/mcp/asset/e5f7002f-be5b-4597-b736-262f3defff59",
    tags: ["Social Media", "Photography"],
    imageHeight: "lg:h-[744px]",
  },
  {
    title: "Cyberpunk Caffe",
    imageUrl: "https://www.figma.com/api/mcp/asset/ad70ac11-fb1a-44bf-9710-4005169d2d83",
    tags: ["Brand Identity", "Web Design"],
    imageHeight: "lg:h-[699px]",
  },
  {
    title: "Agency 976",
    imageUrl: "https://www.figma.com/api/mcp/asset/c9be02a6-9f64-4f1b-b3ed-27fb11940bc4",
    tags: ["Web Design", "Marketing"],
    imageHeight: "lg:h-[699px]",
  },
  {
    title: "Minimal Playground",
    imageUrl: "https://www.figma.com/api/mcp/asset/76374325-56a0-4a80-b271-8afe97829d5f",
    tags: ["Brand Identity", "Photography"],
    imageHeight: "lg:h-[744px]",
  },
];

function WorkCard({
  project,
}: {
  project: { title: string; imageUrl: string; tags: string[]; imageHeight: string };
}) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="flex cursor-pointer flex-col gap-[10px]"
    >
      {/* Image */}
      <div className={`relative h-[390px] w-full overflow-hidden ${project.imageHeight}`}>
        <motion.img
          src={project.imageUrl}
          alt=""
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.55, ease }}
          className="h-full w-full object-cover"
        />
        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/30 px-2 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-[#111] backdrop-blur-[10px]"
            >
              {tag}
            </span>
          ))}
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

        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={{ rest: { rotate: -90 }, hover: { rotate: 0 } }}
          transition={{ duration: 0.4, ease }}
          className="mt-1 shrink-0"
        >
          <path
            d="M8 24L24 8M24 8H12M24 8V20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <SiteNav />

      {/* ── Hero (white) ── */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-[80px]">
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm uppercase text-[#1f1f1f]">[ Portfolio ]</span>
          <span className="font-mono text-sm text-[#1f1f1f]">004</span>
        </div>
        <div className="mt-6 flex items-start gap-[10px]">
          <h1
            className="m-0 font-[family-name:var(--font-inter-light)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black"
            style={{ fontSize: "clamp(54px,6.67vw,96px)" }}
          >
            Selected
            <br />
            Work
          </h1>
        </div>
        <p className="mt-6 max-w-[400px] text-sm leading-[1.5] tracking-[-0.04em] text-[#1f1f1f]">
          A selection of projects across brand identity, web design, marketing, and photography — built for brands that want to be remembered.
        </p>
      </section>

      {/* ── Project grid (white) ── */}
      <section className="w-full bg-white px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">

          {/* Left column */}
          <div className="flex flex-col gap-12 lg:gap-[123px]">
            {projects.slice(0, 2).map((p) => (
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
                <Link
                  href="/#contact"
                  className="cursor-pointer rounded-full bg-black px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
                >
                  Let&apos;s talk
                </Link>
              </div>
              <div className="flex w-6 shrink-0 flex-col items-end justify-between">
                <div className="h-4 w-4 border-r border-t border-[#1f1f1f]" />
                <div className="h-4 w-4 border-b border-r border-[#1f1f1f]" />
              </div>
            </div>
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-12 lg:gap-[117px] lg:pt-60">
            {projects.slice(2).map((p) => (
              <WorkCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 flex items-stretch gap-3 lg:hidden">
          <div className="flex w-5 shrink-0 flex-col justify-between">
            <div className="h-4 w-4 border-l border-t border-[#1f1f1f]" />
            <div className="h-4 w-4 border-b border-l border-[#1f1f1f]" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 py-3">
            <p className="m-0 text-sm italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
              Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
            </p>
            <Link
              href="/#contact"
              className="cursor-pointer rounded-full bg-black px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
            </Link>
          </div>
          <div className="flex w-5 shrink-0 flex-col items-end justify-between">
            <div className="h-4 w-4 border-r border-t border-[#1f1f1f]" />
            <div className="h-4 w-4 border-b border-r border-[#1f1f1f]" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

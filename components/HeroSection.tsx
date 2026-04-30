"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const heroImage =
  "https://www.figma.com/api/mcp/asset/e58c2f18-af9f-4194-8b8d-2b9c932f00cb";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const harveyX    = useTransform(scrollYProgress, [0, 0.6], ["0%", "-55%"]);
  const specterX   = useTransform(scrollYProgress, [0, 0.6], ["0%",  "55%"]);
  const labelX     = useTransform(scrollYProgress, [0, 0.6], ["0%", "-65%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative isolate w-full overflow-hidden"
      style={{ minHeight: "847px" }}
    >
      {/* Background photo — scales on scroll */}
      <motion.img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: imageScale }}
      />

      {/* Progressive gradient blur toward the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 backdrop-blur-[1px]"  style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-0 backdrop-blur-[2px]"  style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 80%)",  maskImage: "linear-gradient(to top, black 0%, transparent 80%)" }} />
        <div className="absolute inset-0 backdrop-blur-[4px]"  style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 60%)",  maskImage: "linear-gradient(to top, black 0%, transparent 60%)" }} />
        <div className="absolute inset-0 backdrop-blur-[8px]"  style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 40%)",  maskImage: "linear-gradient(to top, black 0%, transparent 40%)" }} />
        <div className="absolute inset-0 backdrop-blur-[12px]" style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 25%)",  maskImage: "linear-gradient(to top, black 0%, transparent 25%)" }} />
        <div className="absolute inset-0 backdrop-blur-[20px]" style={{ WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 12%)",  maskImage: "linear-gradient(to top, black 0%, transparent 12%)" }} />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[847px] flex-col items-center gap-[240px] px-8">

        {/* Navbar */}
        <nav className="flex w-full items-center justify-between py-6">
          <span className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.04em] text-black">
            H.Studio
          </span>

          <div className="flex items-center gap-14">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.04em] text-black transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="cursor-pointer rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80">
            Let&apos;s talk
          </button>
        </nav>

        {/* Headline + description */}
        <div className="flex w-full flex-col">

          {/* Label + name */}
          <div className="flex flex-col overflow-hidden">
            <motion.span
              style={{ x: labelX }}
              className="font-mono text-sm uppercase leading-[1.1] text-white mix-blend-overlay mb-1"
            >
              [ Hello i&apos;m ]
            </motion.span>

            <h1
              className="relative z-10 font-[family-name:var(--font-display)] capitalize font-medium leading-[1.1] text-white mix-blend-overlay tracking-[-0.07em] -mt-1 whitespace-nowrap"
              style={{ fontSize: "clamp(80px, 13.75vw, 198px)" }}
            >
              <motion.span style={{ x: harveyX }} className="inline-block">
                Harvey
              </motion.span>
              &nbsp;&nbsp;&nbsp;
              <motion.span style={{ x: specterX }} className="inline-block">
                Specter
              </motion.span>
            </h1>
          </div>

          {/* Description + CTA — right-aligned */}
          <div className="flex justify-end">
            <div className="flex w-[294px] flex-col gap-[17px]">
              <p className="text-sm font-bold italic uppercase leading-[1.1] tracking-[-0.04em] text-[#1f1f1f]">
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>
                {" "}creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal">award winning</span>
                {" "}design and art group specializing in branding, web design
                and engineering.
              </p>
              <button className="self-start cursor-pointer rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80">
                Let&apos;s talk
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

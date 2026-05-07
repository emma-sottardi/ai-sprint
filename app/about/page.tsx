"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const portraitImage =
  "https://www.figma.com/api/mcp/asset/0f876f44-0b66-4735-b435-8d3dbe27c6e3";

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

const stats = [
  { value: "8+",  label: "Years" },
  { value: "120+", label: "Projects" },
  { value: "15+", label: "Awards" },
  { value: "3",   label: "Studios" },
];

const values = [
  {
    title: "Intentional",
    desc: "Every decision — from palette to typeface to spacing — is made with purpose. Nothing is arbitrary.",
  },
  {
    title: "Collaborative",
    desc: "The best work happens when client and studio think together. We listen before we design.",
  },
  {
    title: "Considered",
    desc: "We slow down where others rush. A considered approach produces work that endures beyond trends.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <SiteNav />

      {/* ── Hero (black) ── */}
      <section className="relative w-full overflow-hidden bg-black px-5 py-16 sm:px-8 lg:py-[120px]">
        {/* Label */}
        <span className="mb-12 block font-mono text-sm uppercase text-white/60 lg:mb-[72px]">
          [ About ]
        </span>

        {/* Name */}
        <div className="flex flex-col overflow-hidden">
          <h1
            className="m-0 font-[family-name:var(--font-display)] font-semibold capitalize leading-[0.9] tracking-[-0.06em] text-white"
            style={{ fontSize: "clamp(72px,10vw,160px)" }}
          >
            Harvey
            <br />
            <em>Specter</em>
          </h1>
        </div>

        {/* Bio strip */}
        <p className="mt-8 font-mono text-sm uppercase leading-[1.3] tracking-[-0.02em] text-white/50 lg:mt-12">
          Creative Director&nbsp;/&nbsp;Photographer&nbsp;/&nbsp;Born &amp; raised on the south side of Chicago.
        </p>
      </section>

      {/* ── Bio + Photo (white) ── */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">

          {/* Left */}
          <div className="flex flex-col gap-8 lg:flex-1">
            <span className="font-mono text-sm text-[#1f1f1f]">[ 001 ]</span>
            <h2
              className="m-0 font-[family-name:var(--font-inter-light)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black"
              style={{ fontSize: "clamp(40px,5.5vw,80px)" }}
            >
              A creative director
              <br />
              based in Chicago
            </h2>
            <div className="flex flex-col gap-4">
              <p className="m-0 max-w-[480px] text-sm leading-[1.5] tracking-[-0.04em] text-[#1f1f1f]">
                With over eight years in the creative industry, I&apos;ve built a practice rooted in the belief that design should serve a purpose beyond aesthetics. Every project is an opportunity to solve a real problem in a way that also happens to look beautiful.
              </p>
              <p className="m-0 max-w-[480px] text-sm leading-[1.5] tracking-[-0.04em] text-[#1f1f1f]">
                I founded H.Studio after leading creative teams at two Chicago agencies and one international studio. Today we work with founders, brands, and cultural institutions who want work that lasts — not just work that launches.
              </p>
            </div>
          </div>

          {/* Right — portrait */}
          <motion.div
            className="w-full overflow-hidden lg:w-[420px] lg:shrink-0"
            whileHover="hover"
            initial="rest"
          >
            <motion.img
              src={portraitImage}
              alt="Harvey Specter portrait"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.55, ease }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar (white, border-t) ── */}
      <section className="w-full border-t border-black bg-white px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-display)] text-[clamp(48px,5vw,72px)] font-semibold leading-none tracking-[-0.06em] text-black">
                {value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.06em] text-[#1f1f1f]/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Philosophy (black) ── */}
      <section className="w-full bg-black px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* Left */}
          <div className="flex flex-col gap-8 lg:w-[420px] lg:shrink-0">
            <span className="font-mono text-sm uppercase text-white/60">[ Philosophy ]</span>
            <blockquote className="m-0">
              <p
                className="m-0 font-[family-name:var(--font-inter-light)] font-light italic leading-[0.92] tracking-[-0.06em] text-white"
                style={{ fontSize: "clamp(36px,4.5vw,64px)" }}
              >
                &ldquo;Great design doesn&apos;t announce itself. It just works.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right — values */}
          <div className="flex flex-1 flex-col">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 border-t border-white/20 py-6 last:border-b last:border-white/20"
              >
                <h3 className="m-0 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-[-0.04em] text-white">
                  {title}
                </h3>
                <p className="m-0 text-sm leading-[1.4] tracking-[-0.04em] text-white/50">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (white) ── */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col items-start gap-8">
          <h2
            className="m-0 font-[family-name:var(--font-inter-light)] font-light italic leading-[0.88] tracking-[-0.08em] text-black"
            style={{ fontSize: "clamp(48px,6.67vw,96px)" }}
          >
            Let&apos;s build something great.
          </h2>
          <Link
            href="/#contact"
            className="rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
          >
            Start a project
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

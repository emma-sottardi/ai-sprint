"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const heroImage = "/images/hero-bg.jpg";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "/news" },
  { label: "Contact",  href: "/#contact" },
];

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Desktop links */}
          <div className="hidden items-center gap-14 lg:flex">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.04em] text-black transition-opacity hover:opacity-60"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/#contact"
            className="hidden cursor-pointer rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80 lg:block"
          >
            Let&apos;s talk
          </Link>

          {/* Hamburger (tablet + mobile) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col items-end gap-[6px] lg:hidden"
          >
            <span className="block h-[2px] w-6 bg-black" />
            <span className="block h-[2px] w-4 bg-black" />
            <span className="block h-[2px] w-6 bg-black" />
          </button>
        </nav>

        {/* Headline + description */}
        <div className="flex w-full flex-col">

          {/* Label + name */}
          <div className="flex flex-col items-center overflow-hidden">
            <motion.span
              style={{ x: labelX }}
              className="font-mono text-sm uppercase leading-[1.1] text-white mix-blend-overlay mb-1"
            >
              [ Hello i&apos;m ]
            </motion.span>

            <h1
              className="relative z-10 font-[family-name:var(--font-display)] capitalize font-medium leading-[1.1] text-white mix-blend-overlay tracking-[-0.07em] -mt-1 whitespace-nowrap"
              style={{ fontSize: "clamp(40px, 11vw, 165px)" }}
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
              <Link
                href="/#contact"
                className="self-start cursor-pointer rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile / tablet menu drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-screen w-4/5 max-w-sm flex-col bg-black px-8 py-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease }}
            >
              {/* Top row: logo + close */}
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.04em] text-white">
                  H.Studio
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="mt-16 flex flex-col">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.12 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex border-b border-white/10 py-5 font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-[-0.04em] text-white transition-opacity hover:opacity-60"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.45 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block rounded-full border border-white px-5 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

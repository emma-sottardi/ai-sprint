"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

const services = [
  {
    number: "1",
    title: "Brand Discovery",
    description:
      "We dig into what makes your business distinct — its personality, its audience, and the story only you can tell. The result is a brand identity that attracts the right people without trying to be everything to everyone.",
    imageUrl: "https://www.figma.com/api/mcp/asset/f429f7f5-3474-41bd-903a-de6beeff5bd7",
  },
  {
    number: "2",
    title: "Web Design & Dev",
    description:
      "From wireframe to live site, we craft digital experiences that convert visitors into clients. Performance, accessibility, and editorial craft sit at the center of everything we build.",
    imageUrl: "https://www.figma.com/api/mcp/asset/19bbc217-4922-421e-bd2e-86cba461f7d6",
  },
  {
    number: "3",
    title: "Marketing",
    description:
      "Strategy-led campaigns built around your actual audience. We combine content, paid media, and positioning to drive measurable growth — not vanity metrics.",
    imageUrl: "https://www.figma.com/api/mcp/asset/b135c419-deb0-4bef-a8a8-f2984cd4ee8c",
  },
  {
    number: "4",
    title: "Photography",
    description:
      "Commercial photography that stops the scroll. We direct, shoot, and edit work made to live on your site, in print, and across social — consistent with your brand at every touchpoint.",
    imageUrl: "https://www.figma.com/api/mcp/asset/3922b531-5dda-4581-b6fe-99b8dc221507",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by listening — goals, constraints, audience, and ambition — before a single pixel is moved.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "From research comes direction: a clear plan for what we&apos;re building, why, and how we&apos;ll measure success.",
  },
  {
    num: "03",
    title: "Craft",
    desc: "Design and build happen in close collaboration. You review, respond, and shape the work as it evolves.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We ship, measure, and refine. Launch isn&apos;t the end — it&apos;s when the real feedback begins.",
  },
];

const rowClass =
  "grid gap-5 border-t border-white/20 py-4 last:border-b last:border-white/20 sm:min-h-[184px] sm:grid-cols-[minmax(260px,1fr)_minmax(260px,0.55fr)_151px] sm:gap-6 sm:py-[9px] lg:grid-cols-[minmax(360px,1fr)_minmax(360px,0.52fr)_151px]";

function ServiceRow({
  s,
}: {
  s: { number: string; title: string; description: string; imageUrl: string };
}) {
  return (
    <motion.article whileHover="hover" initial="rest" className={`${rowClass} cursor-pointer`}>
      <div>
        <span className="mb-6 block font-mono text-sm leading-none text-white sm:mb-7">
          [ {s.number} ]
        </span>
        <div className="relative inline-block">
          <h3 className="m-0 font-[family-name:var(--font-display)] text-[clamp(26px,2.6vw,42px)] font-bold uppercase italic leading-none tracking-[-0.08em] text-white">
            {s.title}
          </h3>
          <motion.div
            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
            transition={{ duration: 0.35, ease }}
            className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-white"
          />
        </div>
      </div>
      <motion.p
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="m-0 max-w-[450px] text-sm leading-[1.3] tracking-[-0.04em] text-white sm:pt-[30px]"
      >
        {s.description}
      </motion.p>
      <motion.img
        src={s.imageUrl}
        alt=""
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="h-[151px] w-[151px] object-cover sm:justify-self-end"
      />
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <SiteNav />

      {/* ── Hero (white) ── */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm uppercase text-[#1f1f1f]">[ Services ]</span>
          <div className="mb-8 grid items-start gap-6 lg:grid-cols-[minmax(120px,0.55fr)_minmax(360px,1fr)]">
            <p
              className="m-0 font-[family-name:var(--font-inter-light)] font-light leading-none tracking-[-0.06em] text-black"
              style={{ fontSize: "clamp(76px,9vw,136px)" }}
            >
              [4]
            </p>
            <h1
              className="m-0 justify-self-start font-[family-name:var(--font-inter-light)] font-light uppercase leading-none tracking-[-0.065em] text-black lg:justify-self-end"
              style={{ fontSize: "clamp(56px,7.4vw,136px)" }}
            >
              Deliverables
            </h1>
          </div>
          <p className="m-0 max-w-[480px] text-sm leading-[1.5] tracking-[-0.04em] text-[#1f1f1f]">
            Four focused disciplines — brand, web, marketing, and photography — delivered as a cohesive whole or individually, depending on where you are in your journey.
          </p>
        </div>
      </section>

      {/* ── Service list (black) ── */}
      <section className="w-full bg-black px-5 py-16 sm:px-8 lg:py-[78px]">
        <div className="flex flex-col">
          {services.map((s) => (
            <ServiceRow key={s.number} s={s} />
          ))}
        </div>
      </section>

      {/* ── Process (white) ── */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col gap-12">
          <span className="font-mono text-sm uppercase text-[#1f1f1f]">[ How it works ]</span>
          <div className="flex flex-col">
            {steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="grid grid-cols-[56px_1fr] gap-6 border-t border-black py-8 last:border-b lg:grid-cols-[80px_280px_1fr] lg:items-center"
              >
                <span
                  className="font-[family-name:var(--font-display)] font-semibold leading-none tracking-[-0.06em] text-black/20"
                  style={{ fontSize: "clamp(28px,3vw,48px)" }}
                >
                  {num}
                </span>
                <h3
                  className="m-0 font-[family-name:var(--font-display)] font-bold uppercase italic leading-none tracking-[-0.06em] text-black"
                  style={{ fontSize: "clamp(20px,2vw,32px)" }}
                >
                  {title}
                </h3>
                <p
                  className="m-0 max-w-[480px] text-sm leading-[1.5] tracking-[-0.04em] text-[#1f1f1f]"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (black) ── */}
      <section className="w-full bg-black px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col items-start gap-8">
          <h2
            className="m-0 font-[family-name:var(--font-inter-light)] font-light uppercase leading-[0.88] tracking-[-0.08em] text-white"
            style={{ fontSize: "clamp(48px,6.67vw,96px)" }}
          >
            Ready to start?
          </h2>
          <p className="m-0 max-w-[400px] text-sm leading-[1.5] tracking-[-0.04em] text-white/60">
            Tell us about your project and we&apos;ll follow up within one business day with how we can help.
          </p>
          <Link
            href="/#contact"
            className="rounded-full border border-white px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

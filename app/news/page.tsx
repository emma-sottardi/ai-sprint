"use client";

import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

const newsItems = [
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/88601f18-404e-4325-807b-8750301e858f",
    description:
      "H.Studio was awarded a Webby Honoree for our work on the Surfers Paradise campaign — a project that blended documentary photography with editorial design.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/fb945a0b-4deb-47b5-a743-bb75a105416f",
    description:
      "Our latest brand work for Agency 976 was featured in Brand New, the leading publication covering brand identity design worldwide.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/7ae86dc7-89ff-4156-a30e-6f4b7b126d93",
    description:
      "We opened a second studio space on the north side of Chicago — a dedicated photography and production suite available for client shoots.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/88601f18-404e-4325-807b-8750301e858f",
    description:
      "Harvey Specter was named to the Chicago Business Journal&apos;s 40 Under 40 list, recognizing creative entrepreneurs shaping the city&apos;s cultural landscape.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/fb945a0b-4deb-47b5-a743-bb75a105416f",
    description:
      "Cyberpunk Caffe — our collaboration with Bucharest-based restaurateurs — won Best Restaurant Branding at the European Design Awards.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/7ae86dc7-89ff-4156-a30e-6f4b7b126d93",
    description:
      "H.Studio is now accepting applications for a junior designer role. We&apos;re looking for someone who thinks before they open Figma.",
    linkLabel: "Read more →",
    linkUrl: "#",
  },
];

function NewsCard({
  item,
  index,
}: {
  item: (typeof newsItems)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease, delay: (index % 3) * 0.08 }}
      className="flex flex-col items-start gap-4"
    >
      {item.imageUrl && (
        <div className="w-full overflow-hidden">
          <motion.img
            src={item.imageUrl}
            alt=""
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.55, ease }}
            className="h-[280px] w-full object-cover"
          />
        </div>
      )}
      <p
        className="m-0 text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      <a
        href={item.linkUrl}
        className="inline-flex items-center gap-[6px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black transition-opacity hover:opacity-60"
      >
        {item.linkLabel}
      </a>
    </motion.article>
  );
}

export default function NewsPage() {
  return (
    <main className="bg-white">
      <SiteNav />

      {/* ── Hero (black) ── */}
      <section className="w-full bg-black px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-sm uppercase text-white/60">[ Latest ]</span>
          <h1
            className="m-0 font-[family-name:var(--font-inter-light)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-white"
            style={{ fontSize: "clamp(54px,6.67vw,96px)" }}
          >
            News &amp;
            <br />
            Achievements
          </h1>
          <p className="m-0 max-w-[400px] text-sm leading-[1.5] tracking-[-0.04em] text-white/50">
            Awards, press coverage, studio news, and everything else worth knowing from H.Studio.
          </p>
        </div>
      </section>

      {/* ── News grid (light grey) ── */}
      <section className="w-full bg-[#f3f3f3] px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <NewsCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

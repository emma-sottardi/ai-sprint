"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.33, 1, 0.68, 1];

const newsArrow =
  "https://www.figma.com/api/mcp/asset/c766910c-336e-47c6-91fb-1c42d8411739";

const CARD_W = 353;
const GAP = 31;
const STEP = CARD_W + GAP;
const VISIBLE_DESKTOP = 3;

type NewsItem = {
  imageUrl: string | null;
  description: string;
  linkLabel: string;
  linkUrl: string;
};

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.08 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className={`group flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        disabled
          ? "border-[#d8d8d8] opacity-30 cursor-not-allowed"
          : "border-black cursor-pointer hover:bg-black"
      }`}
    >
      <img
        src={newsArrow}
        alt={direction === "prev" ? "Previous" : "Next"}
        className={`h-4 w-4 transition-all ${direction === "prev" ? "rotate-180" : "-rotate-90"} ${!disabled ? "group-hover:[filter:brightness(0)_invert(1)]" : ""}`}
      />
    </motion.button>
  );
}

export function NewsSection({ newsItems }: { newsItems?: NewsItem[] | null }) {
  const [index, setIndex] = useState(0);

  const items: NewsItem[] = newsItems?.length
    ? newsItems
    : [
        { imageUrl: "https://www.figma.com/api/mcp/asset/88601f18-404e-4325-807b-8750301e858f", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkLabel: "Read more", linkUrl: "#news" },
        { imageUrl: "https://www.figma.com/api/mcp/asset/fb945a0b-4deb-47b5-a743-bb75a105416f", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkLabel: "Read more", linkUrl: "#news" },
        { imageUrl: "https://www.figma.com/api/mcp/asset/7ae86dc7-89ff-4156-a30e-6f4b7b126d93", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkLabel: "Read more", linkUrl: "#news" },
      ];

  const maxIndex = Math.max(0, items.length - VISIBLE_DESKTOP);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      id="news"
      className="w-full overflow-hidden bg-[#f3f3f3] px-5 py-16 sm:px-8 lg:py-[120px]"
    >
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

        {/* Rotated heading */}
        <div className="lg:flex lg:h-[706px] lg:w-[110px] lg:shrink-0 lg:items-center lg:justify-center">
          <h2 className="m-0 font-[family-name:var(--font-inter-light)] text-[clamp(44px,4.45vw,64px)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black lg:-rotate-90 lg:whitespace-nowrap">
            Keep up with my latest
            <br />
            news &amp; achievements
          </h2>
        </div>

        {/* Slider */}
        <div className="flex flex-col gap-8 lg:flex-1">

          {/* Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-[31px]"
              animate={{ x: -index * STEP }}
              transition={{ duration: 0.55, ease }}
              drag="x"
              dragConstraints={{ left: -maxIndex * STEP, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
            >
              {items.map((item, i) => (
                <article
                  key={i}
                  className="flex w-[calc(100vw-40px)] shrink-0 flex-col items-start gap-4 sm:w-[353px]"
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="h-[398px] w-full object-cover sm:h-[469px]"
                      draggable={false}
                    />
                  )}
                  <p className="m-0 text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                    {item.description}
                  </p>
                  <a
                    href={item.linkUrl}
                    className="inline-flex items-center gap-[10px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black"
                  >
                    {item.linkLabel}
                    <img
                      src={newsArrow}
                      alt=""
                      className="h-[18px] w-[18px] -rotate-90"
                      draggable={false}
                    />
                  </a>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex items-center gap-4">
            <ArrowButton direction="prev" onClick={prev} disabled={index === 0} />
            <ArrowButton direction="next" onClick={next} disabled={index === maxIndex} />
            <div className="flex gap-2 ml-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-black" : "w-1.5 bg-[#d8d8d8]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

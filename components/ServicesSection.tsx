"use client";

import { motion } from "framer-motion";

const ease = [0.33, 1, 0.68, 1];

const serviceImages = [
  "https://www.figma.com/api/mcp/asset/f429f7f5-3474-41bd-903a-de6beeff5bd7",
  "https://www.figma.com/api/mcp/asset/19bbc217-4922-421e-bd2e-86cba461f7d6",
  "https://www.figma.com/api/mcp/asset/b135c419-deb0-4bef-a8a8-f2984cd4ee8c",
  "https://www.figma.com/api/mcp/asset/3922b531-5dda-4581-b6fe-99b8dc221507",
];

const services = [
  { number: "1", title: "Brand Discovery",   text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: serviceImages[0] },
  { number: "2", title: "Web Design & Dev",  text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: serviceImages[1] },
  { number: "3", title: "Marketing",         text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: serviceImages[2] },
  { number: "4", title: "Photography",       text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", image: serviceImages[3] },
];

const rowClass = "grid gap-5 border-t border-white py-4 last:border-b sm:min-h-[184px] sm:grid-cols-[minmax(260px,1fr)_minmax(260px,0.55fr)_151px] sm:gap-6 sm:py-[9px] lg:grid-cols-[minmax(360px,1fr)_minmax(360px,0.52fr)_151px]";

/* ─── Hover: underline sweeps across title, text brightens ─── */
function ServiceRow({ s }: { s: typeof services[0] }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className={`${rowClass} cursor-pointer`}
    >
      <div>
        <span className="mb-6 block font-mono text-sm leading-none text-white sm:mb-7">[ {s.number} ]</span>
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
        className="m-0 max-w-[450px] text-sm leading-[1.2] tracking-[-0.04em] text-white sm:pt-[30px]"
      >
        {s.text}
      </motion.p>
      <motion.img
        src={s.image}
        alt=""
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="h-[151px] w-[151px] object-cover sm:justify-self-end"
      />
    </motion.article>
  );
}


export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-black px-5 py-16 text-white sm:px-8 sm:py-[78px]">
      <div className="flex w-full flex-col">
        <div className="mb-16 flex items-start justify-between gap-8 sm:mb-[76px]">
          <span className="font-mono text-sm uppercase leading-none text-white">[ Services ]</span>
        </div>

        <div className="mb-12 grid items-start gap-8 lg:mb-[72px] lg:grid-cols-[minmax(120px,0.55fr)_minmax(360px,1fr)]">
          <div>
            <p className="m-0 font-[family-name:var(--font-inter-light)] text-[clamp(76px,9vw,136px)] font-light leading-none tracking-[-0.06em] text-white">
              [4]
            </p>
          </div>
          <h2 className="m-0 justify-self-start font-[family-name:var(--font-inter-light)] text-[clamp(56px,7.4vw,136px)] font-light uppercase leading-none tracking-[-0.065em] text-white lg:justify-self-end">
            Deliverables
          </h2>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <ServiceRow key={service.number} s={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

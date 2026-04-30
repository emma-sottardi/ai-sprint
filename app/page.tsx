
const aboutPhoto =
  "https://www.figma.com/api/mcp/asset/0f876f44-0b66-4735-b435-8d3dbe27c6e3";

const fullBleedImage =
  "https://www.figma.com/api/mcp/asset/92f87126-be84-4756-a7cc-1906686dd733";

const serviceImages = [
  "https://www.figma.com/api/mcp/asset/f429f7f5-3474-41bd-903a-de6beeff5bd7",
  "https://www.figma.com/api/mcp/asset/19bbc217-4922-421e-bd2e-86cba461f7d6",
  "https://www.figma.com/api/mcp/asset/b135c419-deb0-4bef-a8a8-f2984cd4ee8c",
  "https://www.figma.com/api/mcp/asset/3922b531-5dda-4581-b6fe-99b8dc221507",
];

const workArrow =
  "https://www.figma.com/api/mcp/asset/432fe2d3-e798-4459-b9d8-bcfab287c29d";

const selectedWorks = [
  {
    title: "Surfers Paradise",
    image: "https://www.figma.com/api/mcp/asset/e5f7002f-be5b-4597-b736-262f3defff59",
    imageHeight: "lg:h-[744px]",
  },
  {
    title: "Cyberpunk Caffe",
    image: "https://www.figma.com/api/mcp/asset/ad70ac11-fb1a-44bf-9710-4005169d2d83",
    imageHeight: "lg:h-[699px]",
  },
  {
    title: "Agency 976",
    image: "https://www.figma.com/api/mcp/asset/c9be02a6-9f64-4f1b-b3ed-27fb11940bc4",
    imageHeight: "lg:h-[699px]",
  },
  {
    title: "Minimal Playground",
    image: "https://www.figma.com/api/mcp/asset/76374325-56a0-4a80-b271-8afe97829d5f",
    imageHeight: "lg:h-[744px]",
  },
];

const testimonials = [
  {
    name: "Marko Stojkovic",
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/8d639d1e-d912-4423-9bdb-6890242eea15",
    className: "lg:left-[7%] lg:top-[14%] lg:-rotate-[6.85deg]",
  },
  {
    name: "Lukas Weber",
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/bb9e63c1-8c71-4c81-a3f3-bc4fcec4e4ee",
    className: "lg:left-[47%] lg:top-[25%] lg:rotate-[2.9deg]",
  },
  {
    name: "Sarah Jenkins",
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/95a3b005-fffe-4cca-bbc5-ab1fb8ea7257",
    className: "lg:left-[22%] lg:top-[56%] lg:rotate-[2.23deg]",
  },
  {
    name: "Sofia Martinez",
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/8b445955-2cdb-4afd-95ce-3d1a7619af95",
    className: "lg:right-[6%] lg:top-[55%] lg:-rotate-[4.15deg]",
  },
];

const newsItems = [
  {
    image: "https://www.figma.com/api/mcp/asset/88601f18-404e-4325-807b-8750301e858f",
    offset: "",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/fb945a0b-4deb-47b5-a743-bb75a105416f",
    offset: "lg:pt-[120px]",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/7ae86dc7-89ff-4156-a30e-6f4b7b126d93",
    offset: "",
  },
];

const newsArrow =
  "https://www.figma.com/api/mcp/asset/c766910c-336e-47c6-91fb-1c42d8411739";

import { HeroSection } from "@/components/HeroSection";
import { BioStripSection } from "@/components/BioStripSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const services = [
  {
    number: "1",
    title: "Brand Discovery",
    text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: serviceImages[0],
  },
  {
    number: "2",
    title: "Web Design & Dev",
    text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: serviceImages[1],
  },
  {
    number: "3",
    title: "Marketing",
    text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: serviceImages[2],
  },
  {
    number: "4",
    title: "Photography",
    text: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: serviceImages[3],
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <BioStripSection />

      <AboutSection />

      {/* -- Full-bleed Image -- */}
      <section className="w-full bg-white" aria-label="Studio photography">
        <div className="relative h-[420px] w-full overflow-hidden sm:h-[560px] lg:h-[760px]">
          <img
            src={fullBleedImage}
            alt="Photographer holding a camera"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      <ServicesSection />

      <SelectedWorkSection />

      <TestimonialsSection />

      {/* -- News -- */}
      <section id="news" className="w-full overflow-hidden bg-[#f3f3f3] px-5 py-16 sm:px-8 lg:py-[120px]">
        <div className="flex w-full flex-col gap-10 lg:min-h-[706px] lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:flex lg:h-[706px] lg:w-[110px] lg:shrink-0 lg:items-center lg:justify-center">
            <h2 className="m-0 font-[family-name:var(--font-inter-light)] text-[clamp(44px,4.45vw,64px)] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black lg:-rotate-90 lg:whitespace-nowrap">
              Keep up with my latest
              <br />
              news &amp; achievements
            </h2>
          </div>

          <div className="grid gap-8 lg:w-[1020px] lg:grid-cols-[353px_1px_353px_1px_353px] lg:gap-[31px]">
            {newsItems.map((item, index) => (
              <div key={item.image} className="contents">
                {index > 0 && (
                  <div
                    key={`divider-${item.image}`}
                    className="hidden h-full min-h-[701px] w-px bg-[#d8d8d8] lg:block"
                    aria-hidden
                  />
                )}
                <article
                  className={`flex w-full flex-col items-start gap-4 ${item.offset}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-[398px] w-full object-cover sm:h-[469px] lg:w-[353px]"
                  />
                  <p className="m-0 text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] lg:w-[353px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href="#news"
                    className="inline-flex items-center gap-[10px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black"
                  >
                    Read more
                    <img
                      src={newsArrow}
                      alt=""
                      className="h-[18px] w-[18px] -rotate-90"
                    />
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Footer -- */}
      <footer id="contact" className="w-full overflow-hidden bg-black px-5 pt-12 text-white sm:px-8">
        <div className="flex flex-col gap-16 lg:gap-[120px]">
          <div className="flex flex-col gap-12">
            <div className="grid gap-8 md:grid-cols-3 md:items-start md:justify-between">
              <div className="flex flex-col items-start gap-3">
                <p className="m-0 text-2xl font-light uppercase italic leading-[1.1] tracking-[-0.04em] text-white">
                  Have a{" "}
                  <span className="font-[family-name:var(--font-display)] font-black not-italic">
                    project
                  </span>{" "}
                  in mind?
                </p>
                <button className="cursor-pointer rounded-full border border-white px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-colors hover:bg-white hover:text-black">
                  Let&apos;s talk
                </button>
              </div>

              <div className="text-left text-lg uppercase leading-[1.1] tracking-[-0.04em] text-white md:text-center">
                <p className="m-0">Facebook</p>
                <p className="m-0">Instagram</p>
              </div>

              <div className="text-left text-lg uppercase leading-[1.1] tracking-[-0.04em] text-white md:text-right">
                <p className="m-0">x.com</p>
                <p className="m-0">Linkedin</p>
              </div>
            </div>

            <div className="h-px w-full bg-white" />
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="relative h-[150px] overflow-hidden sm:h-[190px] lg:h-[219px] lg:w-[1093px]">
              <div className="absolute bottom-[-0.08em] left-4 flex items-center sm:left-6 lg:left-0">
                <span className="hidden w-[15px] shrink-0 items-center justify-center lg:flex">
                  <span className="-rotate-90 whitespace-nowrap font-mono text-sm uppercase leading-[1.1] text-white">
                    [ Code By Codex ]
                  </span>
                </span>
                <p className="m-0 font-[family-name:var(--font-display)] text-[clamp(96px,20.14vw,290px)] font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-white">
                  H.Studio
                </p>
              </div>
            </div>

            <div className="flex gap-[34px] pb-8 text-xs uppercase leading-[1.1] tracking-[-0.04em] text-white">
              <a href="#contact" className="underline">
                licences
              </a>
              <a href="#contact" className="underline">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

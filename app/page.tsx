import { client, urlFor } from "@/lib/sanity";
import { HeroSection } from "@/components/HeroSection";
import { BioStripSection } from "@/components/BioStripSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsSection } from "@/components/NewsSection";

async function getData() {
  try {
    const [testimonials, projects, services, about, newsItems] = await Promise.all([
      client.fetch(`*[_type == "testimonial"] | order(order asc) { name, quote, logo }`),
      client.fetch(`*[_type == "project"] | order(order asc) { title, image, tags }`),
      client.fetch(`*[_type == "service"] | order(order asc) { number, title, description, image }`),
      client.fetch(`*[_type == "about"][0] { bio, photo }`),
      client.fetch(`*[_type == "newsItem"] | order(order asc) { image, description, linkLabel, linkUrl }`),
    ]);
    return { testimonials, projects, services, about, newsItems };
  } catch {
    return { testimonials: [], projects: [], services: [], about: null, newsItems: [] };
  }
}

export default async function Home() {
  const { testimonials, projects, services, about, newsItems } = await getData();

  const cmsTestimonials = testimonials?.map((t: { name: string; quote: string; logo?: object }) => ({
    name: t.name,
    quote: t.quote,
    logoUrl: t.logo ? urlFor(t.logo).height(40).url() : null,
  }));

  const cmsProjects = projects?.map((p: { title: string; image?: object; tags?: string[] }) => ({
    title: p.title,
    imageUrl: p.image ? urlFor(p.image).width(800).url() : null,
    tags: p.tags ?? [],
  }));

  const cmsServices = services?.map((s: { number: string; title: string; description: string; image?: object }) => ({
    number: s.number,
    title: s.title,
    description: s.description,
    imageUrl: s.image ? urlFor(s.image).width(300).url() : null,
  }));

  const cmsAbout = about ? {
    bio: about.bio ?? null,
    photoUrl: about.photo ? urlFor(about.photo).width(600).url() : null,
  } : null;

  const cmsNewsItems = newsItems?.map((n: { image?: object; description?: string; linkLabel?: string; linkUrl?: string }) => ({
    imageUrl: n.image ? urlFor(n.image).width(800).url() : null,
    description: n.description ?? "",
    linkLabel: n.linkLabel ?? "Read more",
    linkUrl: n.linkUrl ?? "#news",
  }));

  return (
    <main className="bg-white">
      {/* Sections sit above the sticky footer — their white background slides over it as you scroll */}
      <div className="relative z-10 bg-white">
        <HeroSection />
        <BioStripSection />
        <AboutSection about={cmsAbout} />

        {/* -- Full-bleed Image -- */}
        <section className="w-full bg-white" aria-label="Studio photography">
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[560px] lg:h-[760px]">
            <img
              src="https://www.figma.com/api/mcp/asset/92f87126-be84-4756-a7cc-1906686dd733"
              alt="Photographer holding a camera"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>

        <ServicesSection services={cmsServices} />
        <SelectedWorkSection projects={cmsProjects} />
        <TestimonialsSection testimonials={cmsTestimonials} />
        <NewsSection newsItems={cmsNewsItems} />
      </div>

      {/* Footer: sticky at the viewport bottom, revealed as sections above scroll away */}
      <footer id="contact" className="sticky bottom-0 z-0 overflow-hidden bg-black px-5 pt-12 text-white sm:px-8">
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
              <a href="#contact" className="underline">licences</a>
              <a href="#contact" className="underline">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

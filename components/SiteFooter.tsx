import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="w-full overflow-hidden bg-black px-5 pt-12 text-white sm:px-8"
    >
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
              <Link
                href="/#contact"
                className="cursor-pointer rounded-full border border-white px-4 py-3 text-sm font-medium leading-none tracking-[-0.04em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Let&apos;s talk
              </Link>
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
            <a href="/#contact" className="underline">
              licences
            </a>
            <a href="/#contact" className="underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

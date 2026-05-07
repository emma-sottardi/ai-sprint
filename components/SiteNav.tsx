"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "/news" },
  { label: "Contact",  href: "/#contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-5 py-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.04em] text-black transition-opacity hover:opacity-60"
        >
          H.Studio
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href !== "/#contact" && pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={[
                  "font-[family-name:var(--font-display)] text-sm font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60",
                  isActive ? "text-black opacity-100" : "text-black/60",
                ].join(" ")}
              >
                {label}
                {isActive && (
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-black align-middle" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/#contact"
          className="rounded-full bg-black px-4 py-[11px] text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}

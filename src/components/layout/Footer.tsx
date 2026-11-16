import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = 2025;

  return (
    <footer className="bg-[#171323] border-t border-white/8 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-75 transition-opacity duration-200"
          aria-label="LC DIGITAL — go to homepage"
        >
          <Image
            src="/logo/lc_logo.png"
            alt="LC DIGITAL"
            width={36}
            height={36}
            className="h-9 w-auto brightness-0 invert"
          />
        </Link>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6" role="list">
            {siteConfig.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/30">
          &copy; {year} LC DIGITAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

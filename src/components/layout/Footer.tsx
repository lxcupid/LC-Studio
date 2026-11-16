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
          className="font-bold text-base tracking-tight text-white hover:text-[#C4B5FD] transition-colors duration-200"
          aria-label="LC DIGITAL — go to homepage"
        >
          <span className="text-[#6D28D9]" aria-hidden="true">LC</span>DIGITAL
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

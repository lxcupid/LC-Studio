"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F7FA]/95 backdrop-blur-md border-b border-[#E9E5EF]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
          aria-label="LC DIGITAL — go to homepage"
          onClick={closeMenu}
        >
          <Image
            src="/logo/lc_logo_trans.png"
            alt=""
            width={50}
            height={50}
            priority
            className="h-10 w-auto"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {siteConfig.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-[#171323]/70 hover:text-[#6D28D9] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6D28D9] text-sm font-medium hover:bg-[#7C3AED] transition-colors duration-200"
          style={{ color: "#ffffff" }}
        >
          Get in Touch
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[#171323] hover:text-[#6D28D9] transition-colors rounded-lg"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F8F7FA] border-b border-[#E9E5EF]`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {siteConfig.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block py-3 text-base font-medium text-[#171323]/80 hover:text-[#6D28D9] border-b border-[#E9E5EF] last:border-0 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="block w-full text-center px-5 py-3 rounded-full bg-[#6D28D9] text-sm font-medium hover:bg-[#7C3AED] transition-colors duration-200"
              style={{ color: "#ffffff" }}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

// Only render social links where a real URL has been provided
const socialLinks = (
  [
    { label: "Twitter",   href: siteConfig.socials.twitter },
    { label: "LinkedIn",  href: siteConfig.socials.linkedin },
    { label: "GitHub",    href: siteConfig.socials.github },
    { label: "Instagram", href: siteConfig.socials.instagram },
  ] as { label: string; href: string }[]
).filter((link) => link.href.trim() !== "");

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#171323] border-t border-[#171323]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left ──────────────────────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#6D28D9]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C4B5FD]">
                Contact
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Have an idea?
              <br />
              <span className="text-[#C4B5FD]">Let&apos;s build it.</span>
            </h2>

            <p className="text-base text-white/55 leading-relaxed max-w-sm mb-10">
              Whether you have a fully scoped project or just an early idea —
              we&apos;d love to hear from you. Tell us what you&apos;re
              thinking.
            </p>

            {/* Email link */}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Send us an email at ${siteConfig.email}`}
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="w-11 h-11 rounded-full bg-[#6D28D9] flex items-center justify-center group-hover:bg-[#7C3AED] transition-colors duration-200"
                aria-hidden="true"
              >
                <Mail size={18} className="text-white" />
              </div>
              <span className="text-white font-medium group-hover:text-[#C4B5FD] transition-colors duration-200">
                {siteConfig.email}
              </span>
            </a>
          </div>

          {/* ── Right ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col justify-between gap-12 lg:pt-20">

            {/* Project CTA card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-200">
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Ready to start a project? Send us a brief overview of what
                you&apos;re building and we&apos;ll get back to you within one
                business day.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=Project%20Inquiry`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6D28D9] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-colors duration-200"
              >
                Start a Project
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Social links — only shown when URLs are provided */}
            {socialLinks.length > 0 && (
              <div>
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                  Find us online
                </p>
                <div className="flex flex-wrap gap-3" role="list">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LC DIGITAL on ${link.label} (opens in new tab)`}
                      role="listitem"
                      className="px-4 py-2 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:border-[#6D28D9] hover:text-[#C4B5FD] transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

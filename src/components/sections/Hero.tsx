import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="LC DIGITAL — Digital Product Studio introduction"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Label — decorative, hidden from screen readers */}
        <div className="flex items-center gap-3 mb-8" aria-hidden="true">
          <span className="h-px w-8 bg-[#6D28D9]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6D28D9]">
            Digital Product Studio
          </span>
        </div>

        {/* Headline — primary H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#171323] max-w-4xl mb-8">
          We build{" "}
          <span className="text-[#6D28D9]">ideas</span>{" "}
          into digital{" "}
          <span className="text-[#6D28D9]">experiences.</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#171323]/60 max-w-xl leading-relaxed mb-12">
          LC DIGITAL is a focused digital product studio. We design and
          engineer web platforms, applications, and digital products that
          perform — from concept to launch.
        </p>

        {/* CTAs — hash links to page sections, not page navigations */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#6D28D9] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-colors duration-200"
          >
            Explore Our Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E9E5EF] text-[#171323] text-sm font-semibold hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors duration-200 bg-white"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Let&apos;s Talk
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="mt-24 pt-8 border-t border-[#E9E5EF] flex flex-col sm:flex-row gap-6 sm:gap-16"
          aria-label="Studio highlights"
        >
          {[
            { number: "4+",   label: "Years of Practice" },
            { number: "20+",  label: "Projects Delivered" },
            { number: "100%", label: "Client Focused" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-[#171323] tracking-tight" aria-hidden="true">
                {stat.number}
              </p>
              <p className="text-sm text-[#171323]/50 mt-1">
                <span className="sr-only">{stat.number} </span>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

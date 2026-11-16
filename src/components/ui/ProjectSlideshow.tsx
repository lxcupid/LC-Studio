"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectSlideshowProps = {
  images: string[];
  title: string;
  priority?: boolean;
};

export default function ProjectSlideshow({
  images,
  title,
  priority = false,
}: ProjectSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 3s, paused while hovered
  useEffect(() => {
    if (isHovered || count <= 1) return;
    timerRef.current = setTimeout(next, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isHovered, next, count]);

  if (count === 0) return null;

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={`${title} screenshots`}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={`${title} screenshot ${i + 1} of ${count}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority && i === 0}
            className="object-cover object-top"
          />
        </div>
      ))}

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))",
        }}
        aria-hidden="true"
      />

      {/* Prev / Next arrows — only shown on hover, only when multiple slides */}
      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous screenshot"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm border border-[#E9E5EF] flex items-center justify-center text-[#171323]/60 hover:text-[#6D28D9] hover:border-[#6D28D9] transition-all duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeft size={14} aria-hidden="true" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next screenshot"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm border border-[#E9E5EF] flex items-center justify-center text-[#171323]/60 hover:text-[#6D28D9] hover:border-[#6D28D9] transition-all duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5"
          role="tablist"
          aria-label="Screenshot navigation"
        >
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Screenshot ${i + 1}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-4 h-1.5 bg-[#6D28D9]"
                  : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

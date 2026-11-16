import { Globe, Smartphone, Palette, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, scalable websites and web platforms built with modern frameworks. From marketing sites to complex web applications — engineered for performance and longevity.",
    highlights: ["Next.js & React", "TypeScript", "API Integration", "CMS & Commerce"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Full-stack web and mobile applications designed to solve real problems. We handle architecture, development, and deployment end-to-end.",
    highlights: ["Web Apps", "React Native", "Backend Systems", "Cloud Deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Purposeful interfaces grounded in user research and refined through iteration. We design products that are intuitive, accessible, and visually sharp.",
    highlights: ["Product Design", "Design Systems", "Prototyping", "Accessibility"],
  },
  {
    icon: Cpu,
    title: "Software Solutions",
    description:
      "Custom software built around your specific workflow or business logic. When off-the-shelf tools fall short, we build the right solution from the ground up.",
    highlights: ["Custom Tools", "Automation", "Integrations", "Technical Consulting"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Our services" className="py-28 px-6 bg-[#F8F7FA] border-t border-[#E9E5EF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <span className="h-px w-8 bg-[#6D28D9]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6D28D9]">
              Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171323] leading-tight mb-5">
            What we do.
          </h2>
          <p className="text-base text-[#171323]/60 leading-relaxed">
            We cover the full spectrum of digital product work — from first
            sketch to shipped product.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative p-8 rounded-2xl bg-white border border-[#E9E5EF] hover:border-[#C4B5FD] hover:shadow-lg hover:shadow-[#6D28D9]/5 transition-all duration-300 overflow-hidden"
              >
                {/* Index number — decorative */}
                <span
                  className="absolute top-6 right-7 text-6xl font-bold text-[#E9E5EF] select-none pointer-events-none leading-none group-hover:text-[#C4B5FD]/40 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-11 h-11 rounded-xl bg-[#6D28D9]/8 flex items-center justify-center mb-6 group-hover:bg-[#6D28D9]/12 transition-colors duration-200">
                  <Icon size={20} className="text-[#6D28D9]" />
                </div>

                {/* Text */}
                <h3 className="relative z-10 text-xl font-bold text-[#171323] tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 text-sm text-[#171323]/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="relative z-10 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#F8F7FA] border border-[#E9E5EF] text-[#171323]/60"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

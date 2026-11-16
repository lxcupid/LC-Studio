import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import ProjectSlideshow from "@/components/ui/ProjectSlideshow";

/* ─── Status badge config ─────────────────────────────────────────────────── */
const statusStyles: Record<ProjectStatus, { label: string; classes: string }> = {
  Completed: {
    label: "Completed",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "In Progress": {
    label: "In Progress",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
  },
  Concept: {
    label: "Concept",
    classes: "bg-[#6D28D9]/8 text-[#6D28D9] border-[#C4B5FD]",
  },
};

/* ─── Per-card gradient fallbacks ─────────────────────────────────────────── */
const gradients = [
  "from-[#6D28D9]/10 to-[#C4B5FD]/20",
  "from-[#171323]/8 to-[#6D28D9]/10",
  "from-[#C4B5FD]/20 to-[#E9E5EF]/40",
  "from-[#7C3AED]/10 to-[#171323]/8",
];

/* ─── Section ─────────────────────────────────────────────────────────────── */
export default function SelectedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-28 px-6 bg-[#F8F7FA]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4" aria-hidden="true">
              <span className="h-px w-8 bg-[#6D28D9]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6D28D9]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171323] leading-tight">
              Projects we&apos;re
              <br />
              proud of.
            </h2>
          </div>
          <p className="text-base text-[#171323]/55 max-w-xs leading-relaxed">
            A selection of digital products we&apos;ve designed and engineered
            for ambitious teams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Project Card ────────────────────────────────────────────────────────── */
type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];
  const badge = statusStyles[project.status];

  // Resolve the full image list: prefer `images[]`, fall back to single `imageUrl`
  const slideImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
        ? [project.imageUrl]
        : [];

  const hasImages = slideImages.length > 0;
  const isPriority = index < 2;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-[#E9E5EF] bg-white overflow-hidden hover:border-[#C4B5FD] hover:shadow-xl hover:shadow-[#6D28D9]/5 transition-all duration-300">

      {/* ── Thumbnail / Slideshow ────────────────────────────────────────── */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {hasImages ? (
          slideImages.length > 1 ? (
            /* Multi-image: interactive slideshow */
            <ProjectSlideshow
              images={slideImages}
              title={project.title}
              priority={isPriority}
            />
          ) : (
            /* Single image: static next/image */
            <>
              <Image
                src={slideImages[0]}
                alt={`${project.title} — ${project.category} project screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={isPriority}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))",
                }}
                aria-hidden="true"
              />
            </>
          )
        ) : (
          /* No images: gradient placeholder */
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#6D28D9 1px, transparent 1px), linear-gradient(90deg, #6D28D9 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/80 flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold text-[#6D28D9]/60">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="text-[10px] font-medium text-[#171323]/35 tracking-widest uppercase">
                Screenshot coming soon
              </span>
            </div>
          </div>
        )}

        {/* Year badge — top-left */}
        <span className="absolute top-3 left-3 z-20 text-xs font-mono font-medium text-[#171323]/50 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E9E5EF]">
          {project.year}
        </span>

        {/* Status badge — top-right */}
        <span
          className={`absolute top-3 right-3 z-20 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${badge.classes}`}
        >
          {badge.label}
        </span>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6D28D9] mb-1.5">
              {project.category}
            </p>
            <h3 className="text-xl font-bold text-[#171323] tracking-tight group-hover:text-[#6D28D9] transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          {/* Action buttons — only rendered when URLs are present */}
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="w-9 h-9 rounded-full border border-[#E9E5EF] flex items-center justify-center text-[#171323]/40 hover:border-[#6D28D9] hover:text-[#6D28D9] hover:bg-[#6D28D9]/5 transition-all duration-200"
              >
                <GitBranch size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
                className="w-9 h-9 rounded-full border border-[#E9E5EF] flex items-center justify-center text-[#171323]/40 hover:border-[#6D28D9] hover:text-[#6D28D9] hover:bg-[#6D28D9]/5 transition-all duration-200"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#171323]/60 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#F8F7FA] border border-[#E9E5EF] text-[#171323]/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

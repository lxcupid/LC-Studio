export type ProjectStatus = "Completed" | "In Progress" | "Concept";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Primary thumbnail. Leave empty string when no screenshot is available. */
  imageUrl: string;
  /** Additional screenshots for the slideshow. If provided, imageUrl is treated as images[0]. */
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    id: "worship-studio",
    title: "Worship Studio",
    category: "Application Development",
    description:
      "A purpose-built digital platform for worship teams — providing tools for song management, setlist planning, and team coordination in a clean, distraction-free environment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/projects/ws1.png",
    images: [
      "/images/projects/ws1.png",
      "/images/projects/ws2.png",
      "/images/projects/ws3.png",
      "/images/projects/ws4.png",
    ],
    liveUrl: "",
    githubUrl: "",
    status: "Completed",
    featured: true,
    year: "2026",
  },
  {
    id: "databasestudio",
    title: "Database Studio",
    category: "Software Solutions",
    description:
      "A unified social media management application that centralises scheduling, analytics, and engagement across multiple platforms into a single streamlined workflow.",
    tags: ["React", "TypeScript", "Node.js"],
    imageUrl: "/images/projects/ds1.png",
    images: [
      "/images/projects/ds1.png",
      "/images/projects/ds2.png",
      "/images/projects/ds3.png",
      "/images/projects/ds4.png",
    ],
    liveUrl: "",
    githubUrl: "",
    status: "Completed",
    featured: true,
    year: "2026",
  },
  {
    id: "collector-guard",
    title: "Collector Guard",
    category: "Software Solutions",
    description:
      "A visual database management interface designed for developers and teams — making schema design, query building, and data exploration intuitive without sacrificing power.",
    tags: ["React", "TypeScript", "SQL"],
    imageUrl: "/images/projects/cg1.png",
    images: [
      "/images/projects/cg1.png",
      "/images/projects/cg2.png",
      "/images/projects/cg3.png",
      "/images/projects/cg4.png",
      "/images/projects/cg5.png",
    ],
    liveUrl: "",
    githubUrl: "",
    status: "Completed",
    featured: true,
    year: "2026",
  },
  {
    id: "fitbook",
    title: "FitBook",
    category: "Application Development",
    description:
      "A fitness tracking and workout planning application focused on simplicity and consistency — helping users build and maintain training habits through smart scheduling and progress visibility.",
    tags: ["React Native", "TypeScript", "UI/UX"],
    imageUrl: "",
    liveUrl: "",
    githubUrl: "",
    status: "Concept",
    featured: true,
    year: "2025",
  },
];

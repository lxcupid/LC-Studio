export const siteConfig = {
  name: "LC DIGITAL",
  tagline: "We build ideas into digital experiences.",
  description:
    "LC DIGITAL is a digital product studio crafting modern web and mobile experiences — from concept to launch.",
  url: "https://lcdigital.studio",
  email: "lcdev.digital@gmail.com",
  socials: {
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  nav: [
    { label: "Work",     href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "About",    href: "/#about" },
    { label: "Contact",  href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

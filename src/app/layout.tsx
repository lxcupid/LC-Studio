import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ─── Fonts ───────────────────────────────────────────────────────────────── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ─── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  // metadataBase is required for Next.js to resolve absolute OG/Twitter image URLs
  metadataBase: new URL("https://lcdigital.studio"),
  title: {
    default: "LC DIGITAL — Digital Product Studio",
    template: "%s | LC DIGITAL",
  },
  description:
    "We build ideas into digital experiences. LC DIGITAL is a digital product studio crafting modern web and mobile experiences.",
  keywords: ["digital studio", "web development", "product design", "Next.js", "UI/UX"],
  authors: [{ name: "LC DIGITAL" }],
  creator: "LC DIGITAL",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lcdigital.studio",
    siteName: "LC DIGITAL",
    title: "LC DIGITAL — Digital Product Studio",
    description: "We build ideas into digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LC DIGITAL — Digital Product Studio",
    description: "We build ideas into digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ─────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7FA] text-[#171323]">
        {/* Skip to main content — keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

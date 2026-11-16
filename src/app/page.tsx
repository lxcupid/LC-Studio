import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SelectedProjects from "@/components/sections/SelectedProjects";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedProjects />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      {/* Grid overlay — warmer, more visible notebook grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,219,245,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,219,245,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Alternate-section contrast */}
        <div style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 50%, var(--bg) 100%)" }}>
          <About />
        </div>

        <Skills />

        <div style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 50%, var(--bg) 100%)" }}>
          <Projects />
        </div>

        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}


"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Starfield from "@/components/Starfield";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar (fixed at top) */}
      <Navbar />
      
      {/* Global Background Animations */}
      <Starfield />

      <main className="flex flex-col relative z-10 overflow-hidden">
        {/* Scattered Realistic Galaxies */}
        <div 
          className="absolute top-[20%] left-[2%] w-[600px] h-[600px] mix-blend-screen z-[-1] pointer-events-none animate-pulse transform -rotate-12"
          style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
        >
          <Image src="/galaxies/purple.png" alt="Realistic Galaxy" fill className="object-contain opacity-70" />
        </div>
        <div 
          className="absolute top-[50%] right-[-5%] w-[550px] h-[550px] mix-blend-screen z-[-1] pointer-events-none animate-pulse delay-700 transform rotate-12"
          style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
        >
          <Image src="/galaxies/blue.png" alt="Realistic Galaxy" fill className="object-contain opacity-80" />
        </div>
        <div 
          className="absolute top-[80%] left-[5%] w-[650px] h-[650px] mix-blend-screen z-[-1] pointer-events-none animate-pulse delay-1000 transform rotate-45"
          style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
        >
          <Image src="/galaxies/gold.png" alt="Realistic Galaxy" fill className="object-contain opacity-60" />
        </div>

        {/* Hero Section */}
        <header
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br black text-white relative overflow-hidden"
        >
          {/* Animated Glow Orbs */}
          <div 
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full animate-pulse pointer-events-none" 
            style={{ background: 'radial-gradient(circle at center, rgba(244,114,182,0.4) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full animate-pulse delay-500 pointer-events-none" 
            style={{ background: 'radial-gradient(circle at center, rgba(250,204,21,0.4) 0%, transparent 70%)' }}
          />
          <Hero />
        </header>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-transparent px-6 py-20"
        >
          <About />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-transparent px-6 py-20"
        >
          <Skills />
        </section>


        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-[80vh] flex items-center justify-center bg-gray-100 dark:bg-transparent px-6 pb-20 pt-0 -mt-24 relative z-10"
        >
          <Projects />
        </section>

        {/* Contact Section */}
        <footer
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r black text-white px-6 py-20"
        >
          <Contact />
        </footer>
      </main>
      {/* Your sections */}
      <ScrollToTop />
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "translate-y-0" : "translate-y-2"
      }`}
    >
      <nav
        className={`flex items-center gap-6 md:gap-10 px-6 py-3 rounded-full transition-all duration-500 backdrop-blur-xl border ${
          isScrolled
            ? "bg-gray-950/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "bg-gray-900/40 border-white/5 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Logo */}
        <Link href="#top" className="font-extrabold tracking-widest text-white text-lg md:text-xl">
          <span className="drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">MR</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {sections.slice(1, -1).map((section) => (
            <li key={section} className="relative">
              <a
                href={`#${section}`}
                className={`relative px-4 py-2 capitalize text-sm font-semibold transition-colors duration-300 z-10 flex items-center justify-center ${
                  active === section ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </a>
              {active === section && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* CTA Badge */}
        <div className="relative group">
          <motion.a
            href="#contact"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="md:inline-flex hidden items-center px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-lg font-semibold text-sm cursor-pointer relative z-10 transition-all duration-300 group-hover:bg-white/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(139,92,246,0.6)",
              borderColor: "rgba(167,139,250,0.8)",
            }}
          >
            <span className="relative flex w-2.5 h-2.5 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>
            </span>
            Open To Work
          </motion.a>
        </div>
      </nav>
    </header>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../profile.png";
import { FaLaptopCode, FaCloud, FaQuinscape } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto px-6 py-10 relative z-10"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Profile Image with Floating Animations */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Container for Profile Image and Effects */}
          <div className="relative flex items-center justify-center">
            {/* Animated Gradient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
            
            {/* Spinning Ring */}
            <motion.div 
              className="absolute -inset-6 rounded-full border-2 border-dashed border-blue-500/50 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10">
              <Image
                src={profile}
                alt="Md Rishad"
                fill
                sizes="(max-width: 1024px) 224px, 288px"
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          <motion.a
            href="/About/Resume.pdf"
            download
            aria-label="Download resume"
            className="mt-12 px-4 py-2 border-2 border-blue-500 text-blue-400 rounded-full shadow-sm font-medium transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(59,130,246,0.3)",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Right: Glassmorphism Content Panel */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 inline-block">
            About Me
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I build things that feel as good as they look. My work lives at the intersection of clean frontends and reliable backends — stitched together with attention to performance, accessibility, and the small details that make users trust a product. Lately I&apos;ve been going deeper into cloud infrastructure and cybersecurity, because shipping fast means nothing if the system isn&apos;t built to last. I&apos;m currently open to roles where I can contribute from day one and grow into the kind of engineer who owns entire systems.
          </p>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl transition-all cursor-default"
            >
              <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <FaLaptopCode size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Full-stack craft</h4>
                <p className="text-sm text-gray-400">Next.js, Node.js, MongoDB</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl transition-all cursor-default"
            >
              <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <SiCyberdefenders size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Exploring cybersecurity</h4>
                <p className="text-sm text-gray-400">Network basics, secure coding</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl transition-all cursor-default"
            >
              <div className="p-3 bg-white/10 text-white rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <FaCloud size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Learning cloud infra</h4>
                <p className="text-sm text-gray-400">AWS, Docker, deployment pipelines</p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl transition-all cursor-default"
            >
              <div className="p-3 bg-pink-500/20 text-pink-400 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <FaQuinscape size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">UI that feels alive</h4>
                <p className="text-sm text-gray-400">Framer Motion, interaction design</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

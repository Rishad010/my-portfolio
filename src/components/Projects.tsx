"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "MedAlert Web App",
    description: "A comprehensive medical alert system that helps manage medications and connects patients with healthcare providers",
    demo: "https://med-alert-coral.vercel.app",
    github: "https://github.com/Rishad010/MedAlert",
    stack: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "REST API", "MongoDB"],
    image: "/Projects/project_1.png",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "group-hover:border-purple-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
  },
  {
    title: "Event Manager Web App",
    description: "Full-stack event management application featuring event creation, ticketing, and management.",
    demo: "https://event-management-atlantis.vercel.app",
    github: "https://github.com/Rishad010/Event-Management",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "REST API", "MongoDB", "Mongoose ODM", "Material UI"],
    image: "/Projects/project_2.png",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    title: "ShoppersStack Testing",
    description: "Complete testing of the e-commerce web application to identify and document defects and inconsistencies.",
    demo: "https://www.shoppersstack.com",
    // github: "#",
    stack: ["Functional", "Integration", "System", "Usability", "Performance", "Regression", "Cross-Browser Testing", "API Testing"],
    image: "/Projects/project_3.png",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "group-hover:border-pink-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
];

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white py-20 relative overflow-hidden">
      {/* Ambient Breathing Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.2),transparent_70%)] pointer-events-none"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 w-full relative z-10" style={{ perspective: "1000px" }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateY: 30, y: 100 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 80 }}
            className="h-full"
          >
            {/* Continuous Floating (Anti-Gravity) Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 + idx * 0.5, ease: "easeInOut" }}
              className="h-full"
            >
              {/* 3D Hover Tilt Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
                className={`group relative flex flex-col h-full bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${project.shadow} ${project.borderColor}`}
              >
            {/* Glowing Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                priority={idx === 0}
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-20">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide rounded-full shadow-sm group-hover:border-white/30 group-hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-lg font-semibold transition-colors duration-300 backdrop-blur-md border border-white/5"
                >
                  <FiExternalLink /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white/20 hover:bg-white/10 text-white py-2.5 rounded-lg font-semibold transition-colors duration-300"
                >
                  <FiGithub /> Code
                </a>
              </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        ))}
      </div>
    </div>
  );
}

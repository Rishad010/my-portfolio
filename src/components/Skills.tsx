"use client";
import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";
import { LiaJava, LiaAws } from "react-icons/lia";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
import {
  SiC,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostman,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

// Base level rotating categories (unchanged)
const skills = [
  { name: "Languages", icon: <FaCode size={28} />, color: "#f59e0b" }, // Amber
  { name: "Frontend", icon: <FaLaptopCode size={28} />, color: "#3b82f6" }, // Blue
  { name: "Backend", icon: <FaServer size={28} />, color: "#10b981" }, // Emerald
  { name: "Databases", icon: <FaDatabase size={28} />, color: "#ec4899" }, // Pink
  { name: "Tools", icon: <FaTools size={28} />, color: "#8b5cf6" }, // Violet
  { name: "Cloud", icon: <FaCloud size={28} />, color: "#06b6d4" }, // Cyan
  // { name: "React", icon: <FaReact size={28} /> },
  // { name: "Node.js", icon: <FaNodeJs size={28} /> },
  // { name: "JavaScript", icon: <FaJsSquare size={28} /> },
  // { name: "Python", icon: <FaPython size={28} /> },
  // { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  // { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
  // { name: "MongoDB", icon: <SiMongodb size={28} /> },
  // { name: "Express", icon: <SiExpress size={28} /> },
  // { name: "Git", icon: <SiGit size={28} /> },
  // { name: "GitHub", icon: <SiGithub size={28} /> },
  // { name: "HTML5", icon: <SiHtml5 size={28} /> },
  // { name: "CSS3", icon: <SiCss3 size={28} /> },
];

// Related technologies shown as a mini-atom around each category on hover
const related = {
  Languages: [
    { name: "C", icon: <SiC size={18} /> },
    { name: "Java", icon: <LiaJava size={18} /> },
    { name: "Python", icon: <FaPython size={18} /> },
    { name: "JavaScript", icon: <FaJsSquare size={18} /> },
  ],
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 size={18} /> },
    { name: "CSS3", icon: <SiCss3 size={18} /> },
    { name: "React", icon: <FaReact size={18} /> },
    { name: "Next.js", icon: <SiNextdotjs size={18} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={18} /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={18} /> },
    { name: "Express", icon: <SiExpress size={18} /> },
    { name: "Django", icon: <SiDjango size={18} /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb size={18} /> },
    { name: "MySQL", icon: <SiMysql size={18} /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={18} /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit size={18} /> },
    { name: "GitHub", icon: <SiGithub size={18} /> },
    { name: "Postman", icon: <SiPostman size={18} /> },
    { name: "Linux", icon: <FcLinux size={18} /> },
    { name: "VSCode", icon: <VscVscode size={18} /> },
  ],
  Cloud: [
    { name: "AWS", icon: <LiaAws size={18} /> },
    { name: "Docker", icon: <SiDocker size={18} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={18} /> },
  ],
};

export default function Skills() {
  // Rotation value for the container
  const rotate = useMotionValue(0);
  const counterRotate = useTransform(rotate, (r) => -r);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex items-center justify-center text-gray-900 dark:text-white relative">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_50%)] pointer-events-none" />

      {/* Deep Background Extra Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-700/30 opacity-50 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500/50 rounded-full blur-sm -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-500/50 rounded-full blur-sm -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      {/* Rotating Container */}
      <motion.div
        className="relative w-[600px] h-[600px] z-10"
        viewport={{ once: false, amount: 0.5 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ rotate }}
      >

        {/* Orbit Ring */}
        <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-500/30 pointer-events-none" />
        
        {/* Center Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ rotate: counterRotate }}
        >
          {/* Spinning dashed aura */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />
          {/* Inner Core */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 30px rgba(139,92,246,0.4)",
                "0 0 50px rgba(139,92,246,0.8)",
                "0 0 30px rgba(139,92,246,0.4)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 70px rgba(139,92,246,1)" }}
            className="absolute inset-2 bg-gray-900 border border-purple-500/80 
                       rounded-full flex items-center justify-center text-2xl font-bold text-white cursor-pointer z-10"
          >
            Skills
          </motion.div>
        </motion.div>

        {/* Circular Skills */}
        {skills.map((skill, i) => {
          // Place items evenly with first item at 12 o'clock
          const step = (2 * Math.PI) / skills.length;
          const startAngle = -Math.PI / 2; // 12 o'clock
          const angle = startAngle + i * step;
          const radius = 240;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          // Counter rotation so text/icons stay upright
          // use outer counterRotate

          return (
            <>
              <motion.div
                key={`${skill.name}-core`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() =>
                  setHoveredIndex((prev) => (prev === i ? null : prev))
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: `0 0 30px ${skill.color}, inset 0 0 15px ${skill.color}80`,
                  backgroundColor: `${skill.color}20`,
                  borderColor: skill.color
                }}
                className="absolute w-20 h-20 rounded-full flex flex-col 
                           items-center justify-center cursor-pointer bg-gray-900/40 backdrop-blur-md transition-all duration-300"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  marginLeft: -40, 
                  marginTop: -40, 
                  transform: "translate(-50%, -50%)",
                  rotate: counterRotate,
                  boxShadow: `0 0 15px ${skill.color}40`,
                  borderColor: `${skill.color}80`,
                  borderWidth: "1px",
                  color: skill.color,
                }}
              >
                {skill.icon}
                <span className="text-xs mt-1 text-center font-semibold text-white">{skill.name}</span>
              </motion.div>

              <motion.div
                key={`${skill.name}-overlay`}
                className="absolute pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear",
                }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  width: 200,
                  height: 200,
                  marginLeft: -100,
                  marginTop: -100,
                  transform: "translate(-50%, -50%)",
                  opacity: hoveredIndex === i ? 1 : 0,
                  scale: hoveredIndex === i ? 1 : 0.8,
                }}
              >
                {/* Inner Orbit Ring */}
                <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-400/20" />

                  {(related[skill.name as keyof typeof related] || []).map(
                    (tech, j) => {
                      const items =
                        related[skill.name as keyof typeof related] || [];
                      const step2 = (2 * Math.PI) / (items.length || 1);
                      const angle2 = -Math.PI / 2 + j * step2;
                      const r2 = 80;
                      const ox = Math.cos(angle2) * r2;
                      const oy = Math.sin(angle2) * r2;
                      return (
                        <motion.div
                          key={`${skill.name}-${tech.name}`}
                          className="absolute w-10 h-10 rounded-full flex items-center justify-center 
                                     bg-gray-900/80 backdrop-blur-sm"
                          style={{
                            left: `calc(50% + ${ox}px)`,
                            top: `calc(50% + ${oy}px)`,
                            marginLeft: -20,
                            marginTop: -20,
                            transform: "translate(-50%, -50%)",
                            // Keep tech upright relative to container rotation
                            // Note: using outer counterRotate keeps labels readable
                            rotate: counterRotate,
                            boxShadow: `0 0 10px ${skill.color}aa`,
                            borderColor: skill.color,
                            borderWidth: "1px",
                            color: skill.color,
                          }}
                          title={tech.name}
                        >
                          {tech.icon}
                        </motion.div>
                      );
                    }
                  )}
              </motion.div>
            </>
          );
        })}
      </motion.div>
    </div>
  );
}

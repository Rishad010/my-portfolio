"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-6">
      <div className="absolute w-72 h-72 bg-red-500 opacity-30 blur-3xl rounded-full -z-10 animate-pulse" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 text-lg"
      >
        Let’s connect and create something amazing together!
      </motion.p>

      {/* Email CTA */}
      <motion.a
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mdrishad186@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full shadow-lg font-semibold"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          backgroundColor: "#fbbf24", // Yellow-400
          color: "white",
        }}
      >
        <Mail className="w-5 h-5" />
        Email Me
      </motion.a>

      {/* Social Links */}
      {/* <div className="flex gap-6 justify-center mt-8">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="hover:text-gray-200 transition"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="hover:text-gray-200 transition"
        >
          <Github className="w-7 h-7" />
        </a>
      </div> */}
      <div className="flex gap-6 justify-center mt-8">
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          href="https://www.linkedin.com/in/mdrishad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="hover:text-gray-200 transition"
          whileHover={{ scale: 1.5 }}
        >
          <Linkedin className="w-7 h-7" />
        </motion.a>
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
          href="https://github.com/Rishad010"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="hover:text-gray-200 transition"
          whileHover={{ scale: 1.5 }}
        >
          <Github className="w-7 h-7" />
        </motion.a>
      </div>
    </div>
  );
}

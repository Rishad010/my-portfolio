"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-6">
      {/* Optional animated background glow */}
      {/* <div className="absolute w-72 h-72 bg-pink-400 opacity-30 blur-3xl rounded-full -z-10 animate-pulse" /> */}

      <motion.div
        className="text-center max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="overflow-hidden">
          <motion.h1
            className="text-3xl mb-2 text-yellow-200 font-semibold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            Hi, I&apos;m
          </motion.h1>
        </div>
        <motion.h1
          className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white animate-pulse"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          MD RISHAD
        </motion.h1>

        <p className="text-2xl mb-6 text-orange-300 font-medium">
          Creative Developer | Dream Builder
        </p>

        <motion.p
          className="text-lg mb-8 max-w-lg mx-auto text-pink-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I turn ideas into reality with code that sings. Building the future,
          one pixel at a time. Let’s create something amazing together!
        </motion.p>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full shadow-lg font-bold"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Check My Work ✨
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-bold"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffffff",
              color: "#9333ea",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Let’s Talk 💬
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

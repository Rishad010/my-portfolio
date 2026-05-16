"use client";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars on the client to avoid hydration mismatch
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setStars(generatedStars);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -30px) scale(1.2); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, 40px) scale(1.4); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 50px) scale(1.3); }
        }
      `}</style>

      {/* Animated Galaxies (Ambient Deep Space Orbs) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.3)_0%,transparent_60%)]"
        style={{ animation: "drift1 20s infinite ease-in-out" }}
      />
      <div
        className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.25)_0%,transparent_60%)]"
        style={{ animation: "drift2 25s infinite ease-in-out 2s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,24,93,0.25)_0%,transparent_60%)]"
        style={{ animation: "drift3 22s infinite ease-in-out 4s" }}
      />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s infinite ease-in-out ${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

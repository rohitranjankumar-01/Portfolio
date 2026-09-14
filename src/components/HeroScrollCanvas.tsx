"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, ChevronRight } from "lucide-react";
import { personalData } from "@/data/personalData";

export default function HeroScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // High-DPI Canvas Particle Grid Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      particles = [];
      const numParticles = Math.min(Math.floor((width * height) / 12000), 70);

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? "#38BDF8" : "#0284C7",
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective web
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.15;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-carbon-grid"
    >
      {/* High-DPI Canvas Background (Aria Hidden) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Radial Gradient Ambient Glows (constrain max width to prevent mobile overflow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[85vw] h-[600px] bg-[#38BDF8]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-[450px] max-w-[85vw] h-[450px] bg-[#0284C7]/12 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        

        {/* Main Name Heading - Responsive for compact phones and 4K displays */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-extrabold tracking-tight text-white mb-4 leading-tight break-words"
        >
          ROHIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-sky-200 to-[#0284C7] text-glow-cyan">RANJAN KUMAR</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-xl font-rajdhani font-semibold text-sky-200/90 mb-6 flex items-center justify-center gap-2 flex-wrap px-2"
        >
          <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8] shrink-0" />
          <span>{personalData.tagline}</span>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl text-xs sm:text-base text-[#7E92AB] font-normal leading-relaxed mb-10 px-2"
        >
          {personalData.shortBio}
        </motion.p>

        {/* CTA Buttons - Mobile full-width / PC inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_25px_rgba(56,189,248,0.24)] flex items-center justify-center gap-2"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/certifications"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl glass-panel border border-[#1C2E4A] text-white hover:border-[#38BDF8]/60 hover:text-[#38BDF8] font-orbitron font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center"
          >
            View Certifications
          </Link>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <Link
            href="/education"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#38BDF8] transition-colors"
          >
            <span>EXPLORE ACADEMICS</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#38BDF8]" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

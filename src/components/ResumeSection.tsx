"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Mail,
  Linkedin,
  ShieldCheck,
  Eye,
  ExternalLink,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { personalData } from "@/data/personalData";

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const isUploaded = resumeData.status === "uploaded" && !!resumeData.imageUrl;

  const handleOpenModal = () => {
    setZoomLevel(1);
    setIsModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setZoomLevel(1);
  }, []);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, handleCloseModal]);

  return (
    <section id="resume" className="py-24 relative bg-[#0B1320] bg-carbon-grid min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#38BDF8]/30 text-xs font-mono uppercase text-[#38BDF8] mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Document &amp; Credentials</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-[#E2E8F0] tracking-tight"
          >
            CV / <span className="text-[#38BDF8]">RESUME</span>
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Document Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl border border-[#38BDF8]/30 overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.08)]"
        >
          {/* Terminal Title Bar */}
          <div className="px-6 py-3.5 bg-[#111D30] border-b border-[#1C2E4A] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-[#7E92AB]">
                rohit@system-hud:~ /curriculum-vitae
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              {isUploaded ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED &amp; AVAILABLE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  PENDING UPLOAD
                </span>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10">
            {isUploaded && resumeData.imageUrl ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* CV Interactive Preview Column */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div
                    onClick={handleOpenModal}
                    className="group relative w-full max-w-md aspect-[1/1.414] bg-[#0A101D] rounded-xl overflow-hidden border border-[#1C2E4A] hover:border-[#38BDF8]/60 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]"
                  >
                    {/* CV Image Preview */}
                    <Image
                      src={resumeData.imageUrl}
                      alt={`${personalData.fullName} Curriculum Vitae`}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain object-top group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />

                    {/* Hover Overlay with Action Cue */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                      <div className="px-4 py-2 rounded-xl bg-[#38BDF8] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.5)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4" />
                        <span>Click to Expand &amp; Inspect</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-300 mt-2">
                        High Resolution Preview Available
                      </p>
                    </div>

                    {/* Quick Expand Button in Top Right */}
                    <button
                      aria-label="Expand CV full screen"
                      className="absolute top-3 right-3 p-2 rounded-lg bg-[#0B1320]/80 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0B1320] transition-colors shadow-lg z-10"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs font-mono text-[#7E92AB] mt-3 flex items-center gap-1.5">
                    <span>💡</span>
                    <span>Click the preview above to view full-size with zoom controls</span>
                  </p>
                </div>

                {/* Metadata & Actions Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-xs mb-3">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{resumeData.note}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-[#E2E8F0] mb-3">
                      {personalData.fullName}
                    </h2>

                    <p className="text-xs sm:text-sm font-rajdhani font-semibold text-[#38BDF8] mb-4">
                      {personalData.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#7E92AB] font-mono leading-relaxed mb-6">
                      Detailed Curriculum Vitae outlining education at Lovely Professional University, professional certifications (Oracle OCI 2025 AI Foundations, AI Engineer), project portfolio, and technical proficiencies.
                    </p>

                    {/* Metadata Badges */}
                    <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-[#111D30] border border-[#1C2E4A]">
                        <span className="text-[#7E92AB] block text-[11px]">FORMAT</span>
                        <span className="text-[#E2E8F0] font-bold">Image Document (JPG)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#111D30] border border-[#1C2E4A]">
                        <span className="text-[#7E92AB] block text-[11px]">STATUS</span>
                        <span className="text-emerald-400 font-bold">Verified &amp; Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Stack */}
                  <div className="space-y-3">
                    <a
                      href={resumeData.imageUrl}
                      download="Rohit_Ranjan_Kumar_CV.jpg"
                      className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download CV Document</span>
                    </a>

                    <button
                      onClick={handleOpenModal}
                      className="w-full py-3 px-5 rounded-xl glass-panel border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/10 font-orbitron font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>View Fullscreen Lightbox</span>
                    </button>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <a
                        href={`mailto:${personalData.email}`}
                        className="py-2.5 px-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#E2E8F0] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 font-orbitron text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Email Inquiries</span>
                      </a>

                      <a
                        href={personalData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#E2E8F0] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 font-orbitron text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Fallback if not uploaded */
              <div className="text-center flex flex-col items-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-[#111D30] border border-[#1C2E4A] flex items-center justify-center text-[#38BDF8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                  <FileText className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs mb-4">
                  <span>{resumeData.note}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-[#E2E8F0] mb-3">
                  Official Resume Document
                </h2>

                <p className="text-sm text-[#7E92AB] font-mono max-w-lg mb-8 leading-relaxed">
                  The verified curriculum vitae document will be published shortly. For direct inquiries, project breakdowns, or academic verification, please reach out directly.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request via Email</span>
                  </a>

                  <a
                    href={personalData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#E2E8F0] hover:border-[#38BDF8]/60 hover:text-[#38BDF8] font-orbitron font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && resumeData.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col glass-card border border-[#38BDF8]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Control Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-[#111D30] border-b border-[#1C2E4A]">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#38BDF8]" />
                  <div>
                    <h3 className="text-sm font-orbitron font-bold text-[#E2E8F0]">
                      {personalData.fullName} - Curriculum Vitae
                    </h3>
                    <p className="text-[11px] font-mono text-[#7E92AB]">
                      Zoom: {Math.round(zoomLevel * 100)}%
                    </p>
                  </div>
                </div>

                {/* Toolbar buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomIn}
                    aria-label="Zoom in"
                    title="Zoom in"
                    className="p-2 rounded-lg bg-[#0B1320] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleZoomOut}
                    aria-label="Zoom out"
                    title="Zoom out"
                    className="p-2 rounded-lg bg-[#0B1320] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleResetZoom}
                    aria-label="Reset zoom"
                    title="Reset zoom"
                    className="p-2 rounded-lg bg-[#0B1320] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <a
                    href={resumeData.imageUrl}
                    download="Rohit_Ranjan_Kumar_CV.jpg"
                    aria-label="Download image"
                    title="Download document"
                    className="p-2 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0B1320] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  <a
                    href={resumeData.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in new tab"
                    title="Open in new tab"
                    className="p-2 rounded-lg bg-[#0B1320] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors hidden sm:inline-flex"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleCloseModal}
                    aria-label="Close modal"
                    title="Close"
                    className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-colors ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body with Scroll / Zoom */}
              <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#070D18]">
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: "center top",
                    transition: "transform 0.2s ease-out",
                  }}
                  className="relative w-full max-w-3xl flex justify-center py-2"
                >
                  <img
                    src={resumeData.imageUrl}
                    alt={`${personalData.fullName} Curriculum Vitae`}
                    className="max-w-full h-auto rounded-lg shadow-2xl border border-[#1C2E4A]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


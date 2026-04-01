"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-0 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
          <span className="text-sm font-medium text-text-muted">
            Introducing Nexus 2.0 - The Future of Analytics
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Data Intelligence, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-vibrant-purple">
            Uncompromised.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12"
        >
          Empower your enterprise with real-time analytics, machine learning
          insights, and completely unmatched scalability. Built for teams that demand
          perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-electric-cyan to-vibrant-purple text-text-main font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-text-muted/30 hover:bg-white/5 text-text-main font-semibold text-lg transition-all flex items-center justify-center gap-2 group">
            <PlayCircle className="text-text-muted group-hover:text-electric-cyan transition-colors" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Floating 3D Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl mt-20 relative z-20"
        style={{ perspective: "1000px" }}
      >
        <div className="glass-panel rounded-2xl p-2 md:p-4 border border-white/10 shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-deep-space/50 rounded-t-2xl">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="mt-8 bg-deep-space rounded-xl border border-white/5 overflow-hidden">
            {/* Dashboard Visual Representation using UI blocks */}
            <div className="flex flex-col md:flex-row h-[400px] md:h-[600px] w-full">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-64 border-r border-white/5 p-4 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-10 rounded-lg ${i === 0 ? 'bg-white/10' : 'bg-white/5'} animate-pulse`} />
                ))}
              </div>
              {/* Main Content Area */}
              <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="w-48 h-8 rounded-lg bg-white/10 animate-pulse" />
                  <div className="w-32 h-8 rounded-lg bg-white/10 animate-pulse" />
                </div>
                {/* Charts Area */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 rounded-xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/5 p-4 md:p-6 relative flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-text-muted text-sm font-medium">Total Revenue</div>
                        <div className="text-2xl font-bold text-text-main mt-1">$124,592.00 <span className="text-emerald-400 text-sm font-medium ml-2">+14.5%</span></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 rounded bg-white/10 text-xs font-semibold">1D</div>
                        <div className="px-3 py-1 rounded bg-white/5 text-xs text-text-muted">1W</div>
                        <div className="px-3 py-1 rounded bg-white/5 text-xs text-text-muted">1M</div>
                      </div>
                    </div>

                    <div className="relative flex-1 w-full mt-4">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                        {[...Array(5)].map((_, i) => (
                          <div key={`h-${i}`} className="w-full h-px bg-white/20" />
                        ))}
                      </div>
                      <div className="absolute inset-0 flex justify-between opacity-20">
                        {[...Array(6)].map((_, i) => (
                          <div key={`v-${i}`} className="h-full w-px bg-white/20" />
                        ))}
                      </div>
                      
                      {/* Detailed SVG Chart Lines */}
                      <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] overflow-visible" preserveAspectRatio="none">
                        {/* Area Fill */}
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,45 C15,40 25,20 40,25 C55,30 65,10 80,15 C90,18 95,5 100,5 L100,50 L0,50 Z" fill="url(#chartGradient)" />
                        
                        {/* Main Line */}
                        <path d="M0,45 C15,40 25,20 40,25 C55,30 65,10 80,15 C90,18 95,5 100,5" fill="none" stroke="#00E5FF" strokeWidth="2.5" className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                        
                        {/* Secondary Line */}
                        <path d="M0,35 C20,38 30,15 45,20 C60,25 70,30 85,20 C95,12 95,20 100,25" fill="none" stroke="#8A2BE2" strokeWidth="2" strokeDasharray="2" className="opacity-70" />

                        {/* Data Points */}
                        <circle cx="80" cy="15" r="2" fill="#050505" stroke="#00E5FF" strokeWidth="1.5" />
                        <circle cx="40" cy="25" r="2" fill="#050505" stroke="#00E5FF" strokeWidth="1.5" />
                      </svg>
                      
                      {/* Floating Tooltip */}
                      <div className="absolute top-[10%] left-[80%] -translate-x-1/2 -translate-y-full mb-2 bg-deep-space border border-white/20 rounded-lg p-2 shadow-xl z-10 glass">
                        <div className="text-xs text-text-muted mb-1">Nov 24, 2:00 PM</div>
                        <div className="text-sm font-bold text-electric-cyan">$28,450</div>
                      </div>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-between text-[10px] text-text-muted mt-2 px-1">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>
                  </div>
                  <div className="rounded-xl flex flex-col gap-4">
                     <div className="flex-1 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                       <div className="w-24 h-24 rounded-full border-4 border-vibrant-purple/30 border-t-vibrant-purple animate-spin" />
                     </div>
                     <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 space-y-3">
                        <div className="w-full h-4 bg-white/10 rounded" />
                        <div className="w-3/4 h-4 bg-white/10 rounded" />
                        <div className="w-1/2 h-4 bg-white/10 rounded" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fading gradient overlay at the bottom to blend with the next section */}
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent pointer-events-none rounded-b-2xl" />
        </div>
      </motion.div>
    </section>
  );
}

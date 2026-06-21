import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Compass, Shield, Award, Landmark } from 'lucide-react';

interface ProjectsHeroProps {
  onSearchFocus: () => void;
  favoritesCount: number;
}

export default function ProjectsHero({ onSearchFocus, favoritesCount }: ProjectsHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center bg-zinc-950 overflow-hidden" id="projects-hero">
      {/* Background Image Parallax Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920&q=80" 
          alt="Luxury Architecture Masterpiece" 
          className="w-full h-full object-cover opacity-60 filter brightness-75 scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F6F2] to-transparent z-10" />
      </div>

      {/* Main Center Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
        
        {/* Animated breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400"
        >
          <span className="hover:text-white transition-colors cursor-pointer">Luxe Resident</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08D57]" />
          <span className="hover:text-white transition-colors cursor-pointer">Prestige Archive</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08D57]" />
          <span className="text-[#B08D57]">Projects Dossier</span>
        </motion.div>

        {/* Hero Title */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight font-serif leading-none text-white uppercase"
          >
            Our Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-300 md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Every project reflects our commitment to innovation, craftsmanship, and timeless luxury.
          </motion.p>
        </div>

        {/* Extra Mini Credentials block for elite validation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:flex justify-center items-center gap-12 text-[10px] uppercase font-mono tracking-[0.25em] text-neutral-400 pt-4"
        >
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#B08D57]" />
            <span>Sovereign Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#B08D57]" />
            <span>Encrypted Portfolio Records</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#B08D57]" />
            <span>Pritzker Nominated Design Studio</span>
          </div>
        </motion.div>

        {/* Quick Search Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-2"
        >
          <button 
            onClick={onSearchFocus}
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-[#B08D57]/30 text-[#F8F6F2] hover:text-white font-mono text-[11px] uppercase tracking-widest px-8 py-3.5 transition-all duration-300 rounded-none shadow-lg outline-none"
          >
            Initialize Project Filter Search {favoritesCount > 0 && `(★ ${favoritesCount} Bookmarked)`}
          </button>
        </motion.div>
      </div>

      {/* Elegant scroll anchor design */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:flex items-center gap-4 text-white text-[11px] uppercase tracking-widest font-mono opacity-60">
        <span>Slide to scrutinize</span>
        <div className="w-12 h-[1px] bg-white opacity-40" />
      </div>
    </section>
  );
}

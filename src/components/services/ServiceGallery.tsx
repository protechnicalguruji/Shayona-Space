import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PROJECTS } from './servicesData';
import { GalleryProject } from './types';
import { 
  X, Maximize2, MapPin, ZoomIn, Sparkles, ChevronLeft, ChevronRight, Check 
} from 'lucide-react';

export default function ServiceGallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Villas' | 'Architecture' | 'Commercial' | 'Renovation' | 'Residential'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = ['All', 'Villas', 'Architecture', 'Commercial', 'Renovation', 'Residential'];

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  const handleNextProject = () => {
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredProjects.length;
    setLightboxIndex(nextIdx);
  };

  const handlePrevProject = () => {
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxIndex(prevIdx);
  };

  return (
    <section className="bg-[#F8F6F2] py-24 md:py-32 relative overflow-hidden" id="work-gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Gallery Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
              COMPLETED EXHIBITS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark tracking-tight leading-none">
              A Gallery of <span className="italic font-normal text-luxury-gold">Completed Masterpieces</span>
            </h2>
            <p className="font-sans text-neutral-500 font-light text-xs md:text-sm">
              Explore completed architectures, custom villa transformations, and historic renovations crafted with extreme material purity and architectural safety.
            </p>
          </div>

          {/* Filter Pill List */}
          <div className="flex flex-wrap gap-2.5 max-w-full overflow-x-auto self-start bg-white p-1.5 border border-luxury-border shadow-sm rounded">
            {filterTabs.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2.5 rounded text-[10px] font-sans font-bold uppercase tracking-widest transition-all focus:outline-none cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-luxury-gold text-white shadow-md'
                    : 'text-neutral-500 hover:text-luxury-dark hover:bg-neutral-100'
                }`}
                id={`filter-gallery-${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like Flex/Grid System */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group relative h-[380px] bg-white border border-luxury-border p-3.5 rounded shadow-md overflow-hidden flex flex-col justify-between transition-all"
                id={`gallery-project-${project.id}`}
              >
                {/* Visual Image Shell with hover zoom */}
                <div className="relative h-64 rounded overflow-hidden select-none">
                  {/* Glass overlay with zoom button */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/50 transition-all duration-500 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100">
                    <div className="p-3 bg-white/80 backdrop-blur-md rounded-full text-neutral-900 shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-106 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Ribbon tag */}
                  <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur px-2.5 py-1 border border-luxury-border rounded text-[8px] font-mono font-bold uppercase tracking-widest text-[#B08D57]">
                    {project.category}
                  </div>
                </div>

                {/* Info and location footer */}
                <div 
                  className="flex justify-between items-center pt-4 cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="space-y-1">
                    <h3 className="font-serif text-base text-luxury-dark font-medium group-hover:text-luxury-gold transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[10px] text-neutral-400 font-light flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-luxury-gold" />
                      {project.location}
                    </p>
                  </div>

                  {/* Zoom indicator trigger */}
                  <button
                    className="p-1 px-2 border border-luxury-border/60 rounded text-neutral-400 hover:text-luxury-gold hover:border-luxury-gold transition-colors text-[9px] font-mono tracking-widest uppercase focus:outline-none cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX SLIDER MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-6 backdrop-blur-md select-none" id="gallery-lightbox-modal">
              {/* Escape backdrop */}
              <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:scale-105 transition-all z-20 cursor-pointer focus:outline-none shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Controls layout */}
              <div className="relative w-full max-w-5xl h-[80vh] flex flex-col md:flex-row items-center justify-between gap-8 z-10">
                
                {/* Arrow Left (Mobile/Desktop friendly) */}
                <button
                  onClick={handlePrevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all cursor-pointer focus:outline-none z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Primary Image Viewport */}
                <div className="flex-1 h-full w-full flex items-center justify-center relative bg-neutral-950 p-2 rounded border border-neutral-800 overflow-hidden">
                  <motion.img
                    key={filteredProjects[lightboxIndex].id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    src={filteredProjects[lightboxIndex].imageUrl}
                    alt={filteredProjects[lightboxIndex].title}
                    className="max-h-full max-w-full object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Arrow Right */}
                <button
                  onClick={handleNextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all cursor-pointer focus:outline-none z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Description details workspace right sidebar on desktop */}
                <div className="w-full md:w-80 space-y-6 text-left self-stretch flex flex-col justify-center border-l border-neutral-850 pl-0 md:pl-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-neutral-900 text-[8px] font-bold tracking-widest uppercase text-luxury-gold border border-neutral-800 font-mono">
                        {filteredProjects[lightboxIndex].category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>{filteredProjects[lightboxIndex].location}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-white font-light tracking-wide leading-tight">
                      {filteredProjects[lightboxIndex].title}
                    </h3>
                  </div>

                  {/* Highlights Bulleting list */}
                  <div className="space-y-3 pt-4 border-t border-neutral-850">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-bold block">
                      ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-2.5 font-sans text-xs text-neutral-400 font-light">
                      {filteredProjects[lightboxIndex].highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-2 items-center">
                          <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[10px] text-neutral-600 font-mono tracking-wider pt-8">
                    Exhibited under Aurelia Monaco Archives • SIA Certified
                  </div>
                </div>

              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Layers, X, Info } from 'lucide-react';
import { PROJECTS } from '../utils/data';
import { Project } from '../types';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ['All', 'Architecture', 'Interior Design', 'Landscape & Architecture'];

  // Map filters dynamically
  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Architecture') {
      return project.category.includes('Architecture') && !project.category.includes('Landscape');
    }
    if (activeFilter === 'Interior Design') {
      return project.category.includes('Interior');
    }
    if (activeFilter === 'Landscape & Architecture') {
      return project.category.includes('Landscape') || project.category.includes('Turnkey');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight">
              Featured Creations & <br />
              <span className="italic font-light">Architectural Icons</span>
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-100 pb-2 md:pb-0" id="filter-tabs-container">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-semibold transition-all relative outline-none focus:outline-none cursor-pointer ${
                  activeFilter === cat ? 'text-luxury-gold' : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: 'spring', damping: 20, stiffness: 220 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
              >
                {/* Image Wrapper */}
                <div className="aspect-3/4 w-full overflow-hidden rounded bg-neutral-100 relative shadow-md">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Backdrop overlay */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/70 transition-all duration-500" />

                  {/* Absolute metadata on top right */}
                  <div className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  {/* Absolute metadata elements visible on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    
                    {/* Tiny category */}
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-medium mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide mb-2">
                      {project.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-neutral-300 text-xs font-light mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>{project.location}</span>
                    </div>

                    {/* Luxurious View Button */}
                    <span className="w-fit px-5 py-2.5 bg-luxury-gold text-black uppercase tracking-widest text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 self-start hover:bg-white transition-colors">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Sub-card Static info below (so page still has clear visual anchor before hover) */}
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-neutral-800 transition-colors group-hover:text-luxury-gold">{project.name}</h4>
                    <p className="font-sans text-xs uppercase tracking-widest text-neutral-400 font-light mt-1">{project.location}</p>
                  </div>
                  <span className="font-sans text-xs text-neutral-400 border border-neutral-200 px-2 py-0.5 rounded leading-none mt-1">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Project Full Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-neutral-950/80 z-50 backdrop-blur-md"
                id="proj-modal-backdrop"
              />

              {/* Modal Box */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-100 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[85vh]"
                  id="proj-modal-card"
                >
                  {/* Left component: large image */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-950/90" />
                  </div>

                  {/* Right component: text data and spec metrics */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto h-auto">
                    <div>
                      {/* Title row */}
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                        <div>
                          <span className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-medium">
                            {selectedProject.category}
                          </span>
                          <h3 className="font-serif text-3xl text-white tracking-wide mt-1">
                            {selectedProject.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-1.5 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-400 hover:text-white transition-all rounded"
                          aria-label="Close Project Modal"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Summary block */}
                      <p className="text-neutral-300 font-sans text-sm font-light leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>

                      {/* Spec metrics list */}
                      <div className="grid grid-cols-3 gap-4 border-t border-b border-neutral-800/80 py-6 mb-8">
                        <div>
                          <div className="flex items-center gap-1.5 text-luxury-gold text-[10px] uppercase tracking-widest font-semibold mb-1">
                            <MapPin className="w-3 h-3" /> Location
                          </div>
                          <span className="font-sans text-xs font-light text-neutral-300">{selectedProject.location}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-luxury-gold text-[10px] uppercase tracking-widest font-semibold mb-1">
                            <Layers className="w-3 h-3" /> Area
                          </div>
                          <span className="font-sans text-xs font-light text-neutral-300">{selectedProject.area}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-luxury-gold text-[10px] uppercase tracking-widest font-semibold mb-1">
                            <Calendar className="w-3 h-3" /> Year
                          </div>
                          <span className="font-sans text-xs font-light text-neutral-300">{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Booking Prompt */}
                    <div className="p-4 bg-neutral-950 border border-neutral-800/80 rounded flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-luxury-gold" />
                        <div className="flex flex-col">
                          <span className="text-xs font-serif text-neutral-200">Recreate similar elegance?</span>
                          <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400">Launch a vision brief</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          // We'll provide a way to open the booking page
                          const btn = document.getElementById('cta-book-consult-header');
                          if (btn) btn.click();
                        }}
                        className="px-4 py-2 bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest text-[9px] font-bold rounded"
                      >
                        Enquire
                      </button>
                    </div>

                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

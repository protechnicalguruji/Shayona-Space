import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Compass, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectSectionProps {
  project: Project;
  onOpenCaseStudy: () => void;
}

export default function FeaturedProjectSection({ project, onOpenCaseStudy }: FeaturedProjectSectionProps) {
  return (
    <section className="bg-zinc-950 text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden" id="featured-showcase">
      {/* Background radial soft light overlay */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B08D57] font-bold block">
              Flagship Composition
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight font-serif text-[#F8F6F2] uppercase">
              The Showcase Masterpiece
            </h2>
          </div>
          <span className="text-neutral-400 text-xs font-mono tracking-widest uppercase">
            ✦ Sovereign Tier Acquisition ✦
          </span>
        </div>

        {/* Master Project Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center">
          {/* Large Cinematic Image Frame */}
          <div className="lg:col-span-7 relative group aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-800">
            <img 
              src={project.coverImage} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark film layer */}
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            
            {/* Visual Specs Label Floating */}
            <div className="absolute top-4 left-4 bg-[#B08D57] text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
              Flagship Residence
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
                {project.location}
              </span>
              <h3 className="text-4xl font-light font-serif tracking-tight text-[#F8F6F2]">
                {project.name}
              </h3>
              <p className="text-neutral-300 font-light text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Spec Table */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-neutral-800 py-6 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-0.5">Location</span>
                <span className="text-white flex items-center gap-1"><MapPin className="w-3 h-3 text-[#B08D57]" /> {project.location}</span>
              </div>
              
              <div>
                <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-0.5">Est. Area Size</span>
                <span className="text-white flex items-center gap-1"><Compass className="w-3 h-3 text-[#B08D57]" /> {project.specifications.area}</span>
              </div>

              <div>
                <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-0.5">Completion Year</span>
                <span className="text-white flex items-center gap-1"><Calendar className="w-3 h-3 text-[#B08D57]" /> {project.year}</span>
              </div>

              <div>
                <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-0.5">Services Provided</span>
                <span className="text-white flex items-center gap-1"><Award className="w-3 h-3 text-[#B08D57]" /> {project.category} Core Design</span>
              </div>
            </div>

            {/* Testimonial Block */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 relative rounded-none">
              <div className="flex gap-1 text-[#B08D57] text-sm mb-2.5">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs italic text-neutral-300 font-light leading-relaxed mb-4">
                "{project.testimonial.review}"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={project.testimonial.clientPhoto} 
                  alt={project.testimonial.clientName} 
                  className="w-10 h-10 rounded-full object-cover border border-[#B08D57]/45"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-xs font-serif text-white font-medium">{project.testimonial.clientName}</h5>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">Acquisition Patron Client</span>
                </div>
              </div>
            </div>

            {/* Cinematic Read More CTA Button with gold background effect */}
            <div>
              <button 
                onClick={onOpenCaseStudy}
                className="group relative inline-flex items-center gap-3 bg-[#B08D57] hover:bg-white text-white hover:text-black font-mono text-[10px] uppercase font-bold tracking-[0.25em] px-8 py-4.5 transition-all duration-300 shadow-xl rounded-none w-full sm:w-auto"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

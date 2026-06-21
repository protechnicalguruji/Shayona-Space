import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Play, X, Download, ShieldCheck, Mail, FileText, FileDown } from 'lucide-react';

export default function Leadership() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Trigger browser print styled custom company presentation as download fallback
  const handlePrintProfile = () => {
    window.print();
  };

  return (
    <section className="py-24 lg:py-32 bg-luxury-beige relative overflow-hidden" id="leadership">
      {/* Decorative vertical coordinates */}
      <div className="absolute top-24 left-12 font-mono text-[9px] text-neutral-400 tracking-widest hidden xl:block uppercase">
        ARCHITECT DIRECTOR BLOCK
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Interactive Cinema Image with play button overlay */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative aspect-[3/4] rounded overflow-hidden shadow-2xl border border-luxury-border/60 bg-neutral-900 group">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" 
                alt="Director Arthur Aurelia" 
                className="w-full h-full object-cover grayscale brightness-[0.80] group-hover:scale-103 transition-transform duration-[1200ms] ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Video Player Invitation Overlay */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                {/* Play Circle Pulsing trigger */}
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full border border-white/40 bg-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer relative group-hover:border-luxury-gold/80 hover:bg-white/30 transition-all duration-300 shadow-md"
                  id="leadership-play-btn"
                  aria-label="Play Founder Video Statement"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 animate-ping group-hover:bg-luxury-gold/20" />
                  <Play className="w-7 h-7 text-white fill-white ml-1 group-hover:text-luxury-gold group-hover:fill-luxury-gold transition-colors" />
                </motion.button>
                
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-300 mt-6 select-none">
                  Click to Watch Video Message
                </p>
                <p className="font-sans text-xs text-neutral-400 mt-1 italic select-none">
                  “The Philosophy of Restraint” • 2 min 14s
                </p>
              </div>

              {/* Bottom tag information overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white flex justify-between items-end z-10">
                <div>
                  <p className="font-serif text-xl font-bold tracking-tight">Arthur Aurelia</p>
                  <p className="font-sans text-[10px] text-neutral-300 tracking-widest uppercase">Founder &amp; Managing Director</p>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                  <span className="font-mono text-[8px] tracking-widest text-[#B08D57]">CERTIFIED RIBA</span>
                </div>
              </div>
            </div>

            {/* Back offset framing */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-luxury-gold/50 rounded pointer-events-none z-0 hidden sm:block" />
          </div>

          {/* Right Column: Narrative Message & Signoff */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Label */}
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-10 h-[1px] bg-luxury-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                Leadership Word
              </span>
            </div>

            {/* Editorial Statement */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-loose mb-2">
              Spaces Designed to <span className="text-luxury-gold italic">Endure</span>
            </h2>
            <p className="font-sans text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-8">
              A MESSAGE FROM THE MANAGING DIRECTOR
            </p>

            {/* Quote Block */}
            <div className="border-l-2 border-luxury-gold pl-6 lg:pl-8 py-1 mb-8">
              <p className="font-serif text-lg md:text-xl text-neutral-700 italic font-light leading-relaxed tracking-wide">
                “We do not construct buildings merely to enclose volumes. We compose physical narratives in limestone, steel, and light—harmonizing human comfort with absolute environmental truth.”
              </p>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-6 text-neutral-600 font-sans text-sm md:text-base font-light leading-relaxed tracking-wide">
              <p>
                Welcome to Aurelia. For nearly twenty years, we have pursued an architectural agenda grounded in precision and material weight. Our studio avoids temporary stylistic cycles. Instead, we collaborate with elite client families and global enterprises who respect the value of structural authenticity.
              </p>
              <p>
                Our role is to translate your vision into a physical landmark, with total operational safety and transparent fiscal management. We lead a full-service team that commands design drafts, municipal permitting, engineering configurations, and on-site concrete casting coordinate controls.
              </p>
            </div>

            {/* Social, signature & download trigger actions */}
            <div className="mt-10 pt-8 border-t border-luxury-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Name & real-looking signature rendering */}
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-serif text-lg font-bold text-luxury-dark leading-none">Arthur Aurelia</p>
                  <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Founder Director, M.Arch</p>
                </div>
                {/* Simulated luxury signature using Cormorant Garamond italic */}
                <div className="font-serif text-3xl text-luxury-gold italic select-none font-medium opacity-85 tracking-widest border-b border-[#B08D57]/20 pb-1 px-4">
                  A. Aurelia
                </div>
              </div>

              {/* Interaction Buttons - LinkedIn & Download PDF Profile */}
              <div className="flex items-center gap-3.5">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white hover:bg-luxury-gold/15 text-luxury-dark hover:text-luxury-gold rounded border border-luxury-border transition-colors shadow-sm focus:outline-none"
                  aria-label="Founder LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Print/Download Company Presentation Profile PDF button */}
                <button
                  onClick={handlePrintProfile}
                  className="px-5 py-3 rounded bg-neutral-950 hover:bg-luxury-gold text-white hover:text-black text-xs font-sans uppercase tracking-widest font-semibold flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all focus:outline-none cursor-pointer"
                  id="leadership-print-pdf-btn"
                  title="Print or view company dossier"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Company Profile
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Embedded Video Player Lightbox Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-neutral-950/95 backdrop-blur-xl"
              id="video-lightbox-backdrop"
            />

            {/* Video Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-video rounded overflow-hidden shadow-2xl border border-neutral-800 bg-black z-10"
              id="video-modal-container"
            >
              {/* Close Button top edge */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-25 p-2 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full border border-neutral-750 transition-colors focus:outline-none"
                aria-label="Close video workspace"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube placeholder or embedded player with premium background */}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Arthur Aurelia Master Lecture"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0 z-10"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

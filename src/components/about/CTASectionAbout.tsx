import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, ArrowRight, BookOpen } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
  onOpenProjects?: () => void; // Optional trigger to jump user back to gallery
}

export default function CTASectionAbout({ onOpenConsultation, onOpenProjects }: CTASectionProps) {
  
  const handleScrollToProjects = () => {
    if (onOpenProjects) {
      onOpenProjects();
      return;
    }
    // Alternatively jump smoothly down or custom trigger
    const target = document.querySelector('#faq-section');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-28 overflow-hidden bg-luxury-dark text-white text-center select-none" id="cta-about-us">
      {/* Immersive Background visual with cover overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-102 filter brightness-[0.2]" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000")' }}
      />

      {/* Hexagonal grid guide lines */}
      <div className="absolute inset-x-0 top-1/2 bottom-0 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Decorative Badge logo compass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-14 h-14 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold bg-neutral-950 mb-8 animate-spin-slow"
        >
          <Compass className="w-6 h-6" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 max-w-2xl"
        >
          Let’s Create Something <span className="text-luxury-gold italic">Extraordinary</span> Together
        </motion.h2>

        {/* Paragraph descriptions */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-neutral-450 tracking-wide text-sm md:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-12"
        >
          Partner with our award-winning architects, engineers, and curation experts to define coastal prestige or corporate biophilic landmarks.
        </motion.p>

        {/* Master action controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Main Book Consultation button */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest font-sans font-semibold text-xs flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-xl hover:scale-101 cursor-pointer focus:outline-none"
            id="cta-about-consult-trigger"
          >
            <Calendar className="w-4 h-4" />
            Book Private Consultation
          </button>

          {/* Secondary View Projects/FAQs button */}
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 rounded bg-white hover:bg-neutral-100 text-luxury-dark uppercase tracking-widest font-sans font-semibold text-xs flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md focus:outline-none cursor-pointer"
            id="cta-about-faq-trigger"
          >
            <BookOpen className="w-4 h-4 text-luxury-gold" />
            Review Common FAQs
          </button>
        </motion.div>

        {/* Small legal disclaimer sublabel */}
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 mt-10">
          AURA PRESTIGE COMPLIANT CLIENT RETENTION PROTOCOL • EST. 2006
        </p>
      </div>
    </section>
  );
}

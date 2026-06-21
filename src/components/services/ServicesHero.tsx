import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Compass, ArrowDown, Sparkles } from 'lucide-react';

interface ServicesHeroProps {
  onOpenConsultation: () => void;
}

export default function ServicesHero({ onOpenConsultation }: ServicesHeroProps) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScrollToGrid = () => {
    const target = document.querySelector('#our-services-grid');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white select-none"
      id="services-hero"
    >
      {/* Cinematic Luxury Background Image */}
      <motion.div 
        style={{ 
          y: yBg,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2000")' 
        }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25] scale-102"
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/70 z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950/40 to-transparent z-10 pointer-events-none" />

      {/* Grid line overlay to anchor architectural structural form */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.06] z-10 pointer-events-none" />

      {/* Hero Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="container mx-auto px-6 lg:px-12 relative z-20 text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Diamond Header Badge */}
        <div className="flex items-center justify-center gap-3.5 mb-6">
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-luxury-gold/30 bg-neutral-900/65 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold">
              Prestige Atelier
            </span>
          </div>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6">
          Premium Design &amp; <br />
          <span className="text-luxury-gold italic font-normal">Construction Services</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-neutral-400 font-light text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-12">
          From early conceptual drawings up to finished keys handover, we guide world-class clients to realize timeless, resilient architectural masterpieces.
        </p>

        {/* Action button row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-9 py-4 rounded bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest font-sans font-bold text-xs flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none cursor-pointer"
            id="hero-book-consultation"
          >
            <Calendar className="w-4 h-4" />
            Book Consultation
          </button>
          
          <button
            onClick={handleScrollToGrid}
            className="w-full sm:w-auto px-9 py-4 rounded border border-white/20 hover:border-luxury-gold bg-white/5 hover:bg-white/10 text-white hover:text-luxury-gold uppercase tracking-widest font-sans font-bold text-xs flex items-center justify-center gap-2.5 transition-all focus:outline-none cursor-pointer"
            id="hero-view-services"
          >
            <Compass className="w-4 h-4 text-luxury-gold" />
            View Services
          </button>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        style={{ opacity: opacityText }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 text-neutral-500 hover:text-luxury-gold transition-colors block cursor-pointer"
        onClick={handleScrollToGrid}
        id="scroll-indicator-box"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em]">SCROLL DOWN TO EXPLORE</span>
        <div className="w-6 h-9 rounded-full border border-neutral-700/60 flex items-center justify-center">
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </section>
  );
}

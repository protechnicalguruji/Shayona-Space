import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, Diamond } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=95",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=95",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=95"
];

export default function Hero({ onOpenConsultation, onExploreProjects }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const trustIndicators = [
    { label: 'Premium Quality' },
    { label: 'Modern Designs' },
    { label: 'On-Time Delivery' },
    { label: 'End-to-End Solutions' }
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-neutral-950 flex flex-col justify-center items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_IMAGES[currentSlide]}
            alt={`Elegant architectural design slide ${currentSlide + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-16">
        {/* Little Premium Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-luxury-gold/30 bg-neutral-950/60 backdrop-blur-md mb-8"
        >
          <Diamond className="w-2.5 h-2.5 text-luxury-gold animate-pulse" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-neutral-200 font-medium">
            Prestige Architecture Portfolio
          </span>
        </motion.div>

        {/* Major Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Crafting Timeless Spaces <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-gold-200 to-luxury-gold-hover italic font-light font-serif">
            That Inspire Luxury Living
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="font-sans text-neutral-300 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mt-7 leading-relaxed"
        >
          We design extraordinary architecture, premium interiors, and exceptional living experiences with unmatched attention to detail.
        </motion.p>

        {/* Luxury CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12"
        >
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-8 py-4.5 bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest font-semibold text-xs transition-all duration-300 rounded shadow-2xl hover:scale-105"
            id="hero-explore-projects-btn"
          >
            Explore Projects
          </button>
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4.5 bg-neutral-950/80 hover:bg-neutral-900 border border-luxury-gold/40 hover:border-luxury-gold text-white uppercase tracking-widest font-sans text-xs font-semibold transition-all duration-300 rounded backdrop-blur-md hover:scale-105"
            id="hero-book-consult-btn"
          >
            Book Consultation
          </button>
        </motion.div>

        {/* Compact trust markers in row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="grid grid-cols-2 md:flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 mt-12 md:mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto"
        >
          {trustIndicators.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 text-neutral-400">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30">
                <Check className="w-3 h-3 text-luxury-gold" />
              </span>
              <span className="font-sans text-xs tracking-wider uppercase whitespace-nowrap font-medium text-neutral-300">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Downward luxury line scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onExploreProjects}
        id="hero-scroll-down-arrow"
      >
        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.4em] font-light">Scroll Explore</span>
        <div className="w-7 h-11 border-2 border-neutral-600 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-luxury-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

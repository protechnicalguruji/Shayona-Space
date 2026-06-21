import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Compass } from 'lucide-react';

export default function AboutHero() {
  const { scrollY } = useScroll();
  // Premium subtle parallax scroll effect for the header background
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  const handleScrollDown = () => {
    const target = document.querySelector('#our-story');
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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-dark select-none" 
      id="about-hero"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{
          y: yBg,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2000")',
        }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.35] scale-105"
      />

      {/* Decorative Golden Overlay Ring */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-dark/50 to-luxury-dark/90 z-1 pointer-events-none" />

      {/* Grid Lining - subtle architect guidelines */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0 opacity-[0.03] z-1 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-r border-white h-full last:border-r-0" />
        ))}
      </div>

      {/* Hero Content Block */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-dark/40 backdrop-blur-md mb-8"
        >
          <Compass className="w-4 h-4 text-luxury-gold animate-spin-slow" />
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-neutral-300 font-medium">
            Est. 2006 • AURELIA PRESTIGE
          </span>
        </motion.div>

        {/* Large Premium Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6"
        >
          About Our <span className="text-luxury-gold italic">Company</span>
        </motion.h1>

        {/* Elegant Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-neutral-400 text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed tracking-wide mb-14"
        >
          Creating timeless architecture and exceptional spaces through innovation, craftsmanship, and passion.
        </motion.p>

        {/* Scroll indicator button */}
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
          id="hero-scroll-btn"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-luxury-gold transition-colors duration-300">
            Discover Our Story
          </span>
          <div className="w-8 h-12 rounded-full border border-neutral-700 flex items-start justify-center p-2 group-hover:border-luxury-gold transition-colors duration-300">
            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-luxury-gold" />
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Side Decorative Coordinates */}
      <div className="absolute bottom-10 left-10 hidden xl:block z-10">
        <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
          AURELIA HEADQUARTERS • MONACO
        </p>
      </div>
      <div className="absolute bottom-10 right-10 hidden xl:block z-10">
        <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
          N 43.7384° / E 7.4246°
        </p>
      </div>
    </section>
  );
}

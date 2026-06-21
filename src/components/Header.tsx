import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#projects' }, // Gallery is the Projects section
    { name: 'Contact', href: '#contact' }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-luxury-border/30 shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Brandmark */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            id="brand-logo-container"
          >
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded bg-neutral-950 group-hover:bg-luxury-gold transition-all duration-500">
              <Compass className={`w-5.5 h-5.5 transition-colors duration-500 ${isScrolled ? 'text-luxury-gold group-hover:text-black' : 'text-white group-hover:text-black'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold tracking-widest leading-none transition-colors duration-500 ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}>
                AURELIA
              </span>
              <span className={`font-sans text-[8px] uppercase tracking-[0.3em] font-light leading-none mt-1 transition-colors duration-500 ${isScrolled ? 'text-neutral-500' : 'text-neutral-300'}`}>
                Architecture & Design
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11" id="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-sm font-sans uppercase tracking-widest font-medium transition-all duration-300 relative py-1 focus:outline-none group ${
                  isScrolled 
                    ? 'text-neutral-700 hover:text-luxury-gold' 
                    : 'text-neutral-100 hover:text-luxury-gold'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className={`px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold font-sans outline-none focus:outline-none transition-all duration-500 cursor-pointer ${
                isScrolled
                  ? 'bg-luxury-dark hover:bg-luxury-gold text-white hover:text-black hover:scale-102 hover:shadow-lg'
                  : 'bg-white hover:bg-luxury-gold text-luxury-dark hover:text-black hover:scale-102 hover:shadow-xl'
              }`}
              id="cta-book-consult-header"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Hambuguer Icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded focus:outline-none transition-colors ${
                isScrolled ? 'text-luxury-dark hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              id="nav-mobile-toggle"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer (AnimatePresence Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/95 z-50 backdrop-blur-lg"
              id="mobile-backdrop"
            />

            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80vw] max-w-[400px] bg-neutral-950 border-l border-neutral-800 p-8 z-55 flex flex-col justify-between"
              id="mobile-nav-panel"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-neutral-900 mb-8">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-luxury-gold animate-spin-slow" />
                    <span className="font-serif text-lg tracking-widest text-white leading-none">AURELIA</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 border border-neutral-800 rounded text-neutral-400 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="text-lg font-sans tracking-widest uppercase text-neutral-300 hover:text-luxury-gold transition-colors block font-light"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-neutral-900">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest font-sans font-semibold text-xs rounded text-center transition-all flex items-center justify-center gap-2"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[10px] text-neutral-600 tracking-wider">
                  Aura Prestige Client Services
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

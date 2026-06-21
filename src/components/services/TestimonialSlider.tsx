import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Frederic De Castella',
      role: 'Founding Partner, Castella & Co Family Trust',
      text: 'Aurelia executed our clifftop estate in Monaco with flawless precision. Managing the dual-cantilever foundation soil drills from Zürich while maintaining absolute legal privacy felt like an incredible concierge luxury.',
      projectType: 'Turnkey Clifftop Villa',
      scale: '2,400 sqm footprint',
      stars: 5,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Victoria Cavendish',
      role: 'Cultural Trustee, Cavendish Historical Estate',
      text: 'Our historic London townhouses required strict Grade-II facade restorations. The architectural conservators at Aurelia matched ancient lime-washes perfectly while hiding highly advanced geothermal heat grids within the cellar support rods.',
      projectType: 'Heritage Preservation & Interiors',
      scale: 'Mayfair Townhouses',
      stars: 5,
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Kenzo Takahashi',
      role: 'Executive Chair, Takahashi Quantum Labs',
      text: 'The biophilic workspace floor was engineered on a precise circadian tracking light sequence. Our teams noted immediate, continuous improvements in productivity and creative energy, wrapped in a beautiful basalt-stone skin.',
      projectType: 'Biophilic Office Interiors',
      scale: '12-Story Shibuya Headquarters',
      stars: 5,
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-neutral-900 py-24 md:py-32 relative text-white overflow-hidden" id="client-testimonials">
      {/* Visual background lines */}
      <div className="absolute inset-y-0 left-12 w-[1.5px] bg-[#B08D57]/5 hidden lg:block" />
      <div className="absolute top-1/2 right-[10%] w-96 h-96 bg-[#B08D57]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title elements */}
        <div className="space-y-4 mb-16 max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
            VERIFIED CLIENT TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Our Clients <span className="italic font-normal text-[#B08D57]">Speak of Sovereignty</span>
          </h2>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-4xl bg-neutral-950 border border-neutral-850 p-8 md:p-14 rounded shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Quote icon motif background */}
          <Quote className="absolute -top-6 -right-6 w-44 h-44 text-neutral-900/40 select-none pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-8 relative z-10"
              id={`testimonial-slide-${currentIndex}`}
            >
              {/* Star Rating & Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-luxury-gold">
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B08D57] stroke-none" />
                  ))}
                  <Sparkles className="w-3.5 h-3.5 ml-2 text-luxury-gold" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-450">Elite Rating</span>
                </div>
                <div className="px-3 py-1.5 border border-neutral-850 bg-neutral-900 rounded text-[9px] font-mono tracking-widest uppercase text-neutral-300">
                  {testimonials[currentIndex].projectType} • {testimonials[currentIndex].scale}
                </div>
              </div>

              {/* Main Testimonial text */}
              <p className="font-serif text-lg md:text-2xl text-neutral-200 font-light leading-relaxed italic tracking-wide max-w-3xl">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Client Metas */}
              <div className="flex items-center gap-4.5 pt-4 border-t border-neutral-850/60">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border border-neutral-800"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-0.5">
                  <h4 className="font-serif text-base text-white font-medium">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controllers */}
          <div className="flex items-center justify-end gap-3.5 mt-10 border-t border-neutral-850/60 pt-6 relative z-15">
            <span className="text-[10px] font-mono tracking-widest text-[#B08D57] font-bold">
              0{currentIndex + 1} // 0{testimonials.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 border border-neutral-850 hover:border-luxury-gold rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none bg-neutral-900 shadow"
                aria-label="Previous Testimonial"
                id="btn-prev-testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-neutral-850 hover:border-luxury-gold rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none bg-neutral-900 shadow"
                aria-label="Next Testimonial"
                id="btn-next-testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

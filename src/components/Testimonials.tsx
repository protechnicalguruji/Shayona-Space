import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../utils/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 md:py-32 bg-luxury-beige relative overflow-hidden" id="testimonials">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-neutral-200/50 pointer-events-none select-none">
        <Quote className="w-44 h-44 opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
            Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight">
            Client Testimonials & <br />
            <span className="italic font-light">Refined Perspectives</span>
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Slide Outer Container */}
        <div className="relative bg-white rounded-2xl border border-neutral-100 shadow-xl p-8 md:p-16 max-w-4xl mx-auto" id="testimonial-slider-box">
          {/* Decorative quote icon inside */}
          <div className="absolute top-6 right-6 p-3 bg-luxury-beige/30 rounded-full text-luxury-gold">
            <Quote className="w-6 h-6 transform rotate-180" />
          </div>

          <div className="min-h-[240px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Stars List */}
                <div className="flex items-center gap-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-neutral-800 leading-relaxed font-light italic">
                  "{TESTIMONIALS[currentIndex].review}"
                </p>

                {/* Author Info block */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-luxury-gold/30 shrink-0 shadow-md">
                    <img
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-luxury-dark leading-tight">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 mt-1">
                      {TESTIMONIALS[currentIndex].profession}, <span className="text-luxury-gold font-semibold">{TESTIMONIALS[currentIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Sliders and Controls */}
            <div className="flex items-center justify-between mt-10 pt-4 border-t border-neutral-100/50">
              {/* Dots Indicators */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 outline-none focus:outline-none ${
                      currentIndex === idx ? 'w-8 bg-luxury-gold' : 'w-2 bg-neutral-200 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Chevron Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-neutral-200 hover:border-luxury-gold text-neutral-400 hover:text-luxury-dark rounded transition-colors focus:outline-none"
                  aria-label="Previous review"
                  id="btn-testimonial-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-neutral-200 hover:border-luxury-gold text-neutral-400 hover:text-luxury-dark rounded transition-colors focus:outline-none"
                  aria-label="Next review"
                  id="btn-testimonial-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

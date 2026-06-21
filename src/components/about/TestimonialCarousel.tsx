import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Compass } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  profession: string;
  company: string;
  projectType: string;
  review: string;
  rating: number;
  image: string;
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      name: 'Alexander Sinclair',
      profession: 'Managing Partner',
      company: 'Sinclair Family Office',
      projectType: 'Elysian Heights Villa • Monaco',
      review: "Aurelia surpassed all reasonable expectations. Truly an elite service model, their architectural execution and sensitivity to material authenticity transformed our cliffside vision into an incredible, breathtaking masterpiece that stands as an organic monument on the peninsula.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'test-2',
      name: 'Sir Reginald Thornton',
      profession: 'Executive Trustee',
      company: 'Thornton Estates Group',
      projectType: 'Heritage Office HQ • Mayfair, London',
      review: "Completing an subterranean structural exoskeleton beneath an 18th-century Grade-II heritage masonry building seemed impossible. Aurelia's engineering crew handled the planning approvals and loaded beams with pristine, quiet mastery.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'test-3',
      name: 'Rei Minamoto',
      profession: 'Founder',
      company: 'Minamoto Cultural Trust',
      projectType: 'Kyoto Machiya Preservation • Japan',
      review: "A masterpiece of heritage restoration. Our family enjoys custom digital active air filtration systems and heated floor grids, beautifully disguised beneath 200-year-old wooden lattice structures hand-crafted by veteran Miyadaiku carpenters.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-luxury-dark text-white relative overflow-hidden" id="client-testimonials">
      {/* Decorative vertical coordinates overlay */}
      <div className="absolute top-1/2 left-10 w-[1px] h-32 bg-[#B08D57]/30 pointer-events-none hidden xl:block" />
      <div className="absolute top-1/2 right-10 w-[1px] h-32 bg-[#B08D57]/30 pointer-events-none hidden xl:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Intro Tag */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Client Appraisals
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Client <span className="text-luxury-gold italic">Testimonials</span>
          </h2>
          <p className="text-neutral-400 font-sans text-sm md:text-base font-light tracking-wide mt-3 max-w-lg mx-auto">
            Honest remarks from the estate owners and asset trustees who live and configure their workflows inside our custom structures.
          </p>
        </div>

        {/* Carousel display box */}
        <div className="relative bg-neutral-900/40 border border-neutral-800 rounded-lg p-8 md:p-14 lg:p-18 shadow-2xl min-h-[420px] flex flex-col justify-between">
          
          {/* Quote mark decoration top right */}
          <div className="absolute top-8 right-8 text-neutral-800 select-none pointer-events-none">
            <Quote className="w-20 h-20 rotate-180 opacity-20 text-luxury-gold" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Picture Left Column */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-luxury-gold/50 p-1 overflow-hidden shrink-0 bg-neutral-800 shadow-md">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-white leading-none">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest mt-1.5 leading-none">
                    {testimonials[activeIndex].profession}
                  </p>
                  <p className="font-sans text-[9px] text-luxury-gold uppercase tracking-widest mt-1 font-semibold">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Quotes/Review right Column */}
              <div className="md:col-span-8 flex flex-col justify-center text-center md:text-left">
                {/* Visual rating stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4 select-none">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                  ))}
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-3">
                  PROJECT SPEC: {testimonials[activeIndex].projectType}
                </p>

                <p className="font-serif text-base md:text-lg lg:text-xl text-neutral-200 italic font-light leading-relaxed tracking-wide">
                  “ {testimonials[activeIndex].review} ”
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel arrow triggers */}
          <div className="pt-8 border-t border-neutral-800 mt-8 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-neutral-600 uppercase select-none">
              Verified Client Record • {activeIndex + 1} of {testimonials.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded border border-neutral-800 bg-neutral-900/50 text-neutral-450 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Previous Appraisal"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded border border-neutral-800 bg-neutral-900/50 text-neutral-450 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Next Appraisal"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

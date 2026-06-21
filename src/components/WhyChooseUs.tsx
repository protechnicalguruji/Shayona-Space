import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CHOOSE_US_REASONS } from '../utils/data';

export default function WhyChooseUs() {
  // Mapping string to Lucide React component
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Gem':
        return <Icons.Gem className="w-6 h-6 text-luxury-gold" />;
      case 'Award':
        return <Icons.Award className="w-6 h-6 text-luxury-gold" />;
      case 'Sparkles':
        return <Icons.Sparkles className="w-6 h-6 text-luxury-gold" />;
      case 'Eye':
        return <Icons.Eye className="w-6 h-6 text-luxury-gold" />;
      case 'Clock':
        return <Icons.Clock className="w-6 h-6 text-luxury-gold" />;
      case 'Heart':
        return <Icons.Heart className="w-6 h-6 text-luxury-gold" />;
      default:
        return <Icons.Check className="w-6 h-6 text-luxury-gold" />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-luxury-beige relative overflow-hidden" id="why-choose-us">
      {/* Absolute decorative outlines */}
      <div className="absolute top-1/2 left-10 w-96 h-96 border border-neutral-200/50 rounded-full mix-blend-multiply filter blur-2xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] border border-neutral-200/50 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
            Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight">
            Curated Standards For <br />
            <span className="italic font-light">Uncompromised Living</span>
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6" />
          <p className="font-sans text-neutral-500 font-light text-base md:text-lg max-w-2xl mx-auto pt-2">
            We operate in an elite tier, assembling spaces designed not just to withstand time, but to expand in status, value, and structural beauty across generations.
          </p>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="why-reasons-grid">
          {CHOOSE_US_REASONS.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-lg border border-neutral-100 hover:border-luxury-gold/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-[280px] group relative overflow-hidden"
              id={`why-card-${reason.id}`}
            >
              {/* Dynamic light swipe background on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-beige/10 via-transparent to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Card top half */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-luxury-beige/50 group-hover:bg-neutral-905 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  {renderIcon(reason.iconName)}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-luxury-dark font-medium tracking-tight mt-4">
                  {reason.title}
                </h3>
              </div>

              {/* Card bottom half and text */}
              <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Little bottom corner design dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-neutral-200 group-hover:bg-luxury-gold rounded-full transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

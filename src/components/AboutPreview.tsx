import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Layers, Users, Calendar, ArrowRight, ArrowDown } from 'lucide-react';
import { LUXURY_STATS } from '../utils/data';

export default function AboutPreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map icon keys to represent the stats in luxury aesthetic
  const getStatIcon = (label: string) => {
    switch (label) {
      case 'Years Experience':
        return <Calendar className="w-5 h-5 text-luxury-gold" />;
      case 'Projects Delivered':
        return <Layers className="w-5 h-5 text-luxury-gold" />;
      case 'Client Satisfaction':
        return <Award className="w-5 h-5 text-luxury-gold" />;
      case 'Design Experts':
        return <Users className="w-5 h-5 text-luxury-gold" />;
      default:
        return <Award className="w-5 h-5 text-luxury-gold" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative premium background hints */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-beige/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Overlap Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Primary Main Image Container */}
            <div className="relative aspect-4/3 rounded overflow-hidden shadow-2xl group border border-luxury-border/40">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural structure exterior craftsmanship"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none" />
            </div>

            {/* Float Badge/Sub-image representing heritage */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -bottom-10 -right-6 md:right-10 w-44 sm:w-56 p-4 sm:p-5 bg-neutral-900 text-white rounded-lg shadow-2xl border border-neutral-800 flex items-center gap-4"
            >
              <div className="p-3 bg-luxury-gold/10 border border-luxury-gold/40 rounded-sm">
                <Award className="w-6 h-6 text-luxury-gold animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-luxury-gold leading-tight">Elite Label</span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400 mt-1">SIA & RIBA Member</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative Block */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
              id="about-headers"
            >
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
                About Company
              </span>
              <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight tracking-tight">
                Designing Spaces That <br />
                <span className="italic font-light">Define Excellence</span>
              </h2>
            </motion.div>

            {/* Narrative Description text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="prose prose-neutral text-neutral-600 font-sans font-light text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                Founded on the pillars of timeless geometry and absolute bespoke finish, Aurelia works closely with elite private clients and developers to engineer structural icons of living art. We challenge traditional limits, establishing absolute harmony between structural weight, daylight pathways, and organic surroundings.
              </p>
              <p>
                For over two decades, our multi-disciplinary studio has managed the entire lifecycle of high-status architecture, bespoke interior curation, and heavy construction, delivering uncompromising luxury.
              </p>

              {/* Revealable details for Read More */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-neutral-100 pt-6 mt-6 space-y-4 text-sm md:text-base"
                    id="read-more-expanded-text"
                  >
                    <p className="font-medium text-luxury-dark">Our Architectural Manifesto:</p>
                    <p>
                      Every plot of land holds a unique physical song. We map wind channels, solar coordinates, and topographical slopes to synthesize structures that respect local ground layers while reflecting global cosmopolitan quality.
                    </p>
                    <p>
                      We limit ourselves to a select cohort of 12 active commissions worldwide each year. This exclusive policy guarantees our signature white-glove engineering detail and custom site dedication.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Read More Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-luxury-dark hover:text-luxury-gold font-sans font-semibold text-xs uppercase tracking-widest mt-2 border-b border-luxury-dark hover:border-luxury-gold pb-1 transition-all focus:outline-none"
                id="btn-about-read-more"
              >
                {isExpanded ? 'Show Less' : 'Read Our Manifesto'}
                {isExpanded ? <ArrowDown className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </motion.div>

            {/* Stats Cards Grid Section */}
            <div className="grid grid-cols-2 gap-4 pt-6" id="stats-grid">
              {LUXURY_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="bg-neutral-50 hover:bg-white p-5 rounded border border-neutral-100 hover:border-luxury-gold/35 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-36 relative group"
                  id={`stat-card-${idx}`}
                >
                  <div className="bg-white group-hover:bg-luxury-beige p-2 rounded-sm w-fit transition-colors border border-neutral-100/80">
                    {getStatIcon(stat.label)}
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-3xl md:text-4xl font-bold text-luxury-dark tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 font-medium block">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

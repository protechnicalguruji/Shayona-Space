import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Hammer, Sparkles, Trophy, Building, TrendingUp, Calendar } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  statsLabel?: string;
  statsValue?: string;
}

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  const events: TimelineEvent[] = [
    {
      year: '2006',
      title: 'The Foundation',
      subtitle: 'Monaco Atelier Conception',
      description: 'Aurelia began as a small boutique architecture atelier on the Monaco waterfront. Armed with a single drafting desk and a commitment to material authenticity, we secured our first commission for a private cliffside residence.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'INITIAL TEAM',
      statsValue: '3 Artisans'
    },
    {
      year: '2010',
      title: 'First Major Landmark',
      subtitle: 'The Elysian Heights Villa',
      description: 'Our dual-cantilever foundation design for the Elysian heights villa established Aurelia as a fearless player in luxury cliffside engineering, triggering immediate luxury press features and high-altitude accolades.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'PROJECT AREA',
      statsValue: '12,500 sq ft'
    },
    {
      year: '2015',
      title: 'Continental Expansion',
      subtitle: 'Opening of London Studio',
      description: 'Opening of our private satellite office in Mayfair, London. This expansion allowed us to tackle heritage Georgian restoration projects, integrating subterranean smart luxury pools beneath 18th-century masonry.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'GLOBAL REACH',
      statsValue: '2 Capital Cities'
    },
    {
      year: '2019',
      title: 'Prestigious Recognition',
      subtitle: 'Monegasque Spatial Design Grand Prix',
      description: 'Aurelia won the architectural grand prix for ecological integration. Our biophilic air filtration and native materials guidelines became a template for climate-focused elite villas.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1579721507534-89d435c59b90?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'INDUSTRY AWARDS',
      statsValue: '12 Laurels'
    },
    {
      year: '2022',
      title: 'Major Biophilic Milestones',
      subtitle: 'Tokyo HQ Architectural Draft',
      description: 'Drafting of the active seismic tuned-mass damper biophilic financial headquarters in Shibuya, Tokyo. This project secured our wellness-enhancing WELL Platinum credentials.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'COMMERCIAL FOOTPRINT',
      statsValue: '84,000 sq ft'
    },
    {
      year: '2026',
      title: 'Current Luxury Success',
      subtitle: 'Digital Twin Carbon-Neutral Construction',
      description: 'Leading the global industry in custom high-fidelity residential design. Aurelia now operates as an premium completely full-integrated end-to-end service, employing over 65 design and engineering professionals.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      statsLabel: 'ACTIVE REVENUE VALUE',
      statsValue: '€180M Portfolio'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="our-journey">
      <div className="absolute top-0 left-0 w-24 h-full border-r border-luxury-border/30 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header and description */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-10 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Interactive Timeline
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight">
            Our Historical <span className="text-luxury-gold italic">Journey</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide mt-4 max-w-xl">
            Click on any milestone year to reveal the architectural drafts, challenges, and structural scale achieved during that specific design era.
          </p>
        </div>

        {/* Master layout for interactive timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Year Selection Timeline Rail */}
          <div className="lg:col-span-4 relative flex lg:flex-col items-center lg:items-start gap-4 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            
            {/* Desktop Vertical Connector Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-luxury-border hidden lg:block" />

            {events.map((ev, index) => {
              const EventIcon = ev.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={ev.year}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 py-3 px-5 lg:py-4 lg:px-6 rounded-lg border text-left cursor-pointer focus:outline-none transition-all duration-300 whitespace-nowrap lg:whitespace-normal w-auto lg:w-full select-none ${
                    isActive
                      ? 'bg-neutral-950 border-neutral-950 text-white shadow-lg lg:translate-x-3'
                      : 'bg-neutral-50 border-luxury-border hover:bg-neutral-100/70 text-neutral-600'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isActive 
                      ? 'bg-luxury-gold border-luxury-gold text-white' 
                      : 'bg-white border-luxury-border text-neutral-400 group-hover:text-luxury-gold'
                  }`}>
                    <EventIcon className="w-4.5 h-4.5" />
                  </div>

                  {/* Year & Title text */}
                  <div>
                    <p className={`font-mono text-sm tracking-widest font-extrabold ${isActive ? 'text-luxury-gold' : 'text-neutral-500'}`}>
                      {ev.year}
                    </p>
                    <p className="font-serif text-sm font-medium leading-tight lg:-mt-0.5">
                      {ev.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display area of selected event */}
          <div className="lg:col-span-8 bg-neutral-50 border border-luxury-border p-8 md:p-12 lg:p-16 rounded-lg shadow-inner min-h-[440px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text specifics */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                      <span className="font-mono text-xs tracking-widest text-[#B08D57] font-bold">
                        MILESTONE YEAR {events[activeIndex].year}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-luxury-dark tracking-tight mb-2">
                      {events[activeIndex].title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
                      {events[activeIndex].subtitle}
                    </p>

                    <p className="font-sans text-sm text-neutral-600 font-light leading-relaxed tracking-wide">
                      {events[activeIndex].description}
                    </p>
                  </div>

                  {/* Floating metric stats indicator if available */}
                  {events[activeIndex].statsLabel && (
                    <div className="mt-8 pt-6 border-t border-luxury-border flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                          {events[activeIndex].statsLabel}
                        </p>
                        <p className="font-serif text-xl font-bold text-luxury-dark mt-0.5">
                          {events[activeIndex].statsValue}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-luxury-gold">
                        AUTHENTIC RECORD
                      </span>
                    </div>
                  )}
                </div>

                {/* Picture Frame */}
                <div className="md:col-span-5 h-full aspect-[4/3] md:aspect-auto md:h-80 rounded overflow-hidden shadow-md relative border border-luxury-border bg-neutral-200">
                  <motion.img
                    src={events[activeIndex].image}
                    alt={events[activeIndex].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] font-mono tracking-widest uppercase text-neutral-700 rounded border border-luxury-border/30">
                    Aura Archive
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

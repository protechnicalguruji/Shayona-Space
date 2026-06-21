import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../utils/data';

export default function ServicesPreview() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Icons.Compass className="w-6 h-6 text-luxury-gold" />;
      case 'Palette':
        return <Icons.Palette className="w-6 h-6 text-luxury-gold" />;
      case 'Hammer':
        return <Icons.Hammer className="w-6 h-6 text-luxury-gold" />;
      case 'Layers':
        return <Icons.Layers className="w-6 h-6 text-luxury-gold" />;
      case 'RotateCw':
        return <Icons.RotateCw className="w-6 h-6 text-luxury-gold" />;
      case 'Flower':
        return <Icons.Flower className="w-6 h-6 text-luxury-gold" />;
      default:
        return <Icons.Layers className="w-6 h-6 text-luxury-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-luxury-beige relative overflow-hidden">
      {/* Decorative premium items */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neutral-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
            Craft capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight">
            Our Premium Services & <br />
            <span className="italic font-light">Turnkey Architectural Couture</span>
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6" />
          <p className="font-sans text-neutral-500 font-light text-base md:text-lg max-w-2xl mx-auto pt-2">
            Providing absolute multi-disciplinary accountability. We manage the delicate bridge between structural physics, exquisite interior details, and site engineering.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="bg-white p-8 md:p-10 rounded-lg border border-neutral-100/80 hover:border-luxury-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-[420px] group relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Gold layout underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-luxury-gold w-0 group-hover:w-full transition-all duration-500" />

              {/* Dynamic top-right corner background light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-luxury-beige/30 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header half */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-luxury-beige/50 group-hover:bg-luxury-gold/10 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-light border border-neutral-100 px-2.5 py-1 rounded">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-luxury-dark font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-luxury-gold font-semibold">
                    {service.subtitle}
                  </p>
                </div>

                <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bullet list of details revealed on hover or tap */}
              <div className="relative mt-4">
                <AnimatePresence>
                  {activeCard === service.id && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-[11px] font-sans text-neutral-500 font-light border-t border-neutral-100 pt-4 space-y-1.5 hidden md:block"
                    >
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-1.5 text-neutral-600">
                          <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* Arrow slide animation */}
                <div className="flex items-center gap-2 text-luxury-dark font-sans text-xs uppercase tracking-widest font-semibold mt-4 cursor-pointer">
                  <span className="group-hover:text-luxury-gold transition-colors duration-300">Explore service details</span>
                  <motion.div
                    animate={{ x: activeCard === service.id ? 6 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Icons.ArrowRight className="w-4 h-4 text-luxury-gold" />
                  </motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

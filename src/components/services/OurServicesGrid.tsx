import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from './servicesData';
import { ServiceItem } from './types';
import * as LucideIcons from 'lucide-react';

interface OurServicesGridProps {
  onSelectService: (serviceId: string) => void;
}

export default function OurServicesGrid({ onSelectService }: OurServicesGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'specialized' | 'management'>('all');

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'core', label: 'Core Design & Build' },
    { key: 'specialized', label: 'Bespoke Typologies' },
    { key: 'management', label: 'Curation & Oversight' }
  ];

  const filteredServices = SERVICES_DATA.filter(service => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  const getIconComponent = (iconName: string) => {
    // Dynamically retrieve lucide components
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-luxury-gold" />;
    }
    return <LucideIcons.Check className="w-5 h-5 text-luxury-gold" />;
  };

  return (
    <section className="bg-neutral-950 py-24 md:py-32 relative text-white" id="our-services-grid">
      {/* Absolute faint linear framing */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header container */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
              OUR COMPLETE CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-none">
              A Complete Suite of <span className="italic font-normal text-luxury-gold">Luxury Solvers</span>
            </h2>
            <p className="font-sans text-neutral-400 font-light text-xs md:text-sm leading-relaxed tracking-wide">
              We govern 12 discrete architectural, styling, and structural engineering disciplines. Select a service card below to instantly trigger a fully integrated master deep-dive spec panel.
            </p>
          </div>

          {/* Filtering row */}
          <div className="flex flex-wrap gap-2.5 max-w-full overflow-x-auto self-start bg-neutral-900/40 p-1.5 border border-neutral-800/60 rounded">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key as any)}
                className={`px-4 py-2 rounded text-[10px] font-sans font-bold uppercase tracking-widest transition-all focus:outline-none cursor-pointer ${
                  activeTab === cat.key
                    ? 'bg-luxury-gold text-black shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
                id={`filter-tab-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Services Grid Box */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="services-cards-deck"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.6, delay: idx * 0.03, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
                className="group relative h-[420px] bg-neutral-900 border border-neutral-850 hover:border-luxury-gold/50 rounded flex flex-col justify-between overflow-hidden shadow-lg transition-all"
                id={`service-card-${service.id}`}
              >
                {/* Background Image Container with Ken Burns effect hover */}
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-neutral-950/20 transition-all duration-700" />
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 border border-neutral-800/60 rounded text-[8px] uppercase font-bold tracking-widest text-[#B08D57]">
                    {service.category}
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between relative">
                  <div className="space-y-3.5">
                    
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                        {getIconComponent(service.iconName)}
                      </div>
                      <h3 className="font-serif text-lg text-white font-medium group-hover:text-luxury-gold transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed tracking-wide font-light">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Navigation trigger button */}
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="self-start text-[9px] uppercase tracking-[0.25em] font-sans font-extrabold text-luxury-gold hover:text-white transition-colors flex items-center gap-2 mt-4 cursor-pointer focus:outline-none"
                    id={`btn-read-more-${service.id}`}
                  >
                    <span>Deep Dive Spec</span>
                    <LucideIcons.ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

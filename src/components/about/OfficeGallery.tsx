import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Compass, Building, Calendar, Phone, Mail, Clock } from 'lucide-react';

interface OfficeLocation {
  id: string;
  name: string;
  coordinates: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  mapEmbedUrl: string; // Embed Google maps or custom map visual
}

export default function OfficeGallery() {
  const [activeOfficeId, setActiveOfficeId] = useState('monaco');

  const offices: OfficeLocation[] = [
    {
      id: 'monaco',
      name: 'Monaco Peninsula Head Ateliers',
      coordinates: 'N 43.7384° / E 7.4246°',
      address: '7 Avenue Crovetto-l\'Agiat, 98000 Monaco',
      phone: '+377 93 42 18 00',
      email: 'monaco@aurelia.com',
      hours: '09:00 AM - 06:00 PM CET',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Monaco&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'london',
      name: 'Mayfair Heritage Studio',
      coordinates: 'N 51.5074° / W 0.1278°',
      address: '24 Bruton Place, Mayfair, London W1J 6NE, United Kingdom',
      phone: '+44 20 7946 0192',
      email: 'london@aurelia.com',
      hours: '09:00 AM - 06:00 PM GMT',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Mayfair,London&t=&z=13&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const activeOffice = offices.find(o => o.id === activeOfficeId) || offices[0];

  return (
    <section className="py-24 bg-luxury-beige/40 relative overflow-hidden text-luxury-dark" id="office-gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <span className="w-10 h-[1px] bg-luxury-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                Atelier Gallery
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight">
              Interactive Office <span className="text-luxury-gold italic">Ateliers</span>
            </h2>
          </div>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light max-w-md tracking-wide leading-relaxed">
            Our teams operate from pristine, biophilic designed studios engineered to foster maximum spatial innovation and design clarity.
          </p>
        </div>

        {/* Dual selector tabs */}
        <div className="flex items-center gap-4 mb-12 border-b border-luxury-border pb-4">
          {offices.map((off) => (
            <button
              key={off.id}
              onClick={() => setActiveOfficeId(off.id)}
              className={`pb-4 px-2 text-sm uppercase tracking-widest font-sans font-bold relative transition-colors cursor-pointer focus:outline-none ${
                activeOfficeId === off.id ? 'text-luxury-dark' : 'text-neutral-400 hover:text-luxury-dark'
              }`}
            >
              {off.id === 'monaco' ? 'Monaco HQ' : 'London Mayfair'}
              {activeOfficeId === off.id && (
                <motion.span 
                  layoutId="activeOfficeBorder"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Office details and map block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office description, features and contact coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOfficeId}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                    AURA CORE LOCATION
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-luxury-dark mt-1">
                    {activeOffice.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold font-semibold mt-1">
                    COORDINATES: {activeOffice.coordinates}
                  </p>
                </div>

                <p className="font-sans text-sm text-neutral-600 font-light leading-relaxed tracking-wide">
                  Our private clients are invited to schedule drafting workshops here. The {activeOffice.id === 'monaco' ? 'Monaco waterfront' : 'Mayfair London'} studio exhibits natural limestone flooring, raw cedar sample trays, and structural glass walls representing our signature material restraint.
                </p>

                {/* Specific features checklist */}
                <div className="grid grid-cols-1 gap-4 pt-6 border-t border-luxury-border/60">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-sans text-xs text-neutral-600">{activeOffice.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-sans text-xs text-neutral-600">{activeOffice.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-sans text-xs text-neutral-600">{activeOffice.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-sans text-xs text-neutral-600">{activeOffice.hours}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Photo & Map Display Row */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[400px]">
            {/* Atelier interior photo box */}
            <div className="rounded overflow-hidden border border-luxury-border shadow-sm group bg-neutral-100 h-80 md:h-full relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeOfficeId}
                  src={activeOffice.image}
                  alt={activeOffice.name}
                  className="w-full h-full object-cover transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-white/90 bg-neutral-950/70 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                Atelier Interior
              </span>
            </div>

            {/* Custom Interactive Safe Satellite Map Embed */}
            <div className="rounded overflow-hidden border border-luxury-border shadow-sm bg-neutral-100 h-80 md:h-full relative">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeOfficeId}
                  src={activeOffice.mapEmbedUrl}
                  className="w-full h-full border-0 absolute inset-0 z-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              {/* Overlay styling ribbon to match the luxury UI theme */}
              <div className="absolute top-4 right-4 bg-luxury-dark text-[#C6A36B] font-mono text-[8px] uppercase tracking-widest px-3 py-1 bg-black/85 backdrop-blur-md rounded border border-neutral-800 z-10 pointer-events-none">
                SATELLITE POSITION • ACTIVE
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

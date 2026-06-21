import React from 'react';
import { motion } from 'motion/react';
import { Compass, Eye, Sunrise, Sparkles } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="mission-vision">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#B08D57]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-10 w-96 h-96 bg-neutral-950/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Intro header area */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Inward Purpose
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-4">
            Our Architectural <span className="text-luxury-gold italic">Calling</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            Every master floorplan and structural angle is driven by a profound intent to combine safety, beauty, and environmental stewardship.
          </p>
        </div>

        {/* Dual Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative p-8 md:p-12 lg:p-16 rounded-lg bg-neutral-50/70 border border-luxury-border hover:border-luxury-gold/50 transition-colors group shadow-lg flex flex-col justify-between"
            id="mission-card"
          >
            {/* Absolute decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              {/* Premium Icon Header */}
              <div className="inline-flex items-center justify-center p-4 bg-white border border-luxury-border/60 rounded shadow-sm text-luxury-gold mb-8 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                <Compass className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl lg:text-3xl text-luxury-dark font-medium tracking-tight mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                Our Mission
              </h3>

              {/* Sub-label marker */}
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold mb-6">
                TO CRAFT EXCELLENCE WITHOUT EXCEPCION
              </p>

              {/* Paragraph details */}
              <p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed tracking-wide mb-6">
                To serve as the supreme standard in global architectural planning and master construction management. We design and deliver custom architectural solutions that offer absolute stability, exceptional performance, and emotional power. We strive to protect our clients' high ambitions through pristine structural integrity and bespoke finish details.
              </p>
            </div>

            {/* List checklist points */}
            <ul className="space-y-3 mt-4 text-xs font-sans text-neutral-500 font-light border-t border-luxury-border/40 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Dual LEED/WELL Outstanding structural benchmarks.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Uncompromising safety and carbon neutral framework.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Absolute visual coordination from sketches to bespoke hand-delivery.
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative p-8 md:p-12 lg:p-16 rounded-lg bg-neutral-50/70 border border-luxury-border hover:border-luxury-gold/50 transition-colors group shadow-lg flex flex-col justify-between"
            id="vision-card"
          >
            {/* Absolute decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              {/* Premium Icon Header */}
              <div className="inline-flex items-center justify-center p-4 bg-white border border-luxury-border/60 rounded shadow-sm text-luxury-gold mb-8 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                <Eye className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl lg:text-3xl text-luxury-dark font-medium tracking-tight mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                Our Vision
              </h3>

              {/* Sub-label marker */}
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold mb-6">
                PERSPECTIVE FOR THE FUTURE ERA
              </p>

              {/* Paragraph details */}
              <p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed tracking-wide mb-6">
                To pioneer biophilic modern structures that transform city skyline proportions and foster dynamic workspaces where human well-being thrives. We see a near future where physical structures coexist organically with local landscapes—drawing passive energy, circulating pure air, and elevating user consciousness through highly calculated, inspiring geometric volume.
              </p>
            </div>

            {/* List checklist points */}
            <ul className="space-y-3 mt-4 text-xs font-sans text-neutral-500 font-light border-t border-luxury-border/40 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Next-generation smart active building envelope materials.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Praising cultural architectural heritage in modern forms.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Creating resilient communities that flourish for centuries.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

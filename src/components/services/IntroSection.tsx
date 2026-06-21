import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Heart, Shield } from 'lucide-react';

export default function IntroSection() {
  const metrics = [
    { value: '180+', label: 'Delivered Masterpieces' },
    { value: '12+', label: 'Global Design Awards' },
    { value: '0', label: 'Material Defect Complaints' },
    { value: '100%', label: 'Sovereign Satisfaction' }
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Pristine Material Sourcing',
      desc: 'We directly contract with elite quarry masters in Carrara and family millers in Kyoto to source pure structural materials with structural lifespan sheets.'
    },
    {
      icon: Award,
      title: 'Flawless Architecture Craft',
      desc: 'Zero-margin structural engineering ensuring that cantilever heights, water flows, acoustics, and climate insulation align past strict code compliance indices.'
    }
  ];

  return (
    <section className="bg-[#F8F6F2] py-24 md:py-32 overflow-hidden" id="about-intro">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Vision Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-luxury-gold font-bold block mb-3">
                INTEGRATED SWISS EXCELLENCE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark tracking-tight leading-tight">
                An Absolute Commitment to <span className="italic font-normal font-serif text-luxury-gold">Craft, Science, and Sovereignty</span>
              </h2>
            </div>

            <p className="font-sans text-neutral-600 font-light text-sm md:text-base leading-relaxed tracking-wide">
              For over three decades, Aurelia has operated at the intersection of structural art and engineering precision. We recognize that premium spatial layouts represent your personal asset registry, legacy collection, and family safety.
            </p>

            <p className="font-sans text-neutral-500 font-light text-sm leading-relaxed">
              We operate completely under sovereign private contracts, guaranteeing absolute client non-disclosure while deploying premium, eco-passive geothermal systems, high-altitude materials, and bespoke Italian joinery.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {pillars.map((pil, idx) => {
                const IconComp = pil.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1 px-1.5 bg-luxury-gold/10 text-luxury-gold rounded">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-base text-luxury-dark font-medium">{pil.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light font-sans">{pil.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-luxury-border/80">
              {metrics.map((met, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl md:text-3xl font-medium text-luxury-dark tracking-tight">
                    {met.value}
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-wider text-neutral-400 font-medium leading-tight">
                    {met.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Layered Masterpiece Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-105px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background absolute colored badge */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-luxury-gold/5 rounded-md pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neutral-900/5 rounded-md pointer-events-none" />

            {/* Primary Image card with high-contrast frame */}
            <div className="relative z-10 border border-luxury-border/60 p-4.5 bg-white rounded shadow-2xl">
              <div className="overflow-hidden rounded">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Aurelia Switzerland Architectural Office"
                  className="w-full h-[320px] md:h-[460px] object-cover hover:scale-103 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Overlay Badge representing technical validation */}
            <div className="absolute -right-4 bottom-12 z-20 bg-luxury-dark text-white p-5 rounded shadow-xl border border-neutral-800 max-w-xs font-sans">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-luxury-gold/20 text-luxury-gold self-start">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-1">
                    Swiss SIA-102 Certified
                  </h5>
                  <p className="text-[10px] text-neutral-400 leading-normal font-light">
                    Every project is locked under strict SIA standards, representing sovereign insurance layers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

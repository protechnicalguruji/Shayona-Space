import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Award, ShieldCheck } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-24 lg:py-32 bg-luxury-beige relative overflow-hidden" id="our-story">
      {/* Absolute Decorative Geometric Line */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-luxury-border/30 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Overlapping High-End Architecture Visuals */}
          <div className="lg:col-span-6 relative mt-6 md:mt-12 lg:mt-0">
            {/* Main Immersive Hero Picture frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded overflow-hidden shadow-2xl z-10 border border-luxury-border/50 bg-neutral-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=1500" 
                alt="Aurelia Architect Drafting" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out"
                referrerPolicy="no-referrer"
              />
              {/* Premium Floating Core Stats Box on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded shadow-lg border border-luxury-border/30 z-20 flex justify-between items-center">
                <div className="text-left">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">DESIGN STANDARD</p>
                  <p className="font-serif text-lg font-bold text-luxury-dark mt-0.5">Sartorial Precision</p>
                </div>
                <div className="h-8 w-[1px] bg-luxury-border" />
                <div className="text-right">
                  <p className="font-sans text-xs text-neutral-500 font-light">Every project we carve tells an authentic historical truth.</p>
                </div>
              </div>
            </motion.div>

            {/* Back Decorating Offset Box with Gold Edge Border */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 0.15, x: -15, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute -bottom-10 -left-10 w-full h-full border border-luxury-gold pointer-events-none rounded z-0 hidden sm:block"
            />
            
            {/* Absolute Brand Crest Marker */}
            <div className="absolute -top-10 -right-4 w-24 h-24 bg-[#B08D57]/5 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag Label */}
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-10 h-[1px] bg-luxury-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                Our Story
              </span>
            </div>

            {/* Section Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-8"
            >
              Building More Than <br />
              <span className="text-luxury-gold italic">Timeless Spaces</span>
            </motion.h2>

            {/* Narrative text paragraphs */}
            <div className="space-y-6 text-neutral-600 font-sans text-sm md:text-base font-light leading-relaxed tracking-wide">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Founded on the windswept coastal cliffs of Monaco in 2006, <strong>Aurelia Architecture &amp; Design</strong> arose from a singular conviction: that true luxury is not defined by simple opulence, but by structural truth, exquisite restraint, and deep visual harmony.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Over the past two decades, our journey has taken us from crafting custom-built cliffside villas to orchestrating expansive biophilic commercial headquarters and bespoke alpine retreats. Our multidisciplinary team of visionary architects, master structural engineers, and interior artisans collaborate under a unified banner to control every facet of the spatial creation process.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our core philosophy blends centuries-old European craftsmanship with the vanguard of climate-conscious building technologies. We select only authentic materials—sustainable cedarwood, precision-cut Carrara marble, and titanium framing—ensuring every structure we craft remains resilient for generations to come.
              </motion.p>
            </div>

            {/* Brief Feature Row Icons */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-luxury-border/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-50 border border-luxury-border/40 text-luxury-gold mt-1">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-luxury-dark">EST. 2006</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Two decades of custom elite architectural design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-50 border border-luxury-border/40 text-luxury-gold mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-luxury-dark">Award-Winning</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Accoladed consistently in Tokyo, London &amp; Monaco.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

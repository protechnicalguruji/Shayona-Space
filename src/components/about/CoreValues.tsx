import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Shield, Award, Eye, CreativeCommons, HeartHandshake, Box } from 'lucide-react';

interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sublabel: string;
  description: string;
}

export default function CoreValues() {
  const values: CoreValue[] = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      sublabel: 'PIONEERING DESIGN PATHS',
      description: 'We continuously model advanced structural techniques and passive energy methods to deliver modern avant-garde living concepts.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      sublabel: 'UNCOMPROMISING PRINCIPLES',
      description: 'We prioritize professional honesty and clear contract terms over short-cuts. Every concrete pour matches structural expectations.'
    },
    {
      icon: Award,
      title: 'Quality',
      sublabel: 'THE AURELIA BENCHMARK',
      description: 'We tolerate zero flaws. From structural tension rod configurations to Italian marble vein continuity, we craft spaces with precision.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      sublabel: 'OPEN-BOOK CLIENT ENGAGEMENTS',
      description: 'We provide full real-time access to sub-contractor pricing models, live materials supply logs, and project timeline milestones.'
    },
    {
      icon: CreativeCommons, // Wait, we can use an alternative elegant icon from lucide like Box or Sparkles. Let's use Box/Sparkles for Creativity
      title: 'Creativity',
      sublabel: 'POETIC GEOMETRIC FORMS',
      description: 'We eschew the standard corporate block templates. We conceptualize custom biophilic frameworks designed to lift spirits.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      sublabel: 'TAILORED PRIVATE CARE',
      description: 'Our bespoke customer care coordinators support your family or leadership team through every regulatory approvals stage.'
    }
  ];

  return (
    <section className="py-24 bg-luxury-beige relative overflow-hidden" id="core-values">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-10 md:left-24 lg:left-32 w-[1px] bg-luxury-border/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-10 md:right-24 lg:right-32 w-[1px] bg-luxury-border/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <span className="w-10 h-[1px] bg-luxury-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                How We Operat
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight">
              Our Core <span className="text-luxury-gold italic">Values</span>
            </h2>
          </div>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light max-w-md tracking-wide leading-relaxed">
            These structural pillars reflect our commitment to excellence, ensuring absolute visual luxury paired with total engineering competence.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, index) => {
            const IconComponent = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white p-8 lg:p-10 rounded border border-luxury-border shadow-sm hover:shadow-xl hover:border-luxury-gold/40 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  {/* Icon holder with golden circles */}
                  <div className="w-12 h-12 rounded bg-luxury-beige border border-luxury-border flex items-center justify-center text-luxury-gold group-hover:bg-luxury-dark group-hover:text-white group-hover:border-luxury-dark transition-all duration-500 mb-8">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-luxury-dark tracking-tight mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {v.title}
                  </h3>

                  {/* Tiny metadata sublabel */}
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold mb-4">
                    {v.sublabel}
                  </p>

                  {/* Description Paragraph */}
                  <p className="font-sans text-xs md:text-sm text-neutral-500 font-light leading-relaxed tracking-wide">
                    {v.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-luxury-border/40 mt-6 flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-neutral-400 group-hover:text-luxury-gold transition-colors">
                  <span>Aura Standard</span>
                  <span>0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

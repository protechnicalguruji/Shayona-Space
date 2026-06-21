import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Sparkles, Sliders, MessageSquare, Clock, 
  HeartHandshake, Cpu, UserCheck 
} from 'lucide-react';

export default function WhyChooseUsGrid() {
  const features = [
    {
      icon: Users,
      title: 'Experienced Master Team',
      desc: 'Our design floor aggregates licensed architects from SIA Zurich, LEED consultants, and structural engineers with 35+ years of custom luxury building tenure.'
    },
    {
      icon: Sparkles,
      title: 'Innovative Structural Designs',
      desc: 'Formulating cantilevered structures, custom curves, thermal glass facades, and modular layout zones certified to gain immediate architectural praise.'
    },
    {
      icon: Sliders,
      title: 'Sovereign Premium Materials',
      desc: 'We directly control supply contracts, sourcing pure hand-carved limestone blocks, Italian volcanic plasters, and customized triple-glazed frame sheets.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Collaboration',
      desc: 'Weekly costs spreadsheets, active video construction logs, and direct access doors to principal designers ensure absolute, clutter-free communications.'
    },
    {
      icon: Clock,
      title: 'Timely Swiss Deliveries',
      desc: 'We utilize strict scheduling algorithms, coordinating 38 separate subcontractor guilds to hand over finished keys on the planned calender hour.'
    },
    {
      icon: HeartHandshake,
      title: 'Full Post-Handover support',
      desc: 'Aurelia maintains continuous client relationship loops, reviewing mechanical filter systems, home electronics, and stone weathering annually.'
    },
    {
      icon: Cpu,
      title: 'Modern Generative Tech',
      desc: 'We design within smart BIM databases, running advanced solar pathway audits, thermal escape scans, and material tension audits digitally.'
    },
    {
      icon: UserCheck,
      title: 'Customer-Centric Discretion',
      desc: 'Our projects are insulated under strict legal sovereign privacy covenants. Client accounts are kept strictly protected from commercial publications.'
    }
  ];

  return (
    <section className="bg-[#F8F6F2] py-24 md:py-32 relative overflow-hidden" id="why-choose-us">
      {/* Delicate background shapes */}
      <div className="absolute top-[10%] left-[85%] w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[85%] w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header content block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
              OUR DISTINCT ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark tracking-tight leading-none">
              Formulating an <span className="italic font-normal text-luxury-gold">Unrivaled Standard</span>
            </h2>
          </div>
          <p className="font-sans text-neutral-500 font-light text-xs md:text-sm max-w-md leading-relaxed">
            By controlling materials flow, technical planning, and on-site building execution in-house, we eliminate the classic errors of fragmented multi-vendor contracts.
          </p>
        </div>

        {/* 8 Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-grid-box">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.04, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-white border border-luxury-border shadow-sm rounded flex flex-col justify-between hover:border-luxury-gold hover:shadow-xl transition-all"
                id={`feature-card-${idx}`}
              >
                <div className="space-y-4">
                  {/* Icon Card sphere indicator */}
                  <div className="w-10 h-10 rounded bg-[#F8F6F2] group-hover:bg-luxury-gold/10 text-neutral-700 group-hover:text-luxury-gold transition-colors flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title and descriptions */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-base text-luxury-dark font-medium group-hover:text-luxury-gold transition-colors">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-[11px] leading-relaxed text-neutral-500 font-light group-hover:text-neutral-600 transition-colors">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                {/* Micro branding link */}
                <div className="w-6 h-[1.5px] bg-neutral-200 group-hover:bg-luxury-gold group-hover:w-10 transition-all mt-6" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

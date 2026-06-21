import React from 'react';
import { motion } from 'motion/react';
import { FileSearch, MapPin, PencilRuler, Compass, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProcessStep {
  num: string;
  title: string;
  caption: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WorkProcess() {
  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Discovery',
      caption: 'VISION & FEASIBILITY',
      description: 'We initiate our process with deep consultation meetings to clarify aesthetic boundaries, draft budget parameters, and define environmental expectations.',
      icon: FileSearch
    },
    {
      num: '02',
      title: 'Site Visit',
      caption: 'GEONAL DIAGNOSTICS',
      description: 'Our engineers conduct precision geographical analysis of your estate bedrock, assessing solar ingress curves, wind loads, and heritage guidelines.',
      icon: MapPin
    },
    {
      num: '03',
      title: 'Planning',
      caption: 'SCHEMATIC APPROVALS',
      description: 'We generate structural blueprints and detailed compliance sheets, coordinating reviews with municipal bodies to secure prompt building licenses.',
      icon: Compass
    },
    {
      num: '04',
      title: 'Design',
      caption: 'VISUAL REFINEMENT',
      description: 'We refine interior architectural drafts, mapping materials selection (marbles, woods) and providing panoramic 3D walkthroughs.',
      icon: PencilRuler
    },
    {
      num: '05',
      title: 'Execution',
      caption: 'MASTER CRAFTSMANSHIP',
      description: 'Our logistics coordinators control on-site construction works, overseeing foundations tension rods and precise joineries installation.',
      icon: HardHat
    },
    {
      num: '06',
      title: 'Final Delivery',
      caption: 'HANDOVER & COMPREHENSIVE SCHEDULING',
      description: 'We walk through every millimeter of the premium estate with you, delivering complete digital systems guides and long-term client support logs.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-luxury-beige relative overflow-hidden" id="work-process">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block text */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Rigorous Logistics
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-4">
            Our Work <span className="text-luxury-gold italic">Process</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            From the initial conceptual drafting desks up to active marble installations, we enforce a strict 6-stage operational protocol to guarantee zero-flaw deliveries.
          </p>
        </div>

        {/* 6 Grid steps Timeline design with connector lines */}
        <div className="relative mt-12">
          {/* Connecting Line - Desktop Only */}
          <div className="absolute top-[52px] left-[150px] right-[150px] h-[1px] bg-luxury-border/80 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 relative z-10">
            {steps.map((st, index) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                  id={`process-step-${index}`}
                >
                  {/* Step bubble circle */}
                  <div className="w-24 h-24 rounded-full bg-white border border-luxury-border flex items-center justify-center relative group-hover:border-luxury-gold shadow-sm group-hover:shadow-md transition-all duration-300 mb-8 shrink-0">
                    
                    {/* Circle Background pulse */}
                    <div className="absolute inset-2 rounded-full border border-neutral-100 group-hover:border-luxury-gold/20 transition-all duration-300" />

                    <StepIcon className="w-8 h-8 text-neutral-400 group-hover:text-luxury-gold group-hover:scale-102 transition-all duration-300" />

                    {/* Step number badge sticker */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-neutral-950 text-white border border-neutral-800 flex items-center justify-center text-[10px] font-mono tracking-tighter select-none">
                      {st.num}
                    </div>
                  </div>

                  {/* Text properties */}
                  <div className="px-2 lg:px-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-2">
                      {st.caption}
                    </p>
                    <h3 className="font-serif text-xl font-medium text-luxury-dark tracking-tight mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                      {st.title}
                    </h3>
                    <p className="font-sans text-[11px] md:text-xs text-neutral-500 font-light leading-relaxed tracking-wide pr-1">
                      {st.description}
                    </p>
                  </div>

                  {/* Mobile Connecting arrow indicator */}
                  {index < steps.length - 1 && (
                    <div className="w-12 h-[1px] bg-luxury-gold/30 mt-8 block lg:hidden" />
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

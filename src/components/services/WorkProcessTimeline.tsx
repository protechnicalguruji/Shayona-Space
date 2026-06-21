import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Search, Paintbrush, FileSpreadsheet, HardHat, 
  Key, Check, ArrowRight, ShieldCheck, HelpCircle 
} from 'lucide-react';

export default function WorkProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Consultation Briefing',
      subtitle: 'Sovereign client discovery & site mapping',
      icon: Compass,
      desc: 'We map initial space limits, soil parameters, daylight vectors, financial projections, and security criteria inside a non-disclosure client ledger file.',
      dur: 'Week 1 - 2',
      bullets: ['Complete soil analysis', 'SLA and NDA validation', 'Topographical drone footage']
    },
    {
      title: 'Requirement Analysis',
      subtitle: 'Feasibility audits & programmatic spacing',
      icon: Search,
      desc: 'Our design panels cross-reference municipal restriction guidelines, building density indices, zoning parameters, and sustainable geothermal capacities.',
      dur: 'Week 3 - 4',
      bullets: ['Compliance documentation verify', 'Structure solar modeling', 'Acoustical feasibility studies']
    },
    {
      title: 'Concept Design',
      subtitle: 'Sculpting original geometric frameworks',
      icon: Paintbrush,
      desc: 'Drafting core architectural perspectives, balanced spatial divisions, and atmospheric facade structures using real glass, marble, and concrete specimen sheets.',
      dur: 'Month 2 - 3',
      bullets: ['Generative visual clay shapes', 'Atmospheric mood boards', 'Initial raw cost estimation']
    },
    {
      title: 'Detailed Planning',
      subtitle: 'Structuring technical blueprints & material logs',
      icon: FileSpreadsheet,
      desc: 'Compiling structural calculations, ventilation routes, custom joinery vectors, and precise lighting circuits into high-definition digital BIM models.',
      dur: 'Month 4 - 6',
      bullets: ['3D BIM structural assembly models', 'Subcontractor bids invitation', 'Municipal structural validation approval']
    },
    {
      title: 'Construction & Execution',
      subtitle: 'Physically building without tolerances',
      icon: HardHat,
      desc: 'Our on-site crews lay deep concrete friction piles, fabricate heavy high-tensile steel support rods, and apply certified premium-grade thermal cladding.',
      dur: 'Month 7 - 18',
      bullets: ['Continuous laser-alignment scanning', 'Weekly client photo/BIM logs', 'Zero-tolerance building QA audits']
    },
    {
      title: 'Final Handover',
      subtitle: 'Pristine setup curation & key ignition',
      icon: Key,
      desc: 'Full environmental cleaning, mechanical test validations, automated smart settings adjustments, visual staging curation, and delivery of operational logs.',
      dur: 'Month 19',
      bullets: ['Certified air purity checklist', 'Active utility control custom transfer', 'Prestige 150-year warranty registry']
    }
  ];

  return (
    <section className="bg-neutral-950 py-24 md:py-32 relative text-white overflow-hidden" id="our-process">
      {/* Structural background horizontal ribbon */}
      <div className="absolute top-[38%] left-0 right-0 h-[1px] bg-neutral-800/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section title header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
            THE STEWARDSHIP METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Six Steps to <span className="italic font-normal text-luxury-gold">Spatial Sovereignty</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm">
            We follow a mathematically structured sequence from early briefing stages to final turnkeys. This limits delays, minimizes cost errors, and guarantees architectural safety indices.
          </p>
        </div>

        {/* Desktop timeline controller track */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative" id="timeline-flow-box">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;

            return (
              <div 
                key={idx}
                className="flex flex-col items-center text-center cursor-pointer group focus:outline-none"
                onClick={() => setActiveStep(idx)}
                id={`timeline-step-trigger-${idx}`}
              >
                {/* Timeline Ball indicator */}
                <div className="relative mb-6">
                  {/* Glowing connector back */}
                  {idx < 5 && (
                    <div className="absolute top-1/2 left-10 lg:left-14 w-full h-[1.5px] bg-neutral-800 pointer-events-none hidden md:block">
                      <div 
                        className="h-full bg-luxury-gold transition-all duration-700" 
                        style={{ width: isCompleted ? '100%' : '0%' }}
                      />
                    </div>
                  )}

                  {/* Circle Bulb */}
                  <motion.div
                    animate={{
                      borderColor: isActive ? '#B08D57' : isCompleted ? '#B08D57' : '#2A2A2A',
                      scale: isActive ? 1.05 : 1
                    }}
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all bg-neutral-900 z-10 relative ${
                      isActive ? 'bg-[#B08D57]/10' : ''
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 text-luxury-gold" />
                    ) : (
                      <IconComp className={`w-5 h-5 transition-colors ${isActive ? 'text-luxury-gold' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                    )}

                    {/* Step Number Badge */}
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neutral-950 border border-neutral-800 text-[8px] font-mono flex items-center justify-center text-neutral-400 font-bold">
                      0{idx + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Step labels */}
                <div className="space-y-1 select-none">
                  <h4 className={`text-xs uppercase tracking-wider font-sans font-bold transition-colors ${isActive ? 'text-luxury-gold' : 'text-neutral-400 group-hover:text-white'}`}>
                    {st.title}
                  </h4>
                  <p className="text-[9px] text-neutral-500 tracking-wide font-mono uppercase">
                    {st.dur}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Step Detail Card (Under the controller) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-16 bg-neutral-900 border border-neutral-850 p-8 md:p-12 rounded grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative"
            id={`timeline-selected-detail-${activeStep}`}
          >
            {/* Background design accents */}
            <div className="absolute top-4 right-4 text-[7rem] font-serif italic text-neutral-850 select-none font-bold leading-none pointer-events-none">
              0{activeStep + 1}
            </div>

            {/* Left Column: Descriptive text */}
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-luxury-gold uppercase tracking-widest font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified milestone standard</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs uppercase tracking-widest font-sans font-semibold text-neutral-400 italic">
                  {steps[activeStep].subtitle}
                </p>
              </div>

              <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed tracking-wide">
                {steps[activeStep].desc}
              </p>

              {/* Progress Bar indicator */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>Methodology Sequence</span>
                  <span>{Math.round(((activeStep + 1) / 6) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1 bg-neutral-950 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-luxury-gold transition-all duration-700" 
                    style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Milestones Bullets checks */}
            <div className="bg-neutral-950/70 p-6 md:p-8 rounded border border-neutral-850/60 relative z-10">
              <h4 className="font-serif text-sm text-white font-medium mb-4 uppercase tracking-wider">
                Delivered Milestones in Step {activeStep + 1}
              </h4>
              <ul className="space-y-4 font-sans text-xs font-light text-neutral-400">
                {steps[activeStep].bullets.map((bull, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-luxury-gold" />
                    </div>
                    <span>{bull}</span>
                  </li>
                ))}
              </ul>

              {/* Guide prompt */}
              <div className="mt-8 pt-4 border-t border-neutral-850/60 flex items-center justify-between text-[9px] font-mono text-neutral-500 uppercase">
                <span>Phase Timeline: {steps[activeStep].dur}</span>
                <span className="flex items-center gap-1">
                  Active Blueprint
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

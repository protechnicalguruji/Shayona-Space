import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Hammer, CheckCircle, Search, ClipboardList } from 'lucide-react';
import { PROCESS_STEPS } from '../utils/data';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5" />;
      case '02':
        return <ClipboardList className="w-5 h-5" />;
      case '03':
        return <Compass className="w-5 h-5" />;
      case '04':
        return <Hammer className="w-5 h-5" />;
      case '05':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative outline grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e8e8_1px,transparent_1px),linear-gradient(to_bottom,#e8e8e8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold font-semibold block">
            The Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl md:text-5xl text-luxury-dark font-medium leading-tight">
            Our Elite Architecture & <br />
            <span className="italic font-light">Construction Process</span>
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6" />
          <p className="font-sans text-neutral-500 font-light text-base md:text-lg max-w-2xl mx-auto pt-2">
            Crafting a legendary estate requires seamless staging. We divide our process into five distinct chronological chapters, ensuring absolute quality control.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE DISPLAY (Desktop) */}
        <div className="hidden lg:block relative mb-16" id="desktop-timeline">
          {/* Animated background connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-neutral-200 -translate-y-1/2 z-0">
            {/* Active filled gold line */}
            <motion.div
              className="h-full bg-luxury-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="flex justify-between items-center relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isCompleted = activeStep > idx;

              return (
                <div key={step.step} className="flex flex-col items-center">
                  {/* Circle button node */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 cursor-pointer outline-none focus:outline-none ${
                      isActive
                        ? 'bg-neutral-905 text-white border-luxury-gold scale-115 shadow-xl ring-4 ring-luxury-gold/10'
                        : isCompleted
                        ? 'bg-luxury-gold text-black border-luxury-gold'
                        : 'bg-white text-neutral-400 border-neutral-200 hover:border-neutral-400'
                    }`}
                    id={`timeline-node-${step.step}`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="font-sans text-xs font-bold">{step.step}</span>
                    )}
                  </button>

                  {/* Title labels */}
                  <span
                    onClick={() => setActiveStep(idx)}
                    className={`font-serif text-sm tracking-wide mt-4 cursor-pointer transition-colors ${
                      isActive ? 'text-luxury-dark font-medium' : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* VERTICAL TIMELINE DISPLAY (Mobile/Tablet) */}
        <div className="lg:hidden relative mb-12 space-y-4" id="mobile-timeline">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                  isActive
                    ? 'bg-luxury-beige/30 border-luxury-gold shadow-md'
                    : 'bg-neutral-50/50 border-neutral-100'
                }`}
                id={`mobile-timeline-item-${step.step}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold shrink-0 ${
                  isActive ? 'bg-luxury-gold text-black' : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-semibold text-neutral-800">{step.title}</h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-luxury-gold">{step.subtitle}</p>
                  {isActive && (
                    <p className="font-sans text-xs text-neutral-500 leading-relaxed pt-2 font-light">{step.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE PHASE DETAILS CONTAINER (Desktop details drawer) */}
        <div className="hidden lg:block bg-neutral-900 border border-neutral-800 p-10 md:p-12 rounded-lg text-neutral-100 shadow-2xl relative overflow-hidden" id="timeline-detail-panel">
          {/* Subtle gold decoration background */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-luxury-gold/5 rounded-bl-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Number and Title */}
              <div className="md:col-span-4 space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="p-3 bg-luxury-gold/10 border border-luxury-gold/30 rounded text-luxury-gold">
                    {getStepIcon(PROCESS_STEPS[activeStep].step)}
                  </div>
                  <span className="font-sans text-4xl font-extrabold text-neutral-700 tracking-wider">
                    {PROCESS_STEPS[activeStep].step}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-medium text-white tracking-wide">
                    {PROCESS_STEPS[activeStep].title}
                  </h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-bold mt-1.5">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed narrative copy */}
              <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-10">
                <p className="font-sans text-neutral-300 text-base font-light leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>

                {/* Simulated interactive roadmap timeline indicators */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  <span className="text-[10px] uppercase font-sans tracking-wider border border-neutral-800 bg-neutral-950 px-3 py-1 text-neutral-400 rounded">
                    ✓ High Quality Assured
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-wider border border-neutral-800 bg-neutral-950 px-3 py-1 text-neutral-400 rounded">
                    ✓ Elite Materials Specified
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-wider border border-neutral-800 bg-neutral-950 px-3 py-1 text-neutral-400 rounded">
                    ✓ Signed Project Contracts
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

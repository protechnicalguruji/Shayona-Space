import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMMON_FAQ_LIST } from './servicesData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function ServiceFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F6F2] py-24 md:py-32 relative overflow-hidden" id="service-faqs">
      {/* Background design grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title container */}
        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
            KNOWLEDGE BASE DIRECTORY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark tracking-tight leading-tight">
            Frequently Asked <span className="italic font-normal text-luxury-gold">Service Inquiries</span>
          </h2>
          <p className="font-sans text-neutral-500 font-light text-xs md:text-sm">
            Review immediate coordinates about our architecture licenses, soil studies, insurance coverages, and billing methodologies.
          </p>
        </div>

        {/* Accordion list container */}
        <div className="space-y-4" id="faqs-accordion-deck">
          {COMMON_FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-luxury-border bg-white rounded shadow-sm overflow-hidden"
                id={`faq-item-box-${idx}`}
              >
                {/* Header Question Bar */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between text-sm font-serif font-medium text-luxury-dark hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-luxury-gold shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-luxury-gold' : ''}`} />
                </button>

                {/* Animated collapse content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 border-t border-luxury-border/35 text-xs md:text-sm font-sans font-light text-neutral-500 leading-relaxed max-w-full">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

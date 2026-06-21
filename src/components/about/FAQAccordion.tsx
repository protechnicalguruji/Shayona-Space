import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Which geographical territories does Aurelia support?',
      answer: 'Our main design ateliers are located in Monaco and Mayfair, London. However, we coordinate active luxury commissions and logistics workflows globally, with completed and ongoing high-end residential and commercial estates in Tokyo, France, Switzerland, Colorado, and alternative international elite hubs.'
    },
    {
      id: 'faq-2',
      question: 'How do you guarantee transparent subcontractor pricing?',
      answer: 'We provide our clients with absolute open-book access to our contract management ledger. Every subcontractor invoice, shipping tariff for raw imported stones (like Carrara marble), and structural steel quotes are logged directly into your dedicated client portal with zero hidden markups or obscure line items.'
    },
    {
      id: 'faq-3',
      question: 'Do you manage complete municipal approvals and permissions?',
      answer: 'Yes. Our dedicated in-house compliance team leads all structural dialogues with local preservation groups, wildlife migration councils, and city planning offices. From geotechnical bedrock reporting up to heritage facade clearance approvals, we handle the entire regulatory schedule before construction starts.'
    },
    {
      id: 'faq-4',
      question: 'How do you design for carbon neutrality and seismic resilience?',
      answer: 'We integrate advanced geothermal heating systems, geothermal temperature wells, and carbon-infused insulated raw concrete. For regions containing high seismic activities like Japan or high gale forces like coastal cliffs, we construct active structural exoskeleton lines and tuned mass damper coordinates designed to absorb ground drift instantly.'
    },
    {
      id: 'faq-5',
      question: 'Can you work with my family’s pre-selected private designer?',
      answer: 'Indeed. While Aurelia provides fully integrated end-to-end architectures, planning, and interior curation, we are highly experienced in collaborating at executive scales with third-party private decorators or family office project advisers to realize specific visual visions.'
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq-section">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Inquiries Desk
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-luxury-gold italic">Questions</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            Clarifying our structural fees model, global building logistics, and administrative capabilities.
          </p>
        </div>

        {/* Accordions listing */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = faq.id === openId;
            return (
              <div 
                key={faq.id}
                className="bg-neutral-50 border border-luxury-border rounded overflow-hidden"
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Trigger button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full py-6 px-6 md:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-neutral-100 transition-colors"
                >
                  <span className="font-serif text-base md:text-lg lg:text-xl font-bold text-luxury-dark pr-6">
                    {faq.question}
                  </span>
                  
                  {/* Circle plus/minus visual */}
                  <div className={`w-8 h-8 rounded-full border border-luxury-border flex items-center justify-center bg-white text-luxury-gold transition-transform duration-350 ${isOpen ? 'rotate-180 border-luxury-gold/30 bg-luxury-dark text-white' : ''}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Animated disclosure */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-neutral-600 font-sans text-xs md:text-sm font-light leading-relaxed tracking-wide border-t border-luxury-border/50 bg-white/70">
                        {faq.answer}
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

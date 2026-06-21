import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Clock, MapPin, Send, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface FloatingEnquiryProps {
  onOpenConsultation: () => void;
}

export default function FloatingEnquiry({ onOpenConsultation }: FloatingEnquiryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Form states
  const [name, setName] = useState('');
  const [projectInterest, setProjectInterest] = useState('Elysian Heights Villa, Monaco');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setMessage('');
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-6 right-6 z-40 print:hidden flex flex-col items-end gap-3">
            
            {/* Extended Quick Enquiry Popover Form */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="w-80 md:w-96 bg-white border border-neutral-300 text-[#1A1A1A] p-6 shadow-2xl relative mb-2"
                >
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B08D57] block mb-1">
                          Private Enquiry
                        </span>
                        <h4 className="font-serif text-xl font-light text-[#1A1A1A]">
                          Bespoke Commissions
                        </h4>
                        <p className="text-[11px] text-neutral-500 font-light mt-1">
                          Complete this quick inquiry or access the book tool.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[9px] uppercase tracking-widest text-[#1A1A1A] font-bold mb-1">
                            Your Name / Institution
                          </label>
                          <input 
                            type="text" 
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Sterling Co."
                            className="w-full bg-[#F8F6F2] border border-neutral-200 px-3 py-2 text-xs focus:outline-none focus:border-[#B08D57] rounded-none placeholder:text-neutral-400"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-widest text-[#1A1A1A] font-bold mb-1">
                            Investment Focus Property
                          </label>
                          <select 
                            value={projectInterest}
                            onChange={(e) => setProjectInterest(e.target.value)}
                            className="w-full bg-[#F8F6F2] border border-neutral-200 px-3 py-2 text-xs focus:outline-none focus:border-[#B08D57] rounded-none"
                          >
                            <option>Elysian Heights Villa, Monaco</option>
                            <option>Aether Commercial HQ, Tokyo</option>
                            <option>The Obsidian Penthouse, NY</option>
                            <option>Kyoto Serene Pavilion, Japan</option>
                            <option>The Monolith Sky Villa, Aspen</option>
                            <option>Other Custom Commission</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-widest text-[#1A1A1A] font-bold mb-1">
                            Confidential Message
                          </label>
                          <textarea 
                            rows={3}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Detail your spatial vision, dimensions, or target timeline..."
                            className="w-full bg-[#F8F6F2] border border-neutral-200 p-3 text-xs focus:outline-none focus:border-[#B08D57] rounded-none placeholder:text-neutral-400 resize-none"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full bg-[#1A1A1A] hover:bg-[#B08D57] font-mono text-[10px] text-white uppercase tracking-widest py-3 font-semibold transition-colors flex items-center justify-center gap-1.5 rounded-none"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Secure Message</span>
                      </button>

                      <div className="text-center pt-2">
                        <button 
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            onOpenConsultation();
                          }}
                          className="text-[10px] uppercase font-mono tracking-widest font-semibold text-[#B08D57] hover:underline flex items-center justify-center gap-1 mx-auto"
                        >
                          <span>Access Structured Scheduler</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="font-serif text-lg text-neutral-800">Enquiry Transmitted</h4>
                      <p className="text-xs text-neutral-500 font-light max-w-xs mx-auto leading-relaxed">
                        Secure connection authorized. A personal client manager has been assigned to contact you within 2 business hours.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Micro Interaction Floating Launcher Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-4 bg-[#1A1A1A] hover:bg-[#B08D57] text-white shadow-2xl transition-all duration-300 flex items-center gap-2.5 rounded-none border border-[#B08D57]/30 group"
              aria-label="Toggle Enquiry Popover"
            >
              <Mail className="w-4.5 h-4.5 text-[#B08D57] group-hover:text-white transition-colors" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-bold">
                Private Commission Inquiry
              </span>
            </motion.button>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function BrochureModal({ isOpen, onClose, project }: BrochureModalProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setSuccess(true);
      // Automatically trigger a nice print/save layout of current specifications if user is interested
      setTimeout(() => {
        window.print();
      }, 800);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="relative w-full max-w-lg bg-[#F8F6F2] text-[#1A1A1A] p-8 md:p-10 border border-[#B08D57]/30 shadow-2xl rounded-sm z-10"
            id={`brochure-modal-${project.id}`}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-[#1A1A1A] transition-colors focus:outline-none"
              aria-label="Close configuration"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!success ? (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B08D57] block mb-2">Exclusive Acquisition</span>
                <h3 className="text-3xl font-light tracking-tight serif mb-4">Request Bespoke Digital Brochure</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  Acquire the private, high-fidelity publication folder for <span className="font-medium text-black">{project.name}</span>. Contains extensive technical drawings, architectural materials specs, and high-altitude landscape captures.
                </p>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#1A1A1A] font-medium mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Lord Sterling Chichester"
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-[#B08D57] transition-all rounded-none placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#1A1A1A] font-medium mb-1.5">
                      Secure Private Email
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. s.chichester@sterlingestate.com"
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-[#B08D57] transition-all rounded-none placeholder:text-neutral-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={downloading}
                      className="w-full bg-[#1A1A1A] hover:bg-[#B08D57] text-white text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-6 transition-all duration-300 flex items-center justify-center gap-2 rounded-none"
                    >
                      {downloading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Verifying Security Access...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>Generate & Save Dossier</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <p className="text-[10px] text-center text-neutral-400 mt-4 font-mono uppercase tracking-wider">
                  ✦ Guarded under SSL & client confidentiality guidelines ✦
                </p>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#B08D57]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#B08D57]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light tracking-tight serif mb-2 text-[#1A1A1A]">Dossier Authorized</h3>
                <p className="text-sm text-neutral-600 font-light mb-6">
                  Thank you, <span className="font-semibold text-black">{fullName}</span>. An exclusive document token has been generated. The custom print dashboard will open immediately.
                </p>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="w-full bg-[#1A1A1A] hover:bg-[#B08D57] text-white text-xs uppercase tracking-widest py-3 font-medium transition-colors"
                  >
                    Resend Print Signal
                  </button>
                  <button 
                    onClick={onClose}
                    className="w-full bg-transparent border border-neutral-300 hover:border-black text-neutral-600 hover:text-black text-xs uppercase tracking-widest py-3 font-medium transition-colors"
                  >
                    Return to Gallery
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

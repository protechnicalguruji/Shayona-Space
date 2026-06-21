import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldAlert, Sparkles, X, CheckCircle, FileCheck } from 'lucide-react';

interface Certificate {
  id: string;
  category: 'License' | 'Industry' | 'Membership' | 'Compliance';
  title: string;
  issuer: string;
  date: string;
  serialNumber: string;
  description: string;
  sealText: string;
  badgeColor: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 'cert-gba',
      category: 'License',
      title: 'Structural Architecture Grade-I License',
      issuer: 'Monegasque National Construction Council',
      date: 'May 2007 (Renewed 2025)',
      serialNumber: 'LIC-MC-04987-PRESTIGE',
      description: 'Authoritative state license authorizing advanced structural engineering, subterranean digging coordinates, and high-tensile dual-cantilever foundations on standard bedrock and coastal cliffs.',
      sealText: 'MONACO OFFICIAL STATE LICENSE',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-100'
    },
    {
      id: 'cert-riba',
      category: 'Membership',
      title: 'Chartered Practice Member',
      issuer: 'Royal Institute of British Architects (RIBA)',
      date: 'Chartered Since October 2012',
      serialNumber: 'RIBA-CH-120054-AURELIA',
      description: 'Chartered corporate membership certifying compliance with the highest standard of architectural execution, environmental sustainability benchmarks, and professional code of ethics.',
      sealText: 'RIBA GOLD ACCREDITED PRACTICE',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-100'
    },
    {
      id: 'cert-well',
      category: 'Industry',
      title: 'WELL Building Standard Platinum Certification',
      issuer: 'International WELL Building Institute (IWBI)',
      date: 'Certified February 2021',
      serialNumber: 'WELL-PL-9654-BIOPHILIC',
      description: 'Official global industry certification proving Aurelia offices and drafted blueprints comply with advanced indoor air safety registers, biophilic day-lighting balances, thermal health, and organic ventilation cycles.',
      sealText: 'WELL PLATINUM HEALTH BENCHMARK',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-100'
    },
    {
      id: 'cert-iso',
      category: 'Compliance',
      title: 'ISO 9001:2015 Quality Management Standard',
      issuer: 'International Organization for Standardization',
      date: 'Certified September 2018 (Audited 2024)',
      serialNumber: 'ISO-QM-140012-AUSTERE',
      description: 'Global standard certification verifying Aurelia’s end-to-end full service logistics—from early blueprints up to subcontractor raw concrete pours—comply with zero-flaw delivery guarantees.',
      sealText: 'ISO 9001 GLOBAL VERIFIED COMPLIANCE',
      badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-100'
    }
  ];

  return (
    <section className="py-24 bg-luxury-beige relative overflow-hidden" id="certifications">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Aura Credentials
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-4">
            Licensing &amp; <span className="text-luxury-gold italic">Certifications</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            Every technical specification sheets we generate is audited and backed by elite global safety, architectural, and quality standard bodies. Click any card to expand.
          </p>
        </div>

        {/* 4 Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-white p-8 rounded border border-luxury-border shadow-sm hover:shadow-lg hover:border-luxury-gold/50 cursor-pointer group flex flex-col justify-between min-h-[320px]"
              id={`cert-card-${cert.id}`}
            >
              <div>
                {/* Category tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                  <FileCheck className="w-4 h-4 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-luxury-dark tracking-tight leading-snug mb-3 pr-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Sub issuer text */}
                <p className="font-sans text-xs text-neutral-550 font-normal mt-1 leading-snug">
                  {cert.issuer}
                </p>

                {/* Brief preview description */}
                <p className="font-sans text-[11px] text-neutral-400 mt-4 leading-relaxed font-light line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Handoff marker code */}
              <div className="pt-5 border-t border-luxury-border/50 mt-6 flex items-center justify-between text-[8px] font-mono tracking-widest text-[#B08D57]">
                <span>VIEW VERIFIED SEAL</span>
                <span>0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Larger Certificate Seal Overlay/Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
              id="cert-lightbox-backdrop"
            />

            {/* Certificate Presentation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 35 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-white border border-luxury-border rounded shadow-2xl p-8 md:p-12 text-luxury-dark z-10"
              id="cert-detail-modal"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-1.5 border border-luxury-border rounded-full hover:bg-neutral-50 text-neutral-450 hover:text-black transition-colors focus:outline-none"
                aria-label="Close credentials popup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate layout visual mimicking an actual printed luxury diploma */}
              <div className="border border-[#B08D57]/30 p-6 md:p-8 rounded relative bg-luxury-beige/25 flex flex-col items-center text-center">
                
                {/* Decorative Crown/Trophy Crest Icon */}
                <div className="w-14 h-14 rounded-full border border-luxury-gold/50 bg-[#B08D57]/5 flex items-center justify-center text-luxury-gold mb-6 select-none">
                  <Award className="w-7 h-7" />
                </div>

                {/* Seal Label Heading */}
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B08D57] font-bold mb-3">
                  {selectedCert.sealText}
                </p>

                <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight mb-2 text-neutral-900 pr-4 pl-4">
                  {selectedCert.title}
                </h3>

                <p className="font-sans text-xs text-neutral-500 tracking-wide font-light mb-6">
                  Presented by: <strong className="font-semibold text-neutral-700">{selectedCert.issuer}</strong>
                </p>

                {/* Horizontal design separating rules */}
                <div className="w-32 h-[1px] bg-luxury-border mb-6" />

                {/* Sub narrative explanation */}
                <p className="font-sans text-sm text-neutral-600 font-light leading-relaxed tracking-wide mb-8 pr-1 pl-1">
                  {selectedCert.description}
                </p>

                {/* Serial and Handshake values */}
                <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-luxury-border/60 text-left">
                  <div>
                    <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">SERIAL REGISTRY VALUE</span>
                    <p className="font-mono text-[10px] text-neutral-800 font-semibold mt-0.5 tracking-wider select-all">{selectedCert.serialNumber}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">REGISTRATION DATE</span>
                    <p className="font-sans text-[10px] text-neutral-700 font-semibold mt-0.5">{selectedCert.date}</p>
                  </div>
                </div>

                {/* Simulated Stamp signature */}
                <div className="absolute bottom-4 right-4 hidden md:block select-none opacity-10">
                  <span className="font-serif text-xl border-2 border-luxury-gold text-luxury-gold uppercase tracking-[0.25em] font-bold rounded-full p-2 h-16 w-16 flex items-center justify-center rotate-12">
                    Aura
                  </span>
                </div>

              </div>

              {/* Under-card auxiliary validation badge row */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-450 font-mono tracking-wider select-none">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>ACCID VERIFIED DIGITAL SEAL COMPLIANT</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

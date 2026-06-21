import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

interface CallToActionSectionProps {
  onOpenConsultation: () => void;
}

export default function CallToActionSection({ onOpenConsultation }: CallToActionSectionProps) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [2000, 5000], [-80, 80]);

  const handleScrollToContact = () => {
    const target = document.querySelector('#book-consultation');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white select-none">
      
      {/* Background Parallax Image with soft focus overlay */}
      <motion.div
        style={{
          y: yBg,
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000")'
        }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.22] scale-103"
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950 z-10 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] z-10 pointer-events-none" />

      {/* Content workspace wrapper */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center max-w-3xl space-y-8">
        
        {/* Diamond seal */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#B08D57]/40" />
          <div className="p-1 px-2.5 rounded bg-[#B08D57]/10 border border-[#B08D57]/30 text-[9px] font-mono uppercase tracking-[0.25em] text-[#B08D57]">
            Aura Premium Atelier
          </div>
          <span className="w-8 h-[1px] bg-[#B08D57]/40" />
        </div>

        {/* Narrative titles */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Ready to Transform Your <br />
            <span className="italic font-normal text-[#B08D57]">Dream Into Absolute Reality?</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Formulate your structural legacy now. Settle under our secure private Swiss consultancy covenants. Our lead architects are ready to schedule your initial visual briefing.
          </p>
        </div>

        {/* Call to actions trigger row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-9 py-4 rounded bg-[#B08D57] hover:bg-[#C6A36B] text-black uppercase tracking-widest font-sans font-bold text-xs flex items-center justify-center gap-2.5 transition-all shadow-md focus:outline-none cursor-pointer hover:shadow-2xl hover:-translate-y-0.5"
            id="cta-bottom-btn-consultation"
          >
            <Calendar className="w-4 h-4" />
            Book Consultation
          </button>
          
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-9 py-4 rounded border border-white/20 hover:border-[#B08D57] hover:text-[#B08D57] bg-white/5 hover:bg-white/10 text-white uppercase tracking-widest font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all focus:outline-none cursor-pointer"
            id="cta-bottom-btn-experts"
          >
            <span>Contact Our Experts</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
}

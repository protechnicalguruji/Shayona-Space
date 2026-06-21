import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowUpRight, Diamond } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export default function CTASection({ onOpenConsultation }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-neutral-950 text-white overflow-hidden">
      {/* Immersive luxurious architecture background representation on CTA */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
          alt="Night layout of beachfront glass facade"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Modern luxury gold abstract shapes */}
      <div className="absolute -top-1/4 -left-1/4 w-[50%] h-[50%] rounded-full border border-luxury-gold/10 pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full border border-luxury-gold/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-10">
        {/* Diamond crown badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex p-3 bg-luxury-gold/5 border border-luxury-gold/30 rounded-full text-luxury-gold"
        >
          <Diamond className="w-5 h-5 animate-pulse" />
        </motion.div>

        {/* Major header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-luxury-gold font-semibold block">
            Begin the commission
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3.5xl sm:text-5xl md:text-6xl text-white font-medium leading-tight tracking-tight"
          >
            Let's Build Your <br />
            <span className="italic font-light text-luxury-gold font-serif">Dream Space Together</span>
          </motion.h2>
        </div>

        {/* Narrative description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-sans text-neutral-300 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Every exceptional space begins with a brave sketch and an intimate conversation. Let us unlock your property's absolute potential and curate the home you are meant to possess.
        </motion.p>

        {/* Primary and secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4.5 bg-luxury-gold hover:bg-luxury-gold-hover text-black uppercase tracking-widest font-semibold text-xs transition-all duration-300 rounded shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            id="cta-schedule-consult-main"
          >
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </button>
          <a
            href="tel:+15551234"
            className="w-full sm:w-auto px-8 py-4.5 border border-white/20 hover:border-luxury-gold bg-neutral-950/60 text-white uppercase tracking-widest font-sans text-xs font-semibold transition-all duration-300 rounded backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none hover:text-luxury-gold"
            id="cta-call-us"
          >
            <Phone className="w-4 h-4 text-luxury-gold" />
            Call Our Office
          </a>
        </motion.div>

        {/* Postscript indicator */}
        <div className="pt-6 text-neutral-500 font-sans text-xs tracking-wider">
          *We reply to all private briefings within one business hour.
        </div>
      </div>
    </section>
  );
}

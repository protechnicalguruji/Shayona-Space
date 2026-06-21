import React from 'react';
import { motion } from 'motion/react';
import { Users, Coins, Sparkles, Cpu, LifeBuoy, Hourglass, ZoomIn, Heart, ShieldAlert } from 'lucide-react';

interface TrustCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function WhyTrustUs() {
  const trustItems: TrustCard[] = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Our certified RIBA/AIA architects and mechanical engineers pack over two decades of high-altitude structural execution.'
    },
    {
      icon: Coins,
      title: 'Transparent Pricing',
      description: 'We present fully open billing worksheets, offering real-time tracking on materials and direct subcontractors contracts.'
    },
    {
      icon: Sparkles,
      title: 'Quality Materials',
      description: 'We import pristine Smeralda Quartzite, Carrara gold marble, and titanium framing certified to withstand extreme gale forces.'
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'We employ BIM (Building Information Modeling) and VR previews to stress-test structural airflow before raw ground excavation.'
    },
    {
      icon: LifeBuoy,
      title: 'Dedicated Support',
      description: 'Every custom estate client enjoys a dedicated 24/7 personal care coordinator to handle regulatory and local council approvals.'
    },
    {
      icon: Hourglass,
      title: 'On-Time Delivery',
      description: 'We enforce automated scheduling algorithms. In 18 years, 97.4% of our massive portfolios achieved handover ahead of contract dates.'
    },
    {
      icon: ZoomIn,
      title: 'Attention to Detail',
      description: 'We measure success in millimeters. Every stone joint, floor plank alignment, and hidden electrical panel is visually pristine.'
    },
    {
      icon: Heart,
      title: 'Long-Term Relationships',
      description: 'Our partnership doesn’t terminate at key handoff. We provide seasonal structural tracking and complete maintenance schedules.'
    }
  ];

  return (
    <section className="py-24 bg-luxury-dark text-white relative overflow-hidden" id="why-trust-us">
      {/* Decorative starry layout layout */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Intro Tag */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Excellence Assured
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Why Clients <span className="text-luxury-gold italic">Trust Us</span>
          </h2>
          <p className="text-neutral-400 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            Delivering an unmatched state of confidence through professional rigor, complete transparency, and award-winning execution.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const TrustIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -6, backgroundColor: 'rgba(30, 30, 30, 0.65)' }}
                className="bg-neutral-900/40 p-8 rounded border border-neutral-800 hover:border-luxury-gold/40 transition-all duration-300 flex flex-col justify-between group min-h-[250px]"
              >
                <div>
                  {/* Icon holder custom overlay */}
                  <div className="w-11 h-11 rounded border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500 mb-6">
                    <TrustIcon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-medium text-white tracking-tight mb-3.5 group-hover:text-luxury-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/40 mt-6 flex items-center justify-between text-[8px] font-mono tracking-widest text-neutral-600 group-hover:text-luxury-gold transition-colors">
                  <span>TRUST PROTOCOL</span>
                  <span>[0{index + 1}]</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

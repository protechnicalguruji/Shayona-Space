import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Compass, Shield } from 'lucide-react';

interface TeamMember {
  name: string;
  designation: string;
  experience: string;
  photo: string;
  linkedin: string;
  email: string;
}

export default function OurTeam() {
  const team: TeamMember[] = [
    {
      name: 'Evelyn Valerius',
      designation: 'Principal Architect',
      experience: '14 Years Experience',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800',
      linkedin: 'https://linkedin.com',
      email: 'evelyn@aurelia.com'
    },
    {
      name: 'Marcus Vance',
      designation: 'Director of Structural Engineering',
      experience: '16 Years Experience',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800',
      linkedin: 'https://linkedin.com',
      email: 'marcus@aurelia.com'
    },
    {
      name: 'Clarissa Fontaine',
      designation: 'Bespoke Interior Curator',
      experience: '10 Years Experience',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800',
      linkedin: 'https://linkedin.com',
      email: 'clarissa@aurelia.com'
    },
    {
      name: 'Dimitri Romanoff',
      designation: 'Head of Construction Logistics',
      experience: '12 Years Experience',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800',
      linkedin: 'https://linkedin.com',
      email: 'dimitri@aurelia.com'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden text-luxury-dark" id="our-team">
      {/* Structural visual grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-6 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Master Designers
            </span>
            <span className="w-6 h-[1px] bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight mb-4">
            Our Elite <span className="text-luxury-gold italic">Artisans</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide leading-relaxed">
            Our studio holds a carefully chosen circle of designers, builders, and structural experts who transform abstract blueprints into secure, legendary estates.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, index) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded overflow-hidden group border border-luxury-border shadow-sm hover:shadow-xl transition-all duration-500 bg-neutral-50"
              id={`team-member-${index}`}
            >
              {/* Picture Frame with Image zoom effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                <img 
                  src={m.photo} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Micro Hover Socials overlay panel on Image hover */}
                <div className="absolute inset-0 bg-neutral-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-white">
                  
                  <div className="flex items-center gap-2 mb-3.5">
                    <Compass className="w-4 h-4 text-luxury-gold" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#C6A36B]">Aura Elite Standard</span>
                  </div>

                  <p className="font-sans text-xs text-neutral-300 font-light leading-relaxed mb-6">
                    Committed to structural absolute precision, and translating raw masonry rules into inspiring bespoke details.
                  </p>

                  <div className="flex items-center gap-3">
                    <a 
                      href={m.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded bg-white/10 hover:bg-luxury-gold border border-white/20 text-white hover:text-black flex items-center justify-center transition-colors shadow focus:outline-none"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${m.email}`} 
                      className="w-9 h-9 rounded bg-white/10 hover:bg-luxury-gold border border-white/20 text-white hover:text-black flex items-center justify-center transition-colors shadow focus:outline-none"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bottom decorative gold ribbon strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-luxury-gold" />
              </div>

              {/* Title specifics */}
              <div className="p-6 bg-white flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-luxury-dark tracking-tight leading-tight group-hover:text-luxury-gold transition-colors duration-300">
                    {m.name}
                  </h3>
                  <p className="font-sans text-[11px] text-neutral-500 uppercase tracking-widest mt-1">
                    {m.designation}
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-border/40 mt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-wider text-[#B08D57] font-semibold bg-luxury-beige/50 px-2 py-0.5 rounded border border-luxury-border/30">
                    {m.experience}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-mono">
                    <Shield className="w-3 h-3 text-luxury-gold" />
                    <span>Active</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

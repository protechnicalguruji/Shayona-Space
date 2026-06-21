import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Compass, Star, ChevronRight } from 'lucide-react';

interface AwardItem {
  year: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function AwardsShowcase() {
  const awards: AwardItem[] = [
    {
      year: '2024',
      title: 'Monegasque Villa Design Grand Prix',
      category: 'Best Coastal Architecture',
      description: 'Accoladed for the Elysian Heights Villa cliffside design, celebrating innovative seismic dual-cantilever foundations and high-tensile glass engineering.',
      image: 'https://images.unsplash.com/photo-1579721507534-89d435c59b90?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      year: '2023',
      title: 'British Heritage Restoration Laurel',
      category: 'Grade-II Facade Preservation',
      description: 'Awarded by London Historical Trust groups for our Mayfair headquarters restructuring, perfectly hiding modern steel structures behind age-old masonry.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      year: '2021',
      title: 'Tokyo Biophilic Excellence Award',
      category: 'WELL Platinum Structural Workspace',
      description: 'Recognized for designing a multi-story open atrium garden with seismic dampening systems in downtown Shibuya, Tokyo.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      year: '2019',
      title: 'International Green Architecture Seal',
      category: 'Carbon-Neutral Passive Design',
      description: 'Earned for our climate-responsive high-altitude alpine frameworks in Aspen, utilizing pre-cast geometric concrete formulas.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600&h=400'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="awards-showcase">
      {/* Absolute faint background text */}
      <div className="absolute right-[-100px] top-10 font-serif text-[180px] leading-none text-neutral-100 opacity-20 pointer-events-none select-none tracking-widest hidden xl:block uppercase">
        LAURELS
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Intros Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-10 h-[1px] bg-luxury-gold" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold">
              Honors Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-dark tracking-tight leading-tight">
            Awards &amp; <span className="text-luxury-gold italic">Recognition</span>
          </h2>
          <p className="text-neutral-500 font-sans text-sm md:text-base font-light tracking-wide mt-4 max-w-xl">
            A selective showcase of global architectural design benchmarks and structural innovation awards achieved over two decades of practice.
          </p>
        </div>

        {/* Horizontal Card Layout - responsive wrap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((awr, index) => (
            <motion.div
              key={awr.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-neutral-50 border border-luxury-border rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              id={`award-item-${index}`}
            >
              {/* Picture Frame with subtle scale transition */}
              <div className="relative aspect-[3/2] overflow-hidden bg-neutral-200">
                <img 
                  src={awr.image} 
                  alt={awr.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gold Circle Stamp Year indicator */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-luxury-gold/30 flex flex-col items-center justify-center font-mono text-center shadow-md select-none">
                  <span className="text-[10px] text-neutral-400 font-extrabold tracking-tight -mb-1 leading-none">YEAR</span>
                  <span className="font-serif text-sm font-bold text-luxury-gold leading-none mt-0.5">{awr.year}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#C6A36B] rounded border border-neutral-800">
                  VERIFIED DESIGN PRIZE
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col justify-between h-full min-h-[200px]">
                <div>
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono text-[#B08D57] font-semibold mb-2">
                    <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                    <span>{awr.category}</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-luxury-dark tracking-tight leading-snug mb-3.5 group-hover:text-luxury-gold transition-colors duration-300">
                    {awr.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-500 font-light leading-relaxed">
                    {awr.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-border/50 mt-6 flex items-center justify-between text-[8px] font-mono tracking-widest text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-luxury-gold" />
                    AURELIA DESIGN LOGS
                  </span>
                  <span>0{index + 1}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

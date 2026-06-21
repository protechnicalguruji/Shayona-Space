import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

interface NavSection {
  id: string;
  label: string;
}

export default function StickySideNavServices() {
  const [activeSection, setActiveSection] = useState('services-hero');

  const sections: NavSection[] = [
    { id: 'services-hero', label: 'Services Top' },
    { id: 'about-intro', label: 'Company Intro' },
    { id: 'our-services-grid', label: 'Capabilities' },
    { id: 'detailed-service-deck', label: 'Deep Dive Specs' },
    { id: 'our-process', label: 'Workflow process' },
    { id: 'why-choose-us', label: 'Core advantage' },
    { id: 'service-comparison', label: 'Framework Table' },
    { id: 'work-gallery', label: 'Completed Exhibits' },
    { id: 'client-testimonials', label: 'Appraisals' },
    { id: 'service-faqs', label: 'FAQs Directory' },
    { id: 'book-consultation', label: 'Estimator & Booking' },
    { id: 'atelier-premium-extras', label: 'Prestige Lounge' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-4 bg-white/70 backdrop-blur-md border border-luxury-border/50 py-6 px-3 rounded-full shadow-lg max-h-[80vh] overflow-y-auto scrollbar-none">
      {/* Tiny spinning icon header */}
      <Compass className="w-4 h-4 text-luxury-gold animate-spin-slow mb-2 shrink-0" />

      <div className="flex flex-col gap-3">
        {sections.map((sec) => {
          const isActive = sec.id === activeSection;
          return (
            <button
              key={sec.id}
              onClick={() => handleScrollTo(sec.id)}
              className="group relative flex items-center justify-center h-4 w-4 cursor-pointer focus:outline-none shrink-0"
              title={sec.label}
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Inner Circle Dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 1,
                  backgroundColor: isActive ? '#B08D57' : '#D1D5DB'
                }}
                className="h-2.5 w-2.5 rounded-full transition-colors group-hover:bg-luxury-gold"
              />

              {/* Floating label box - displays leftwards on Hover */}
              <div className="absolute right-7 bg-luxury-dark text-white text-[10px] uppercase font-sans tracking-widest px-3 py-1.5 rounded shadow pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-neutral-800">
                {sec.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

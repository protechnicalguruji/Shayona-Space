import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Compass, ShieldCheck, MapPin, Building2, UserCheck } from 'lucide-react';

interface AchievementMetric {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const metrics: AchievementMetric[] = [
    {
      value: 120,
      suffix: '+',
      label: 'Projects Completed',
      sublabel: 'Elite Residential & Commercial Sites',
      icon: Building2
    },
    {
      value: 20,
      suffix: '',
      label: 'Years Experience',
      sublabel: 'Decades of Material Truth & Safety',
      icon: Compass
    },
    {
      value: 150,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Families & Institutional Leaders',
      icon: UserCheck
    },
    {
      value: 36,
      suffix: '',
      label: 'Awards Received',
      sublabel: 'Grand Prix & Architectural Laurels',
      icon: Award
    },
    {
      value: 15,
      suffix: '',
      label: 'Cities Served',
      sublabel: 'Operational Sites Across Europe & Asia',
      icon: MapPin
    },
    {
      value: 65,
      suffix: '+',
      label: 'Design Experts',
      sublabel: 'Staff Visionaries & Structural Engineers',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-luxury-border/60 relative overflow-hidden" id="achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={containerRef}>
        
        {/* Six Large Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {metrics.map((m, index) => {
            const MetricIcon = m.icon;
            return (
              <div 
                key={m.label} 
                className="text-center flex flex-col items-center group relative"
                id={`metric-container-${index}`}
              >
                {/* Subtle Icon Background placeholder */}
                <div className="w-10 h-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold mb-4 group-hover:bg-luxury-gold group-hover:text-black transition-all duration-300">
                  <MetricIcon className="w-4 h-4 animate-pulse-slow" />
                </div>

                {/* Counter value container */}
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-luxury-dark flex items-baseline justify-center">
                  <Counter value={m.value} trigger={isInView} />
                  <span className="text-luxury-gold ml-0.5 font-bold">{m.suffix}</span>
                </div>

                {/* Primary label descriptor */}
                <h3 className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-neutral-800 mt-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {m.label}
                </h3>
                
                {/* Secondary tiny descriptor */}
                <p className="font-sans text-[10px] text-neutral-400 mt-1.5 font-light leading-relaxed max-w-[140px] mx-auto">
                  {m.sublabel}
                </p>

                {/* Elegant separator bar for vertical rhythm */}
                {index < metrics.length - 1 && (
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-luxury-border hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Simple internal client side counter engine
interface CounterProps {
  value: number;
  trigger: boolean;
}

function Counter({ value, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds animation window
    const end = value;

    if (end === 0) return;

    const increment = end / (duration / 16); // ~60fps ticks
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, trigger]);

  return <span className="font-inherit">{count}</span>;
}

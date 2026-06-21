import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from './servicesData';
import { ServiceItem } from './types';
import { 
  Compass, ArrowRight, CheckCircle2, FileText, Cpu, Clock, 
  HelpCircle, Sparkles, ChevronDown, Download, HelpCircle as QuestionIcon
} from 'lucide-react';

interface ServiceDetailsExpandedProps {
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export default function ServiceDetailsExpanded({ 
  selectedServiceId, 
  onSelectServiceId,
  onOpenConsultationWithService
}: ServiceDetailsExpandedProps) {
  const activeService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Before-After Slider State & Refs
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // PDF Download simulation
  const handleDownloadSpec = (title: string) => {
    setDownloadingId(title);
    setTimeout(() => {
      setDownloadingId(null);
      // Simulate download
      alert(`Aurelia Certified Specification PDF for "${title}" has been successfully compiled and downloaded (simulated).`);
    }, 1800);
  };

  return (
    <section className="bg-neutral-900 py-24 md:py-32 relative text-white overflow-hidden" id="detailed-service-deck">
      {/* Structural visual grid lines */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B08D57]/45 to-transparent z-10" />
      <div className="absolute inset-y-0 left-12 w-[1px] bg-neutral-800/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-neutral-800/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        
        {/* Title and horizontal selection deck */}
        <div className="space-y-6 mb-12 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
            INTERACTIVE SPECIFICATION PANEL
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
            Comprehensive <span className="italic font-normal text-[#B08D57]">Deep Dive Showcase</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm leading-relaxed">
            Select an independent architectural framework module below. Each provides a dedicated overview, specific benefits, structural deliverables, before/after visual slider, and specific FAQs.
          </p>
        </div>

        {/* 12 Horizontal Pill SELECTOR (Scrollable) */}
        <div className="border-b border-neutral-850 pb-5 mb-14 overflow-x-auto scroller-no-bar flex gap-2 w-full">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                onSelectServiceId(service.id);
                setActiveAccordion(null);
              }}
              className={`px-5 py-3.5 rounded text-[10px] font-sans font-extrabold uppercase tracking-widest shrink-0 transition-all focus:outline-none cursor-pointer ${
                selectedServiceId === service.id
                  ? 'bg-[#B08D57] text-black font-black'
                  : 'bg-neutral-950 border border-neutral-850/60 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
              id={`tab-selector-${service.id}`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Animated Main Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            id={`tab-content-box-${activeService.id}`}
          >
            
            {/* LEFT SIDE: Service Specific Overview and Bullet sheets (Cols 7) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Header Title with Custom Tags */}
              <div className="space-y-3.5 pb-6 border-b border-neutral-850">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57] font-bold">
                    PRESTIGE BLOCK // {activeService.id.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-850 text-[9px] text-neutral-400">
                    <Clock className="w-3 h-3 text-[#B08D57]" />
                    <span>TIMELINE: {activeService.details.timeline}</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-light tracking-tight flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#B08D57] animate-pulse" />
                  {activeService.title}
                </h3>
              </div>

              {/* Narratives: Overview and Ideal Audiances */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold block">
                    SERVICE ORIENTATION
                  </span>
                  <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed tracking-wide">
                    {activeService.details.overview}
                  </p>
                </div>
                <div className="space-y-4 bg-neutral-950 p-5 rounded border border-neutral-850">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-bold block">
                    IDEAL CLIENT TYPOLOGY
                  </span>
                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                    {activeService.details.whoItIsFor}
                  </p>
                </div>
              </div>

              {/* Key Benefits vs Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-[#B08D57] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3 font-sans text-xs text-neutral-400 font-light">
                    {activeService.details.benefits.map((ben, bId) => (
                      <li key={bId} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-white font-medium flex items-center gap-2">
                    <FileText className="w-4.5 h-4.5 text-[#B08D57]" />
                    Structural Deliverables
                  </h4>
                  <ul className="space-y-3 font-sans text-xs text-neutral-400 font-light">
                    {activeService.details.deliverables.map((del, dId) => (
                      <li key={dId} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-650 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Sourced */}
              <div className="p-5 bg-neutral-950 rounded border border-neutral-850 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-neutral-300 font-medium flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#B08D57]" />
                    Sourced Technologies &amp; Methods
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-sans font-light">
                    Proprietary algorithms and Swiss framing conventions utilized.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.details.techAndMethods.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 border border-neutral-800/80 bg-neutral-900 rounded text-[9px] font-mono tracking-wide text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Before/After Slider & Client Actions (Cols 5) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Premium BEFORE & AFTER Image Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold block">
                    Before &amp; After Transformation Case
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono tracking-wide">
                    Drag Slider
                  </span>
                </div>

                {/* Slider Container Stage */}
                <div 
                  ref={sliderContainerRef}
                  className="relative h-[280px] w-full overflow-hidden rounded border border-neutral-800 select-none cursor-ew-resize"
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={() => { isDragging.current = true; }}
                  onTouchStart={() => { isDragging.current = true; }}
                  id="before-after-slider-container"
                >
                  {/* Before Frame (Visible beneath) */}
                  <div className="absolute inset-0">
                    <img
                      src={activeService.details.beforeImgUrl || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"}
                      className="w-full h-full object-cover pointer-events-none"
                      alt="State Before"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 z-10 bg-black/75 px-2 md:px-3 py-1 border border-neutral-800/80 rounded text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                      Before (Legacy Site)
                    </div>
                  </div>

                  {/* After Frame (Clipped according to sliderPosition) */}
                  <div 
                    className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <img
                      src={activeService.details.afterImgUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"}
                      className="w-full h-full object-cover pointer-events-none"
                      alt="State After"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 right-3 z-10 bg-[#B08D57]/95 text-black px-2 md:px-3 py-1 rounded text-[9px] font-mono uppercase font-bold tracking-widest">
                      After (Aurelia Intervention)
                    </div>
                  </div>

                  {/* Center Drag Divider Line */}
                  <div 
                    className="absolute inset-y-0 w-[2px] bg-white z-20 pointer-events-none shadow"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Floating circular handle */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-neutral-900 shadow flex items-center justify-center pointer-events-none">
                      <div className="flex gap-0.5">
                        <span className="w-[1.5px] h-3.5 bg-neutral-900 rounded" />
                        <span className="w-[1.5px] h-3.5 bg-neutral-900 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion tailored to Service */}
              <div className="space-y-3.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold block">
                  SERVICE-SPECIFIC INQUIRIES
                </span>

                <div className="space-y-2.5">
                  {activeService.details.customFaq.map((faqItem, idx) => (
                    <div 
                      key={idx} 
                      className="border border-neutral-850 bg-neutral-950/40 rounded overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs font-sans tracking-wide text-neutral-200 hover:text-white focus:outline-none"
                      >
                        <span className="flex items-center gap-2">
                          <QuestionIcon className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                          {faqItem.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeAccordion === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="p-4 pt-0 text-xs font-sans font-light text-neutral-400 leading-relaxed max-w-full">
                              {faqItem.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons area */}
              <div className="pt-4 border-t border-neutral-850 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => onOpenConsultationWithService(activeService.title)}
                  className="p-3.5 rounded bg-[#B08D57] hover:bg-[#C6A36B] text-black text-xs font-sans uppercase tracking-widest font-bold text-center transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                  id="tab-book-specific-cta"
                >
                  <span>Book Inquiry briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleDownloadSpec(activeService.title)}
                  className="p-3.5 rounded border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white text-xs font-sans uppercase tracking-widest font-bold text-center transition-all flex items-center justify-center gap-2.5 focus:outline-none cursor-pointer"
                  id="tab-download-service-pdf"
                >
                  {downloadingId === activeService.title ? (
                    <>
                      <div className="animate-spin h-3.5 w-3.5 border-2 border-[#B08D57] border-t-transparent rounded-full" />
                      <span>Compiling PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span>Download PDF Spec</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Eye, HelpCircle, Download, FileText, Sparkles, 
  MapPin, Check, RefreshCw, Layers, Smartphone, Cpu, ShieldCheck 
} from 'lucide-react';

export default function ExtraPremiumFeatures() {
  
  // Feature Tab Selector
  const [activeTab, setActiveTab] = useState<'hotspots' | '360' | 'quiz' | 'brochure'>('hotspots');

  // Hotspots local state
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(1);
  const hotspotsData = [
    {
      id: 1,
      x: '32%',
      y: '35%',
      title: 'Structural Triplex Glazing',
      desc: '12mm double-laminated, argon-filled acoustic layers reflecting 98% of solar UV while maintaining 99.4% optical color fidelity.'
    },
    {
      id: 2,
      x: '62%',
      y: '72%',
      title: 'Friction Soil Anchors',
      desc: 'High-alloy carbon steel reinforcement pins drilled 18m deep into bedrock, stabilizing cantilever weight loads against seismic activity.'
    },
    {
      id: 3,
      x: '48%',
      y: '18%',
      title: 'Cedar Thermal Cladding',
      desc: 'Accented organic Canadian cedar wood strips, pressure-treated with anti-weathering natural oils, isolating moisture vectors.'
    },
    {
      id: 4,
      x: '78%',
      y: '45%',
      title: 'Negative-Edge Gravity Basin',
      desc: 'Bespoke travertine granite pool coping with self-balancing biological water filtering grids and quiet underwater sound systems.'
    }
  ];

  // 360° Panorama State (Simulated relative panning by dragging a wide layout photo)
  const [panOffset, setPanOffset] = useState(-200);
  const isDragging360 = useRef(false);
  const startDragX = useRef(0);
  const currentDragOffset = useRef(-200);

  const handleMouseDown360 = (e: React.MouseEvent) => {
    isDragging360.current = true;
    startDragX.current = e.clientX;
    currentDragOffset.current = panOffset;
  };

  const handleMouseMove360 = (e: React.MouseEvent) => {
    if (!isDragging360.current) return;
    const deltaX = e.clientX - startDragX.current;
    // clamp panning limits of the wide background panorama image relative to its container
    const nextOffset = Math.max(-600, Math.min(0, currentDragOffset.current + deltaX));
    setPanOffset(nextOffset);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging360.current = false;
    };
    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => window.removeEventListener('mouseup', handleMouseUpGlobal);
  }, []);

  // Recommendation Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<{ goal: string; scale: string; servicePref: string }>({
    goal: '',
    scale: '',
    servicePref: ''
  });

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({ goal: '', scale: '', servicePref: '' });
  };

  const handleQuizAnswer = (field: 'goal' | 'scale' | 'servicePref', val: string) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
    setQuizStep(prev => prev + 1);
  };

  const computeQuizRecommendation = () => {
    const { goal, scale, servicePref } = answers;
    if (goal === 'preservation') {
      return {
        service: 'Heritage Renovation & Steel Jacking',
        desc: 'Optimized for high-value listed properties requiring delicate stucco preservation combined with cutting-edge carbon sub-reinforcement.',
        deliverables: ['Compliance logs', 'Structural scaffolding mapping', 'Traditional plaster recipes']
      };
    }
    if (servicePref === 'hands-off' || scale === 'large') {
      return {
        service: 'Sovereign Turnkey Masterpiece Contract',
        desc: 'Our supreme integrated package covering master site grading, premium supply logistics, custom joinery, staging curation, and utilities registry.',
        deliverables: ['Unified Gantt dashboard access', 'Materials sample portfolios', '150-year warranty book']
      };
    }
    return {
      service: 'Bespoke Architecture & Landscape Design',
      desc: 'A gorgeous pairing that custom shapes passive-solar glass home structures with self-filtering biophilic reflecting gardens.',
      deliverables: ['3D BIM project files package', 'Sunrise solar audits', 'Bespoke cladding details sheets']
    };
  };

  // Brochure Download State
  const [brochureState, setBrochureState] = useState<'idle' | 'compiling' | 'success'>('idle');
  const [clientRegEmail, setClientRegEmail] = useState('');

  const triggerBrochureCompile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientRegEmail) return;
    setBrochureState('compiling');
    setTimeout(() => {
      setBrochureState('success');
    }, 2000);
  };

  return (
    <section className="bg-neutral-950 py-24 md:py-32 relative text-white border-b border-neutral-900" id="atelier-premium-extras">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header intro block */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block">
            ATELIER DIGITAL WORKSPACE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-none">
            Aura Interactive <span className="italic font-normal text-luxury-gold">Prestige Lounge</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm">
            Experience our virtual digital capabilities. Match services inside our goal-finder quiz, trace structural components on hot-mapped visuals, or pan completed 360° spatial renders.
          </p>
        </div>

        {/* 4 Tabs Selector buttons bento style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { key: 'hotspots', label: 'Image Hotspots', icon: MapPin },
            { key: '360', label: '360° Spatial pan', icon: Eye },
            { key: 'quiz', label: 'Service Match Advisor', icon: HelpCircle },
            { key: 'brochure', label: 'Brochure Archive', icon: Download }
          ].map((item) => {
            const IconComp = item.icon;
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key as any)}
                className={`py-4 px-5 rounded border text-left flex items-start gap-3.5 focus:outline-none transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#B08D57] bg-[#B08D57]/10 text-white shadow-lg'
                    : 'border-neutral-850 bg-neutral-900 text-neutral-450 hover:border-neutral-700 hover:text-neutral-200'
                }`}
                id={`tab-extra-${item.key}`}
              >
                <div className={`p-2 rounded shrink-0 ${isActive ? 'bg-[#B08D57] text-black' : 'bg-neutral-950 text-neutral-600'}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 select-none text-left">
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-widest">{item.label}</span>
                  <span className="block text-[8px] text-neutral-500 uppercase tracking-wider font-mono">WORKSPACE</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Rendering Active workspaces card bento */}
        <div className="bg-neutral-900 border border-neutral-850 p-6 md:p-10 rounded shadow-2xl relative overflow-hidden min-h-[460px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            
            {/* WORKSPACE 1: Image Hotspots map */}
            {activeTab === 'hotspots' && (
              <motion.div
                key="hotspots"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual Image container with relative Hotspot Markers */}
                <div className="lg:col-span-7 relative h-[320px] md:h-[390px] w-full overflow-hidden rounded border border-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                    alt="Aurelia Interactive Villa Concept Blueprint"
                    className="w-full h-full object-cover brightness-[0.4]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Absolute Mapping Dot Markers */}
                  {hotspotsData.map((hs) => {
                    const isActive = activeHotspotId === hs.id;
                    return (
                      <button
                        key={hs.id}
                        onClick={() => setActiveHotspotId(hs.id)}
                        style={{ left: hs.x, top: hs.y }}
                        className={`absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all z-20 focus:outline-none cursor-pointer ${
                          isActive 
                            ? 'bg-[#B08D57] text-black scale-110 shadow-lg ring-4 ring-[#B08D57]/30'
                            : 'bg-black/90 border border-neutral-700 text-[#B08D57] hover:bg-[#B08D57]/20 hover:scale-105'
                        }`}
                        id={`hotspot-trigger-${hs.id}`}
                      >
                        {hs.id}
                      </button>
                    );
                  })}

                  <div className="absolute bottom-3 left-3 bg-black/60 px-2.5 py-1 text-[8px] font-mono tracking-widest text-neutral-400 border border-neutral-800/80 rounded">
                    INTERACTIVE VILLA SCHEMATIC MAP
                  </div>
                </div>

                {/* Right side Detail Panel */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-bold block">
                      SELECTION DETAILS CODES
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-light">
                      {activeHotspotId ? hotspotsData.find(h => h.id === activeHotspotId)?.title : 'Select a Hotspot on the build'}
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                    {activeHotspotId ? hotspotsData.find(h => h.id === activeHotspotId)?.desc : 'Click any glowing numbering node mapped globally on the architectural elevation on the left to reveal detailed structural materials diagnostics.'}
                  </p>

                  <div className="p-4 bg-neutral-950 rounded border border-neutral-850 text-[10px] font-sans text-neutral-550 leading-relaxed font-light">
                    *Our engineers compile customized materials diagnostics catalogs for each architectural frame to verify anti-corrosion metrics and passive solar limits.
                  </div>
                </div>
              </motion.div>
            )}

            {/* WORKSPACE 2: 360° Panoramic Simulation viewer */}
            {activeTab === '360' && (
              <motion.div
                key="360"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center gap-6"
              >
                <div className="text-center space-y-1.5 max-w-md">
                  <h3 className="font-serif text-lg text-white font-light">
                    360° Render Panoramic Viewer
                  </h3>
                  <p className="text-[10px] text-neutral-500 font-sans">
                    Click and hold inside the frame below and drag Left or Right to dynamically pan the physical spatial envelope (simulated showcase).
                  </p>
                </div>

                {/* Panorama viewstage */}
                <div 
                  className="w-full h-80 rounded overflow-hidden relative cursor-grab active:cursor-grabbing border border-neutral-800 select-none"
                  onMouseDown={handleMouseDown360}
                  onMouseMove={handleMouseMove360}
                >
                  <div 
                    className="absolute inset-y-0 h-full w-[1700px] bg-cover transition-transform duration-100 ease-out"
                    style={{ 
                      backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2200")',
                      transform: `translateX(${panOffset}px)`
                    }}
                  />

                  {/* Shadow Vignette overlays */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

                  {/* Centered compass rose badge motif */}
                  <div className="absolute top-4 left-4 z-20 bg-black/75 rounded border border-neutral-850 px-2 py-1 flex items-center gap-1.5 text-[8px] font-mono tracking-widest text-[#B08D57]">
                    <Compass className="w-3 h-3 text-[#B08D57] animate-spin-slow" />
                    <span>ACTIVE HEURISTIC SIMULATION PAN: {Math.round(Math.abs(panOffset / 600) * 360)}° N</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 text-[8px] text-neutral-400 font-mono tracking-widest uppercase rounded">
                    Sardinia Coast Villa interior Render • Aurelia Pro Lab
                  </div>
                </div>
              </motion.div>
            )}

            {/* WORKSPACE 3: Match recommendation quiz */}
            {activeTab === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-xl mx-auto flex flex-col justify-between space-y-6"
              >
                
                {/* Step 1: Client Primary Objective */}
                {quizStep === 0 && (
                  <div className="space-y-6 text-center">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-[#B08D57] uppercase tracking-widest font-bold">QUESTION 01 // OBJECTIVE</span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light">What is your primary spatial goal?</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { key: 'new', label: 'New Build', desc: 'Crafting signature structures' },
                        { key: 'preservation', label: 'Preservation', desc: 'Preserving historic facades' },
                        { key: 'interior', label: 'Bespoke Fitting', desc: 'Luxury marble millwork' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => handleQuizAnswer('goal', item.key)}
                          className="p-5 rounded border border-neutral-850 bg-neutral-950 hover:border-[#B08D57] transition-all focus:outline-none cursor-pointer flex flex-col items-center"
                        >
                          <span className="font-serif text-sm font-medium text-white mb-1">{item.label}</span>
                          <span className="text-[9px] text-neutral-500 font-sans tracking-wide leading-tight">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Scale footprint */}
                {quizStep === 1 && (
                  <div className="space-y-6 text-center">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-[#B08D57] uppercase tracking-widest font-bold">QUESTION 02 // SCALE</span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light">What is the scale of your intended footprint?</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { key: 'small', label: 'Private Condo', desc: 'Upto 300 sqm spaces' },
                        { key: 'medium', label: 'Modern Estate', desc: '300 to 1,000 sqm space' },
                        { key: 'large', label: 'Infinite Campus', desc: '1,000+ sqm blueprints' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => handleQuizAnswer('scale', item.key)}
                          className="p-5 rounded border border-neutral-850 bg-neutral-950 hover:border-[#B08D57] transition-all focus:outline-none cursor-pointer flex flex-col items-center"
                        >
                          <span className="font-serif text-sm font-medium text-white mb-1">{item.label}</span>
                          <span className="text-[9px] text-neutral-500 font-sans tracking-wide leading-tight">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Collaborative Preferences */}
                {quizStep === 2 && (
                  <div className="space-y-6 text-center">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-[#B08D57] uppercase tracking-widest font-bold">QUESTION 03 // ENGAGEMENT</span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light">What is your preferred project administration method?</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: 'co-collaboration', label: 'Co-Design Collaboration', desc: 'Review drawings and samples step-by-step with architects' },
                        { key: 'hands-off', label: 'Hands-off Turnkey Signature', desc: 'Sovereign single-source keys turn with zero manager worries' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => handleQuizAnswer('servicePref', item.key)}
                          className="p-5 rounded border border-neutral-850 bg-neutral-950 hover:border-[#B08D57] transition-all focus:outline-none cursor-pointer flex flex-col items-center"
                        >
                          <span className="font-serif text-sm font-medium text-white mb-1">{item.label}</span>
                          <span className="text-[9px] text-neutral-500 font-sans tracking-wide text-center uppercase leading-normal">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Display Finished advice */}
                {quizStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 md:p-8 rounded bg-neutral-950 border border-neutral-850 text-center space-y-6"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-[#B08D57] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Aurelia Expert Assessment Match
                      </span>
                      <h3 className="font-serif text-2xl text-white font-light">
                        {computeQuizRecommendation().service}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-neutral-405 leading-relaxed font-light">
                      {computeQuizRecommendation().desc}
                    </p>

                    {/* Bulleting list */}
                    <div className="space-y-2.5 pt-4 border-t border-neutral-850 text-left max-w-xs mx-auto">
                      <span className="text-[8px] font-mono text-neutral-500 tracking-wider uppercase block">RECOMMENDED MILESTONES:</span>
                      {computeQuizRecommendation().deliverables.map((del, idx) => (
                        <div key={idx} className="flex gap-2 items-center text-xs text-neutral-350">
                          <Check className="w-3.5 h-3.5 text-luxury-gold" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 hover:border-neutral-700 rounded text-[9.5px] font-sans tracking-widest font-bold text-neutral-450 hover:text-white uppercase mt-4 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake adviser match</span>
                    </button>
                  </motion.div>
                )}

              </motion.div>
            )}

            {/* WORKSPACE 4: Brochure archive compilation */}
            {activeTab === 'brochure' && (
              <motion.div
                key="brochure"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-sm flex flex-col items-center justify-center space-y-6"
              >
                {brochureState === 'idle' && (
                  <form onSubmit={triggerBrochureCompile} className="space-y-5 text-center w-full">
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg text-white font-light">
                        Aurelia Corporate Brochure Archive
                      </h3>
                      <p className="text-[10px] text-neutral-500 font-sans tracking-wide leading-relaxed">
                        Register your address to instantly receive the current SIA high-contrast monograph with materials diagnostics portfolios.
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div className="relative">
                        <Smartphone className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                        <input
                          type="email"
                          required
                          placeholder="client@governance.com"
                          value={clientRegEmail}
                          onChange={(e) => setClientRegEmail(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                          id="brochure-reg-email"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded bg-[#B08D57] hover:bg-[#C6A36B] text-black text-[10px] font-sans font-extrabold uppercase tracking-widest transition-all focus:outline-none cursor-pointer"
                        id="btn-trigger-brochure-submit"
                      >
                        Request Monograph Compiled
                      </button>
                    </div>
                  </form>
                )}

                {brochureState === 'compiling' && (
                  <div className="text-center space-y-4 py-8">
                    <div className="animate-spin h-10 w-10 border-4 border-[#B08D57] border-t-transparent rounded-full mx-auto" />
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-medium text-white italic">Compiling Portfolio logs...</h4>
                      <p className="text-[9.5px] font-mono text-neutral-500 uppercase tracking-widest animate-pulse">Assembling SIA-102 blueprint directories</p>
                    </div>
                  </div>
                )}

                {brochureState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-5 p-5 bg-neutral-950 border border-neutral-850 rounded w-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#B08D57]/10 flex items-center justify-center mx-auto text-luxury-gold">
                      <FileText className="w-6 h-6 animate-bounce" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-lg text-white font-light">Monograph Dispatched</h4>
                      <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                        A dynamic secure link containing our latest high-resolution monograph has been sent to <strong className="text-white">{clientRegEmail}</strong>.
                      </p>
                    </div>

                    <button
                      onClick={() => { setBrochureState('idle'); setClientRegEmail(''); }}
                      className="w-full py-2 border border-neutral-850 hover:border-neutral-700 bg-neutral-900 rounded text-[9px] font-mono tracking-widest text-neutral-450 uppercase transition-all"
                    >
                      REQUEST NEW MONOGRAPH
                    </button>
                  </motion.div>
                )}

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

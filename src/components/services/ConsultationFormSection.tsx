import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, User, Mail, Phone, MapPin, Calendar, MessageSquare, 
  DollarSign, Sparkles, Sliders, Calculator, ShieldCheck, MessageCircle 
} from 'lucide-react';

interface ConsultationFormSectionProps {
  onFormSubmitSuccess: (name: string, phone: string, email: string) => void;
  serviceTitlePref?: string; // Preselected option from tabs clicks
}

export default function ConsultationFormSection({ 
  onFormSubmitSuccess, 
  serviceTitlePref = 'Architecture' 
}: ConsultationFormSectionProps) {
  
  // Form coordinates
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: serviceTitlePref,
    budget: '$3M - $5M',
    location: '',
    timeline: 'Immediate',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  // Interactive Pricing Calculator State
  const [floorArea, setFloorArea] = useState(400); // 400 sqm
  const [finishGrade, setFinishGrade] = useState<'classic' | 'ultra' | 'sovereign'>('ultra');

  const calcMinBudget = () => {
    let multiplier = 5000; // Classic
    if (finishGrade === 'ultra') multiplier = 9500;
    if (finishGrade === 'sovereign') multiplier = 16000;
    return floorArea * multiplier;
  };

  const getRecommendedService = () => {
    const budget = calcMinBudget();
    if (budget < 2000000) return 'Interior Design & Space Planning';
    if (budget >= 2000000 && budget < 8000000) return 'Architecture & Residential Construction';
    return 'Full Sovereign Turnkey Masterpiece';
  };

  const syncCalculatorWithForm = () => {
    const budgetValue = calcMinBudget();
    let budgetTier = '$1M - $3M';
    if (budgetValue >= 3000000 && budgetValue < 5000000) budgetTier = '$3M - $5M';
    if (budgetValue >= 5000000 && budgetValue < 1000000) budgetTier = '$5M - $10M';
    if (budgetValue >= 10000000) budgetTier = '$10M+';

    setFormData(prev => ({
      ...prev,
      budget: budgetTier,
      projectType: budgetValue >= 8000000 ? 'Turnkey Solutions' : prev.projectType,
      message: `Simulated custom dimensions: ${floorArea} sqm, Finish Tier: ${finishGrade.toUpperCase()}. Recommended core approach: ${getRecommendedService()}.`
    }));

    // Scroll slightly to form
    const formElement = document.querySelector('#concierge-briefing-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const code = 'AUR-' + Math.floor(Math.random() * 89999 + 10000);
      setTicketRef(code);
      onFormSubmitSuccess(formData.name, formData.phone, formData.email);
    }, 1500);
  };

  return (
    <section className="bg-neutral-900 py-24 md:py-32 relative text-white" id="book-consultation">
      {/* Background linear aesthetics */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute bottom-[10%] right-[85%] w-96 h-96 bg-[#B08D57]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core title and header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
            CONCIERGE SCHEDULER ATELIER
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Schedule a Private <span className="italic font-normal text-[#B08D57]">Design Consultation</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm">
            Use our interactive pricing and spatial estimator card below to instantly capture recommended budget thresholds, or fill out the master inquiry form directly.
          </p>
        </div>

        {/* 2 Column Interaction Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Interactive Pricing inquiry calculator (Cols 5) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-850 p-8 rounded shadow-2xl space-y-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#B08D57]" />
                <h3 className="font-serif text-xl font-light text-white tracking-wide">
                  Luxury Spatial Estimator
                </h3>
              </div>
              <p className="text-[10px] text-neutral-500 font-sans tracking-wide">
                Custom calculate custom layouts values instantly.
              </p>
            </div>

            {/* Slider track area */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-mono text-neutral-400">
                <span>ESTIMATED PROPERTY SIZE</span>
                <span className="text-[#B08D57] font-bold">{floorArea} sqm</span>
              </div>
              <input 
                type="range" 
                min={80}
                max={3000}
                step={20}
                value={floorArea}
                onChange={(e) => setFloorArea(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#B08D57]"
                id="calculator-range-slider"
              />
              <div className="flex justify-between text-[9px] font-mono text-neutral-600">
                <span>80 SQM PENTHOUSE</span>
                <span>3,000 SQM MASTER ESTATE</span>
              </div>
            </div>

            {/* Finish Tier Selector Buttons */}
            <div className="space-y-3">
              <span className="block text-xs font-mono text-neutral-400 uppercase tracking-widest">
                FINISHING SELECTION MATERIAL TIER
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { key: 'classic', label: 'Classic Luxury', sub: 'Standard Carrara' },
                  { key: 'ultra', label: 'Ultra Prestige', sub: 'Custom Gilded' },
                  { key: 'sovereign', label: 'Sovereign', sub: 'Infinite Bespoke' }
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setFinishGrade(tier.key as any)}
                    className={`p-3 text-left rounded border transition-all focus:outline-none cursor-pointer ${
                      finishGrade === tier.key
                        ? 'border-[#B08D57] bg-[#B08D57]/10 text-white'
                        : 'border-neutral-850 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider">{tier.label}</div>
                    <div className="text-[8px] text-neutral-500 font-mono mt-0.5">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculated Estimates */}
            <div className="p-5 rounded bg-neutral-900 border border-neutral-850 space-y-4">
              <div className="flex justify-between items-end border-b border-neutral-800/60 pb-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-bold">
                  Recommended Baseline Budget
                </span>
                <span className="font-serif text-xl md:text-2xl text-[#B08D57] tracking-tight leading-none font-medium">
                  CHF {calcMinBudget().toLocaleString()}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#B08D57] font-bold block">
                  RECOMMENDED SERVICES PACKAGE
                </span>
                <p className="text-xs font-sans text-neutral-300 leading-relaxed font-light">
                  {getRecommendedService()}
                </p>
              </div>

              {/* Sync button to push into direct form */}
              <button
                onClick={syncCalculatorWithForm}
                className="w-full py-3 rounded bg-[#B08D57] hover:bg-[#C6A36B] text-black text-[10px] font-sans font-extrabold uppercase tracking-widest text-center mt-2.5 transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
                id="btn-sync-calculator-form"
              >
                <span>Synchronize with briefing form</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct WhatsApp Concierge Help Button */}
            <div className="pt-6 border-t border-neutral-850/60 text-center space-y-3">
              <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                OR REACH OUR DESK INSTANTLY
              </span>
              <a
                href="https://wa.me/41441234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 hover:border-emerald-500 bg-neutral-900 text-xs text-neutral-300 hover:text-emerald-400 transition-colors focus:outline-none"
                id="floating-whatsapp-trigger"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Chat with Concierge WhatsApp</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: The Master Form (Cols 7) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-850 p-8 md:p-12 rounded shadow-2xl relative" id="concierge-briefing-form">
            
            {/* Dynamic Success view */}
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2 border-b border-neutral-850 pb-5">
                  <h3 className="font-serif text-2xl text-white font-light tracking-wide flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#B08D57]" />
                    Briefing File Setup
                  </h3>
                  <p className="text-[10px] text-neutral-500 font-sans leading-relaxed tracking-wide">
                    Your details are encrypted and maintained under private Swiss non-disclosure rules.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alister Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                      id="form-name-input"
                    />
                  </div>
                </div>

                {/* Email vs Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                      <input
                        type="email"
                        required
                        placeholder="alister@sterling.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                        id="form-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                      <input
                        type="tel"
                        required
                        placeholder="+41 (44) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                        id="form-phone-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Typology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Project Typology</label>
                    <div className="relative">
                      <Sliders className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none appearance-none cursor-pointer font-bold"
                        id="form-project-select"
                      >
                        <option value="Architecture">Architecture Design</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Construction">Construction Precision</option>
                        <option value="Turnkey Solutions">Turnkey Solutions</option>
                        <option value="Landscape Design">Landscape Gardens</option>
                        <option value="Project Management">Project Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Preferred Budget</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none appearance-none cursor-pointer font-bold"
                        id="form-budget-select"
                      >
                        <option value="$1M - $3M">$1M - CHF 3M</option>
                        <option value="$3M - $5M">CHF 3M - CHF 5M</option>
                        <option value="$5M - $10M">CHF 5M - CHF 10M</option>
                        <option value="$10M+">CHF 10M+ (Sovereign)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location and Launch date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Property Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zurich, Switzerland"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                        id="form-location-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Launch Timeline</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none appearance-none cursor-pointer font-bold"
                        id="form-timeline-select"
                      >
                        <option value="Immediate">Immediate / Planning active</option>
                        <option value="3-6 Months">Within 3 - 6 Months</option>
                        <option value="6-12 Months">Within 6 - 12 Months</option>
                        <option value="Archival Inquiry">Archival / Spec only</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Narrative Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono font-bold">Narrative Vision</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                    <textarea
                      rows={3}
                      placeholder="Share elements of your cliffside, double-glazing, glass desires..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#B08D57] rounded p-3 pl-10 text-xs font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600 resize-none"
                      id="form-message-input"
                    />
                  </div>
                </div>

                {/* Buttons submissions */}
                <div className="pt-4 border-t border-neutral-850/60 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 rounded bg-[#B08D57] hover:bg-[#C6A36B] text-black text-xs font-sans font-bold uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
                    id="btn-form-submit-master"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4.5 w-4.5 border-2 border-black border-t-transparent rounded-full" />
                        <span>Verifying Ledger...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Private Request</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              /* Inside success screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6 flex flex-col items-center justify-center h-full"
                id="form-success-stage"
              >
                <div className="w-16 h-16 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#B08D57]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-white font-light tracking-wide">
                    Ledger Registered
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B08D57]">
                    TICKET REF: {ticketRef}
                  </p>
                </div>

                <p className="text-neutral-400 text-xs md:text-sm font-sans max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong className="text-white font-medium">{formData.name}</strong>. Your master vision details have been securely routed to our lead design partner in Zürich under strict NDA. An agent will contact you at <strong className="text-white font-medium">{formData.phone}</strong> or email you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 border border-neutral-800 hover:border-neutral-700 rounded text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
                  id="btn-register-new-form"
                >
                  Register another Briefing
                </button>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, MapPin, Sparkles, CheckCircle, DollarSign, Building } from 'lucide-react';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookConsultationModal({ isOpen, onClose }: BookConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    budget: '$3M - $5M',
    location: '',
    timeline: 'Immediate',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const projectTypes = [
    'Architecture',
    'Interior Design',
    'Construction',
    'Turnkey Solutions',
    'Renovation',
    'Landscape Design'
  ];

  const budgetTiers = [
    '$1M - $3M',
    '$3M - $5M',
    '$5M - $10M',
    '$10M+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate unique luxury reference code
      const code = 'AUR-' + Math.floor(Math.random() * 89999 + 10000);
      setBookingCode(code);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 z-50 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden pointer-events-none">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 180 }}
              className="w-full max-w-xl h-full bg-neutral-900 border-l border-neutral-800 text-neutral-100 p-8 md:p-12 flex flex-col justify-between overflow-y-auto pointer-events-auto shadow-2xl"
              id="modal-box"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-6">
                <div>
                  <h3 className="font-serif text-3xl tracking-wide text-neutral-50 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-luxury-gold" />
                    Private Consultation
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-neutral-400 mt-1">Concierge Booking Service</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-400 hover:text-neutral-200 transition-all rounded"
                  id="close-button"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isSuccess ? (
                /* Form Content */
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                      Please convey your project vision. Our elite design partners will review your request and call to schedule an initial visual briefing.
                    </p>

                    {/* Name input */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alister Sterling"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 pl-10 text-sm font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                          id="input-name"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                          <input
                            type="email"
                            required
                            placeholder="alister@sterling.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 pl-10 text-sm font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                            id="input-email"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Phone Number</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 0192"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 pl-10 text-sm font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                            id="input-phone"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Project Typology</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-2.5 text-xs text-center border rounded transition-all font-sans tracking-wider hover:bg-neutral-800 ${
                              formData.projectType === type
                                ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold font-medium'
                                : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Tier */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Estimated Luxury Budget</label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {budgetTiers.map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`p-2 w-full text-xs text-center border rounded transition-all font-sans tracking-wider hover:bg-neutral-800 ${
                              formData.budget === tier
                                ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold font-medium'
                                : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location and Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Project Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Malibu, CA"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 pl-10 text-sm font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600"
                            id="input-location"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Launch Period</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 pl-10 text-sm font-sans tracking-wide text-white outline-none transition-all appearance-none cursor-pointer"
                            id="input-timeline"
                          >
                            <option value="Immediate">Immediate / Ready</option>
                            <option value="3-6 Months">Within 3-6 Months</option>
                            <option value="6-12 Months">Within 6-12 Months</option>
                            <option value="Planning Phase">Planning Phase Only</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Vision Narrative (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Speak of high cliffs, glass desires, bespoke layouts..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-luxury-gold rounded p-3 text-sm font-sans tracking-wide text-white outline-none transition-all placeholder:text-neutral-600 resize-none"
                        id="input-message"
                      />
                    </div>
                  </div>

                  {/* Submission buttons */}
                  <div className="pt-6 border-t border-neutral-800 mt-6 flex gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 p-3 border border-neutral-800 hover:border-neutral-700 bg-transparent text-sm uppercase tracking-widest text-neutral-400 hover:text-neutral-200 transition-all rounded transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] p-3 bg-luxury-gold hover:bg-luxury-gold-hover text-black font-semibold text-sm uppercase tracking-widest transition-all rounded shadow-md group relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Verifying...
                        </span>
                      ) : (
                        'Request Briefing'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success view */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col justify-between py-8 text-center items-center"
                >
                  <div className="my-auto space-y-6">
                    <div className="relative inline-flex items-center justify-center p-4 bg-luxury-gold/10 rounded-full border border-luxury-gold/30">
                      <CheckCircle className="w-16 h-16 text-luxury-gold animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-3xl text-neutral-50 tracking-wider">Inquiry Confirmed</h4>
                      <p className="text-sm font-sans uppercase tracking-widest text-luxury-gold">Reference: {bookingCode}</p>
                    </div>
                    <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mx-auto">
                      Thank you, <strong className="text-neutral-100 font-medium">{formData.name}</strong>. Your master vision folder has been securely routed to our lead design partner. An agent will contact you at <strong className="text-neutral-100 font-medium">{formData.phone}</strong> or email you within 1 business hour.
                    </p>
                    <div className="pt-4 border-t border-neutral-800/60 max-w-sm mx-auto">
                      <p className="text-xs text-neutral-500 italic">
                        Digital briefing invitations have been dispatched to {formData.email}.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Architecture',
                        budget: '$3M - $5M',
                        location: '',
                        timeline: 'Immediate',
                        message: ''
                      });
                      onClose();
                    }}
                    className="w-full max-w-sm p-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-all font-sans text-xs uppercase tracking-widest rounded-md mt-6"
                    id="back-home-button"
                  >
                    Return to Gallery
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

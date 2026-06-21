import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Compass, Clock, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 font-sans border-t border-neutral-900 pt-20 pb-12 relative overflow-hidden" id="main-footer">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-neutral-900">
          
          {/* Column 1: Brand info and Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-luxury-gold text-black">
                <Compass className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-white leading-none">AURELIA</span>
                <span className="text-[7px] uppercase tracking-[0.3em] text-neutral-500 font-bold mt-1">Architecture & Design</span>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              We design extraordinary architecture, premium interiors, and exceptional living experiences. Championing timeless modernism worldwide.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3 pt-2">
              <span className="block text-xs uppercase tracking-widest text-neutral-200 font-semibold font-sans">
                Subscribe to Aurelia Muse
              </span>
              <p className="text-xs text-neutral-500 font-light font-sans">
                Curated quarterly updates on design science & luxury real estate.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="architect@studio.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-luxury-gold rounded p-2.5 text-xs text-white outline-none transition-all placeholder:text-neutral-600 font-sans"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-luxury-gold hover:bg-luxury-gold-hover text-black rounded transition-all focus:outline-none flex items-center justify-center"
                    aria-label="Subscribe Newsletter"
                    id="btn-newsletter-submit"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-2.5 bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold rounded text-xs text-center font-medium font-sans mt-2"
                >
                  Subscribed to Aurelia Muse.
                </motion.div>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-base text-white tracking-wider font-medium">Quick Links</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-luxury-gold transition-colors block">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-luxury-gold transition-colors block">About Studio</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Services</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="hover:text-luxury-gold transition-colors block">Featured Projects</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')} className="hover:text-luxury-gold transition-colors block">Our Process</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="hover:text-luxury-gold transition-colors block">Gallery Exhibit</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-luxury-gold transition-colors block">Contact Concierge</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-6">
            <h3 className="font-serif text-base text-white tracking-wider font-medium">Services</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Architecture</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Interior Design</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Construction Precision</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Turnkey Deliveries</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Heritage Renovation</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-luxury-gold transition-colors block">Landscape Pavilions</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Schedule */}
          <div className="space-y-6">
            <h3 className="font-serif text-base text-white tracking-wider font-medium">Headquarters</h3>
            
            <ul className="space-y-4 text-sm font-light">
              <li className="flex gap-3.5 items-start">
                <MapPin className="w-4 h-4 text-luxury-gold cursor-help shrink-0 mt-1" />
                <span>
                  Bahnhofstrasse 12, <br />
                  8001 Zurich, Switzerland
                </span>
              </li>
              <li className="flex gap-3.5 items-center">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:+41441234567" className="hover:text-luxury-gold transition-colors">+41 (44) 123-4567</a>
              </li>
              <li className="flex gap-3.5 items-center">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="mailto:concierge@aurelia.com" className="hover:text-luxury-gold transition-colors">concierge@aurelia.com</a>
              </li>
              <li className="flex gap-3.5 items-start pt-2 border-t border-neutral-900">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs text-neutral-500 space-y-0.5">
                  <span className="font-medium text-neutral-400">Working Hours:</span>
                  <span>Monday - Friday: 09:00 - 18:00</span>
                  <span>Saturday: By Private Appointment</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row and social media buttons */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Corporate rights */}
          <p className="text-xs text-neutral-600 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} Aurelia Architecture & Design Int. All rights reserved.
            <br />
            <span className="text-[10px] text-neutral-700 font-mono tracking-wide mt-1 block">Crafted in Switzerland</span>
          </p>

          {/* Social media circle buttons */}
          <div className="flex gap-3" id="social-buttons-box">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-800 hover:border-luxury-gold text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-neutral-900"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-800 hover:border-luxury-gold text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-neutral-900"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-800 hover:border-luxury-gold text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-neutral-900"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-neutral-800 hover:border-luxury-gold text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-neutral-900"
              aria-label="Chat via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Elegant Back to top */}
          <button
            onClick={handleBackToTop}
            className="p-3 border border-neutral-800 hover:border-luxury-gold text-neutral-400 hover:text-white rounded-md transition-all flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold focus:outline-none cursor-pointer hover:bg-neutral-900"
            id="footer-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

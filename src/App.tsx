import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookConsultationModal from './components/BookConsultationModal';
import FloatingEnquiry from './components/FloatingEnquiry';

// Services page modular workspace
import StickySideNavServices from './components/services/StickySideNavServices';
import ServicesHero from './components/services/ServicesHero';
import IntroSection from './components/services/IntroSection';
import OurServicesGrid from './components/services/OurServicesGrid';
import ServiceDetailsExpanded from './components/services/ServiceDetailsExpanded';
import WorkProcessTimeline from './components/services/WorkProcessTimeline';
import WhyChooseUsGrid from './components/services/WhyChooseUsGrid';
import ServiceComparisonTable from './components/services/ServiceComparisonTable';
import ServiceGallery from './components/services/ServiceGallery';
import TestimonialSlider from './components/services/TestimonialSlider';
import ServiceFAQs from './components/services/ServiceFAQs';
import ConsultationFormSection from './components/services/ConsultationFormSection';
import ExtraPremiumFeatures from './components/services/ExtraPremiumFeatures';
import CallToActionSection from './components/services/CallToActionSection';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  // Interactive selected deep dive state
  const [selectedServiceId, setSelectedServiceId] = useState('architecture');
  
  // Preselected service title for the booking form
  const [prefServiceTitle, setPrefServiceTitle] = useState('Architecture');

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  // Synchronize card clicks with expansion deck
  const handleSelectServiceFromGrid = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    // Smooth scroll down to detailed target
    const target = document.querySelector('#detailed-service-deck');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Synchronize detailed CTA clicks with preselect-focused booking form
  const handleOpenConsultationWithPreselect = (serviceTitle: string) => {
    setPrefServiceTitle(serviceTitle);
    
    // Smooth scroll to core form container
    const target = document.querySelector('#book-consultation');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmitSuccess = (name: string, phone: string, email: string) => {
    console.log(`Corporate briefing client coordinates verified under NDA: Name: ${name}, Phone: ${phone}`);
  };

  return (
    <div className="relative min-h-screen bg-[#F8F6F2] selection:bg-[#B08D57] selection:text-white" id="luxury-services-page-root">
      
      {/* Services Bullet Indicator Panel */}
      <StickySideNavServices />

      {/* Navigation Brand Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Cinematic Page Hero */}
      <ServicesHero onOpenConsultation={handleOpenConsultation} />

      {/* Company Introduction Section */}
      <IntroSection />

      {/* Core Capabilities Preview Grid */}
      <OurServicesGrid onSelectService={handleSelectServiceFromGrid} />

      {/* Interactive Deep-Dive Specification Deck */}
      <ServiceDetailsExpanded 
        selectedServiceId={selectedServiceId}
        onSelectServiceId={setSelectedServiceId}
        onOpenConsultationWithService={handleOpenConsultationWithPreselect}
      />

      {/* Six Step Operational Work Process Sequence */}
      <WorkProcessTimeline />

      {/* Core Feature Advantages Grid */}
      <WhyChooseUsGrid />

      {/* Interactive Service Framework Comparison table */}
      <ServiceComparisonTable />

      {/* Completed Exhibits Works Masonry Gallery */}
      <ServiceGallery />

      {/* Appraisals of Sovereignty Slider */}
      <TestimonialSlider />

      {/* Knowledge-Base Frequently Asked Inquiries Accordion */}
      <ServiceFAQs />

      {/* Interactive spatial-budget estimator and private briefing Scheduler */}
      <ConsultationFormSection 
        onFormSubmitSuccess={handleFormSubmitSuccess} 
        serviceTitlePref={prefServiceTitle}
      />

      {/* Bento extras: hotspots, 360 virtual simulation & match quiz */}
      <ExtraPremiumFeatures />

      {/* Action final Bottom cta section */}
      <CallToActionSection onOpenConsultation={handleOpenConsultation} />

      {/* Navigation Brand Footer */}
      <Footer />

      {/* General Booking Overlay sheets Modal */}
      <BookConsultationModal 
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Persistent General Action floating desk */}
      <FloatingEnquiry onOpenConsultation={handleOpenConsultation} />

    </div>
  );
}

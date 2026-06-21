import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookConsultationModal from './components/BookConsultationModal';
import FloatingEnquiry from './components/FloatingEnquiry';

// About Us modular components
import AboutHero from './components/about/AboutHero';
import OurStory from './components/about/OurStory';
import MissionVision from './components/about/MissionVision';
import CoreValues from './components/about/CoreValues';
import OurJourney from './components/about/OurJourney';
import Leadership from './components/about/Leadership';
import OurTeam from './components/about/OurTeam';
import WhyTrustUs from './components/about/WhyTrustUs';
import Achievements from './components/about/Achievements';
import Certifications from './components/about/Certifications';
import AwardsShowcase from './components/about/AwardsShowcase';
import WorkProcess from './components/about/WorkProcess';
import TestimonialCarousel from './components/about/TestimonialCarousel';
import OfficeGallery from './components/about/OfficeGallery';
import FAQAccordion from './components/about/FAQAccordion';
import CTASectionAbout from './components/about/CTASectionAbout';
import StickySideNav from './components/about/StickySideNav';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleOpenProjects = () => {
    // Falls back to direct smooth scroll to FAQ description or footer info
    const target = document.querySelector('#our-journey');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-beige selection:bg-[#B08D57] selection:text-white" id="luxury-about-page-root">
      {/* Sticky Bullet Navigation Indicator (Extra Premium) */}
      <StickySideNav />

      {/* Primary Navigation Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Pages Hero Section */}
      <AboutHero />

      {/* Our Corporate Story (Origins and Restraint) */}
      <OurStory />

      {/* Dual Mission & Vision Layout */}
      <MissionVision />

      {/* Company Achievements Counter Board */}
      <Achievements />

      {/* Six Premium Core Values Grid */}
      <CoreValues />

      {/* Interactive Selected Journeys Timeline */}
      <OurJourney />

      {/* Director & Founder Personal Video Statement */}
      <Leadership />

      {/* Elite Collaborator Team Grid */}
      <OurTeam />

      {/* 8-Grid Why Clients Trust Us */}
      <WhyTrustUs />

      {/* Verification Credentials & Certified Seals */}
      <Certifications />

      {/* Awards of Innovation Horizontal Showcase */}
      <AwardsShowcase />

      {/* Six Step Operational Work Process */}
      <WorkProcess />

      {/* Premium Sliding Appraisals and Client Testimonials */}
      <TestimonialCarousel />

      {/* Interactive Ateliers Location Map selector */}
      <OfficeGallery />

      {/* Common Queries Accordion Panel */}
      <FAQAccordion />

      {/* Infinite Scrolling CTA Engagement Block */}
      <CTASectionAbout 
        onOpenConsultation={handleOpenConsultation} 
        onOpenProjects={handleOpenProjects}
      />

      {/* Shared Premium Indexes Footer */}
      <Footer />

      {/* Consultation Scheduling Sheets Modal */}
      <BookConsultationModal 
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Dynamic Floating Chat Enquiry panel */}
      <FloatingEnquiry onOpenConsultation={handleOpenConsultation} />
    </div>
  );
}

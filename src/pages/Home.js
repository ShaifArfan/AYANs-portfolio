import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

SmoothScrollbar.use(OverscrollPlugin);
export default function Home() {
  return (
    <div>
      <Scrollbar>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactBanner />
        <Footer />
      </Scrollbar>
    </div>
  );
}

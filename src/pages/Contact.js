import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Map from '../components/Map';

export default function Contact() {
  return (
    <>
      {/* <Scrollbar> */}
      <ContactSection />
      <Map />
      <Footer />
      {/* </Scrollbar> */}
    </>
  );
}

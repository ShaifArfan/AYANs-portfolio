import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 2rem;
  }
  .left,
  .right {
    flex: 1;
    width: 100%;
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactForm />
          </div>
          <div className="right">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, dolor culpa nisi ipsum, nulla neque nesciunt magnam
              consequuntur odit odio eveniet, maxime repudiandae autem. Ullam
              non recusandae quisquam. Ut, eveniet!
            </h1>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

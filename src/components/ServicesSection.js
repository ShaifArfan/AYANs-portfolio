import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { FiCornerRightUp } from 'react-icons/fi';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem icon={<MdDesktopMac />} title="web design" />
          <ServicesSectionItem icon={<MdCode />} title="web dev" />
          <ServicesSectionItem icon={<FiCornerRightUp />} title="SEO" />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

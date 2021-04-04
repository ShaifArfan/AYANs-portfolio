import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  .services__allItems {
    display: flex;
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem icon={<MdDesktopMac />} />
          <ServicesSectionItem icon={<MdDesktopMac />} />
          <ServicesSectionItem icon={<MdDesktopMac />} />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

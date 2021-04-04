import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <ProjectItem title="project 1" />
          <ProjectItem title="project 2" />
          <ProjectItem title="project 3" />
        </div>
      </div>
    </ProjectSectionStyle>
  );
}

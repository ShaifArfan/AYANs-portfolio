import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Shaif Arfan</span>
              </p>
              <h2 className="about__heading">a freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fringilla pulvinar et fringilla nunc enim neque purus lorem.
                  Tellus etiam malesuada quis lectus ultrices. Neque ultrices
                  urna, nisl, convallis bibendum lorem lectus. Euismod suscipit
                  faucibus nibh proin sit fermentum in consequat ut.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fringilla pulvinar et fringilla nunc enim neque purus lorem.
                  Tellus etiam malesuada quis lectus ultrices. Neque ultrices
                  urna, nisl, convallis bibendum lorem lectus. Euismod suscipit
                  faucibus nibh proin sit fermentum in consequat ut.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fringilla pulvinar et fringilla nunc enim neque purus lorem.
                  Tellus etiam
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
              <AboutInfoItems
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItems
                title="Varsity"
                items={['University Of Chitiagong']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItems
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItems
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItems
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

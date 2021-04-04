import React from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import PText from './PText';
import SectionTitle from './SectionTitle';

const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__info {
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export default function TestimonialsSection() {
  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="see what our clients say about us"
          heading="Testimonials"
        />
        <div className="testimonial__info">
          <div className="testimonial__desc">
            <PText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </PText>
          </div>
          <h2 className="testimonial__name">Sayed Ahmed</h2>
          <p className="testimonial__title">
            Head of Marketing, <br /> web cifar
          </p>
        </div>

        <div className="arrows">
          <div className="next">
            <MdArrowForward />
          </div>
          <div className="prev">
            <MdArrowBack />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}

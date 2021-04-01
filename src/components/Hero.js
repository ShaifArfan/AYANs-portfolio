import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';

const HeroStyles = styled.div`
  .hero {
    min-height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -23rem;
    .hero__info__desc {
      max-width: 500px;
      margin: 0 auto;
      font-size: 1.8rem;
      line-height: 1.3em;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
      .hero__info__desc {
        font-size: 1.4rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name"> Shaif Arfan</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <p className="hero__info__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </p>
            <Button btnText="see my works" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

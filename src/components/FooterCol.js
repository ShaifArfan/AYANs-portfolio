import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'Col Heaing',
  links = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'About',
      link: '/about',
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li>
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}

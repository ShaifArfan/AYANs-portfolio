import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
    }
    a {
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
    }
    .active_nav {
      color: var(--white);
    }
  }
`;

export default function NavMenu() {
  return (
    <NavStyles>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active_nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}

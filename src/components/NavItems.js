import React from 'react';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItemsStyles = styled.div`
  .navItems {
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
    .active {
      color: var(--white);
    }
  }

  /* for mobile  */
  .navItems {
    /* display: none; */
    background-color: var(--deep-dark);
    padding: 2rem;
    width: 80%;
    border-radius: 12px;
    position: absolute;
    right: 1rem;
    top: 1rem;
    .closeNavIcon {
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      * {
        pointer-events: none;
      }
    }
    li {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default function NavItems({ setShowNav }) {
  return (
    <NavItemsStyles>
      <ul className="navItems">
        <div
          className="closeNavIcon"
          onClick={() => setShowNav((showNav) => !showNav)}
          role="button"
          onKeyDown={() => setShowNav((showNav) => !showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact>
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
    </NavItemsStyles>
  );
}

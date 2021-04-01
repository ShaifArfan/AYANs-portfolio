import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    color: black;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnText = 'test' }) {
  return (
    <ButtonStyle>
      <Link className="button" to="/projects">
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

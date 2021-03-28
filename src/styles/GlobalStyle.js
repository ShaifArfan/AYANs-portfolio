import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
  }
  button{
    outline: none
  }

`;
export default GlobalStyles;

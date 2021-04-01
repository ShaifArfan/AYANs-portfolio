import { createGlobalStyle } from 'styled-components';
import RobotoMonoMedium from '../assets/fonts/RobotoMono-Medium.ttf';
import RobotoMonoSemiBold from '../assets/fonts/RobotoMono-SemiBold.ttf';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono Medium';
    src: url(${RobotoMonoMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono SemiBold';
    src: url(${RobotoMonoSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Medium';
    src: url(${MontserratMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }

`;

export default Typography;

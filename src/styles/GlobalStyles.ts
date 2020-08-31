import { createGlobalStyle } from 'styled-components';

const GlboalStyles = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;

export default GlboalStyles;

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

  :root {
    --text-color-white: #EAF2EF;
    --text-color-black: #000000;
    --color-primary: #521945;
    --color-secondary: #3E1334;
  }

`;

export default GlboalStyles;

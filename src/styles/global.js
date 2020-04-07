import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar
  {
    width: 12px;
  }

::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.0300);
  }

::-webkit-scrollbar-thumb
  {
    background-color: rgba(140,140,140,0.7);
  }
`;

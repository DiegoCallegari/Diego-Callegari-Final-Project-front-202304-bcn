import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: "${(props) => props.theme.fonts.primary}, sans-serif";
    font-size: 1rem;
  }

  body {
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font: inherit;
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  input {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;

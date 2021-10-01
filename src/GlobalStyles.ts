import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: inherit;
  }


`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
  }

  button {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);

    ::focus {
      border: none;
    }
  }
`;

export default GlobalStyle;

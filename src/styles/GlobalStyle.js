import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

	  * {
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
      }
      
    input {
        border-style: none;
        cursor: pointer;
      }
    a {
        text-decoration: none;
        color: black;
      }
    button {
        border-style: none;
        cursor: pointer;
      }
`;
export default GlobalStyle;

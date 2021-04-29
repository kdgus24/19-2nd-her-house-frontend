import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
      margin : 0;
      padding : 0;
      box-sizing : border-box;
      outline : none;
      }
      #root {
        font-size : 16px;
        font-family: 'Noto Sans KR', sans-serif;
      }
      
    input {
        border-style: none;
        cursor: pointer;
      }
    a {
        text-decoration: none;
      }
    button {
        border-style: none;
        cursor: pointer;
      }
`;
export default GlobalStyle;

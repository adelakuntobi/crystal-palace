import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Cormorant Infant', serif;
  }
  h1,h2,h3,h4,h5,h6{
    color: #10131A;
  }
  p{
    color: #4F4F4F;
  }
  h2{
    font-size: 3rem;
    font-weight: bold;
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components/macro'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${variables};
 
  html {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }

  ul {
    list-style: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--principal-blue);
    color: var(--white)
  }

`

export default GlobalStyle

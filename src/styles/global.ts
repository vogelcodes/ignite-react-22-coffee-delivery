import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h2 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 2rem;
  }
  h3 {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 1.5rem;
    font-weight: 800;
  }
  h4 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 1.25rem;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;

  }
  p {
    font-family: 'Roboto';
    font-size: 1.25rem;


  }
`

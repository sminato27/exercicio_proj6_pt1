import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font.family};
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input {
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body.modal-open {
    overflow: hidden;
  }
`

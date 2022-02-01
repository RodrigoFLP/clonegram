import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&family=Roboto:ital,wght@0,500;0,700;1,400&display=swap');
  html {
    box-sizing: border-box;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }

  ul { list-style: none; }

  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #e3e3e3;
    height: 100vh;
    margin: 0 auto;
    width: 100%;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 80px;
  }
  ::-webkit-scrollbar {
    display: none;
}
`

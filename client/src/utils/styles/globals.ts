import styled, { createGlobalStyle } from 'styled-components'

// import Colors from './colors'
// import Fonts from "../styles/fonts";

export const responsiveDesktop = '1000px'
export const responsiveTablet = '760px'
export const responsiveMobile = '480px'

export const clientHeaderHeight = '70px'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Rubik', sans-serif; */
    text-decoration: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent !important;
  }

  scroll-behavior: smooth;

  html {
    /* overflow: hidden; */
    &::-webkit-scrollbar {
      width: 6px;
      z-index: 1000;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: #011bcd;
    }
  }

  body {
    &::-webkit-scrollbar {
      width: 6px;
      z-index: 1000;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: #011bcd;
    }
  }
`

export default GlobalStyle

export const Window = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  overflow: auto;
`

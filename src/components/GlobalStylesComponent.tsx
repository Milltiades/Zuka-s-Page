import { createGlobalStyle } from 'styled-components'

export default function GlobalStylesComponent() {
  return (
    <GlobalStyles/>
  )
}


const GlobalStyles = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}


*{
  margin: 0;
  padding: 0;
  font-family: 'Teko', sans-serif;
 overflow-x: hidden;
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
}

`
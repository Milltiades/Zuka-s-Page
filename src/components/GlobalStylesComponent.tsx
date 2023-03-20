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
 /* overflow-x: hidden; */
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
}

.swiper-wrapper {
  width: 100vw;
}

.swiper  {
  width: 100vw;
 
 
}
.swiper-initialized{
  width: 100vw;
}

.swiper-horizontal{
  width: 100vw;
}

.swiper-backface-hidden{
  width: 100vw;
}

.swiper-slide{
height: 210px;
}
img {
  width: 100vw;
}
`


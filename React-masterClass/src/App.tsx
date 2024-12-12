import Router from "./routes/Router";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Parkinsans', 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "white",
  accentColor: "#9c88ff",
  cardBgColor: "#353b48",
};
export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#9c88ff",
  cardBgColor: "white",
};

function App() {
  const [mode, setMode] = useState(false);
  const toggleDark = () => setMode((current) => !current);
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <ThemeProvider theme={mode ? lightTheme : darkTheme}>
        {/* 해당 버튼을 coins 로 위치 변경 */}
        {/* <button onClick={toggleDark}>💡 mode change</button> */}
        <GlobalStyle />
        {/* 프롭드릴링 시작점 */}
        <Router toggleDark={toggleDark} mode={mode} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </>
  );
}

export default App;

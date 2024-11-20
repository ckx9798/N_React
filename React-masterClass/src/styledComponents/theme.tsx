//index.js  or main.js(in vite)

import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);



// App.js

const Title = styled.h1`
	color : ${props => props.theme.textColor}
`

const Wrapper = styled.div`
	background-color : ${props => props.theme.backgroundColor}
`
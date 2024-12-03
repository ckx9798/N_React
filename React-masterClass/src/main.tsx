import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  textColor: "#dfe6e9",
  bgColor: "#2d3436",
  accentColor: "#d63031",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

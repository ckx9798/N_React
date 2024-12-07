import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const Theme: DefaultTheme = {
  textColor: "#dfe6e9",
  bgColor: "#2d3436",
  accentColor: "#d63031",
};

const queyclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queyclient}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);

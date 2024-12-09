import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const queyclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queyclient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

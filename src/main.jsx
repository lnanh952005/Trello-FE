import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultMode="light" theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

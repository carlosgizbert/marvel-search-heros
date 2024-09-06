import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ui/theme/index.tsx";
import { GlobalCSS } from "./ui/styles/global-css.ts";
import { ReactQueryProvider } from "./config/cache/index.tsx";
import AppRouter from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ThemeProvider>
        <GlobalCSS />
        <AppRouter />
      </ThemeProvider>
    </ReactQueryProvider>
  </StrictMode>
);

import React from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global/index.css";
import { theme } from "./global/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Code from "./view/pages/Code/Code";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/code/:id" element={<Code />} />
        </Routes>
      </BrowserRouter>
      ,
    </ThemeProvider>
  </React.StrictMode>
);

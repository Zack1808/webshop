import React from "react";
import ReactDOM from "react-dom/client";

// Importing the costume components
import App from "./components/App";

// Importing the context
import { ThemeProvider } from "@emotion/react";

// Getting the root div
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

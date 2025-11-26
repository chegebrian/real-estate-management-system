import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PropertContext } from "./contexts/PropertyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropertContext>
      <App />
    </PropertContext>
  </StrictMode>
);

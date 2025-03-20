import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root element and render the app using the new `createRoot` API
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

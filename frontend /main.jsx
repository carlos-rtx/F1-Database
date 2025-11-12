// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/frontend /assets/styles/main.css"; // global styles
import "/frontend /assets/styles/fonts.css"; // font imports
import ErrorModule from "/../../modules/error.js"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

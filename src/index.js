import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactGA.initialize("CODE IN HERE");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();

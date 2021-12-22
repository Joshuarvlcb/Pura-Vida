import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ElementsContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ElementsContextProvider>
      <App />
    </ElementsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

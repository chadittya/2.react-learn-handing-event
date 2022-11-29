import React from "react";
import ReactDOM from "react-dom/client";
import { Toggle } from "./App";
import "./index.css";
import { LoggingButton } from "./loggingButton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toggle />
    <LoggingButton />
  </React.StrictMode>
);

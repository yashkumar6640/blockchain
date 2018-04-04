import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppLogin from "./App.1";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppLogin />
    {/* <Exporter /> */}
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

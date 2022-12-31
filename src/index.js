import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { Provider } from "../src/context/showContext";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#root")
);

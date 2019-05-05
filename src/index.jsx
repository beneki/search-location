import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/app";
import "leaflet/dist/leaflet.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

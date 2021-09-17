import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./createStore";

ReactDOM.render(
  //wrapping whole app provider for redux with store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

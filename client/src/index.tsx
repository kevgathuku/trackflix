import * as React from "react";
import * as ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import appReducer from "./reducer";
import appSagas from "./sagas";
import registerServiceWorker from "./registerServiceWorker";

require("tachyons");

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

// Start sagas
sagaMiddleware.run(appSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

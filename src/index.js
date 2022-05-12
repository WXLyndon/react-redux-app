import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

const f1 = (state = 0, action = 1) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "sub":
      return state - action.value;
    default:
      return state;
  }
};

const f2 = (state = ":", action) => {
  switch (action.type) {
    case "concat":
      return state + action.char;
    default:
      return state;
  }
};

// const f3 = (state = {}, action) => {
//   return {
//     f1: f1(state.f1, action),
//     f2: f2(state.f2, action),
//   };
// };

const f3 = combineReducers({
  number: f1,
  string: f2,
});

const store = configureStore({
  reducer: f3,
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "add", value: 1 });
// store.dispatch({ type: "add", value: 1 });
// store.dispatch({ type: "add", value: 1 });
// store.dispatch({ type: "sub", value: 1 });
// store.dispatch({ type: "sub", value: 1 });
// store.dispatch({ type: "concat", char: "abc" });
// store.dispatch({ type: "concat", char: "abc" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tw-elements";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveToLocalStorage } from "./components/LocalStorage";

store.subscribe(() => saveToLocalStorage(store.getState())); //calling the function to save the rdux state to localstorage

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* provide for redux store */}
      <Provider store={store}>
        <App />
        {/* toast container for toastify toasts */}
        <ToastContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
//If you want to start measuring performance in your app,pass a function
//to long results (for example:reportsWebVitals(console.log))
//or send to an analytics endpoint.Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

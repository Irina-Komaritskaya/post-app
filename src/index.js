import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
reportWebVitals();

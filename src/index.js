import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./utils/redux/store";
import App from "./Components/App";
import ErrorBoundary from "./Components/ErrorBoundaries";


ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root")
);

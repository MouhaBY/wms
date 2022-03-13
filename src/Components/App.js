import React from "react";
import "../Pages/App.css";
import { useSelector } from "react-redux";
import Login from "../Pages/Login/Login";
import Main from "./Main/Main";
import { selectToken } from "../utils/selectors";


function App() {
    const token = useSelector(selectToken());

    return(
        <>
            {
                token ? <Main /> : <Login />
            }
        </>
    );
}

export default App;

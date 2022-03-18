import React from "react";
import "../Pages/App.css";
import Login from "../Pages/Login/Login";
import isAuth from "../services/security/isAuth";
import Main from "./Main/Main";


function App() {
    return(
        <>
            {
                isAuth() ? <Main /> : <Login />
            }
        </>
    );
}

export default App;

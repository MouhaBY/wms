import React from "react";
import "../Pages/App.css";
import Login from "../Pages/Login";
import isAuth from "../common/services/security/isAuth";
import Main from "../Pages/Main";


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

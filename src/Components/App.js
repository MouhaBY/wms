import React from "react";
import Login from "./Login";
import Main from "./Main";
import useToken from "./useToken";


function App() {
    const { token, setToken } = useToken();

    return(
        <>
            {
                token && token ? <Main setToken={setToken} /> : <Login setToken={setToken} />
            }
        </>
    );
}

export default App;

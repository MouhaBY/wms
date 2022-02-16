import React from "react";
import PropTypes from "prop-types";

export default function Main ({ setToken }){

    function handleDisconnect(){
        setToken("");
    }

    return(
        <div>
            <h1>Main App</h1>
            <button onClick={handleDisconnect}>Se déconnecter</button>
        </div>
    );
}

Main.propTypes = {
    setToken: PropTypes.func
};
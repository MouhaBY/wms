import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logoutAction } from "../features/authentication";
import { toggleDrawerAction } from "../features/drawer";

export default function AppBar (){
    const dispatch = useDispatch()
    
    function handleDisconnect(){
        dispatch(logoutAction())
    }

    function handleDrawer(){
        dispatch(toggleDrawerAction())
    }

    return(
        <div className="appbar">
            <button onClick={handleDrawer}>Burger</button>
            <h2 className="appbar-h2">Warehouse Management System</h2>
            <button onClick={handleDisconnect}>Se déconnecter</button>
        </div>
    )
}

AppBar.propTypes = {
    setToken: PropTypes.func
};
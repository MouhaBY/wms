import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../features/authentication";
import { toggleDrawerAction } from "../features/drawer";
import { selectContact } from "../utils/selectors";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";


export default function AppBar (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contact = useSelector(selectContact());

    function handleDisconnect(){
        dispatch(logoutAction());
        navigate("/");
    }

    function handleDrawer(){
        dispatch(toggleDrawerAction());
    }

    return(
        <div className="appbar">
            <button className="discrete-button" onClick={handleDrawer}> 
                <MenuIcon style={{ color: "white" }}/>
            </button>
            <h3 className="appbar-h2">Warehouse Management System</h3>
            <span className="appbar-span">Connecté en tant que :</span>
            <h4 className="appbar-h3">{contact}</h4>
            <button className="discrete-button" onClick={handleDisconnect}>
                <LogoutIcon style={{color:"red"}}/>
            </button>
        </div>
    );
}

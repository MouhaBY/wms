import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../features/authentication";
import { toggleDrawerAction } from "../../features/drawer";
import { selectContact } from "../../utils/selectors";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";


export default function AppBar (){
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contact = useSelector(selectContact());

    function toggleDropdown(){
        setShowDropdown(!showDropdown);
    }

    function handleDisconnect(){
        dispatch(logoutAction());
        navigate("/");
    }

    function handleDrawer(){
        dispatch(toggleDrawerAction());
    }

    return(
        <div className="navbar navbar-dark bg-primary">
            <div className="d-flex justify-content-end">
                <button className="navbar-toggler" onClick={handleDrawer}> 
                    <MenuIcon style={{ color: "white" }}/>
                </button>
                <text className="navbar-brand">Warehouse Management System</text>
            </div>
            <div className="d-flex justify-content-end">
                <span className="navbar-text">Connecté en tant que : </span>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" onClick={toggleDropdown}>{contact}</button>
                </div>
                {
                    showDropdown && <div className="mydropdown">                            
                        <button className="dropdown-item" onClick={handleDisconnect}>
                            <text>Se déconnecter</text>
                            <LogoutIcon style={{color:"red"}}/>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}
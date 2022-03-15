import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { MENUS } from "./UrlHandler";
import { useNavigate } from "react-router-dom";
import { checkAccess } from "../../features/access";
import { useSelector } from "react-redux";
import { selectProfile } from "../../utils/selectors";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";


export default function Drawer(){
    const navigate = useNavigate();
    const profile = useSelector(selectProfile());

    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
            <div 
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" 
                onClick={()=>navigate("/")}
            >
                <div className="bi me-2" style={{width:40, height:32}}>
                    <WarehouseRoundedIcon fontSize="large" color="primary"/>
                </div>
                <h2 className="fs-4">WMS</h2>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    MENUS.map((menu, index)=>(
                        checkAccess(profile, menu.route) ? 
                            <li key={index} className="nav-item">
                                <RouterLink 
                                    to={menu.route} 
                                    className={"d-flex flex-row align-items-center nav-link " + (RouterLink.activeClassName ? "active" : "text-white")} 
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <svg className="bi me-2" style={{width:20, height:20}} >
                                        {menu.icon}
                                        
                                    </svg>
                                    {menu.name}
                                </RouterLink> 
                            </li>
                            : null
                    ))
                }
            </ul>
        </div>
    );
}
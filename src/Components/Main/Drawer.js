import React from "react";
import { useSelector } from "react-redux";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { MENUS } from "./UrlHandler";
import { checkAccess } from "../../features/access";
import { selectProfile, selectShowDrawer } from "../../utils/selectors";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";


export default function Drawer(){
    const navigate = useNavigate();
    const profile = useSelector(selectProfile());
    const showDrawer = useSelector(selectShowDrawer());

    return(
        <div className={"d-flex flex-column flex-shrink-0 bg-dark " + (showDrawer ? "p-3 text-white" : "")} style={{width: showDrawer ? 280 : 60}}>
            <div 
                className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"} 
                onClick={()=>navigate("/")}
            >
                <svg className={"bi "+ (showDrawer ? "me-2" : "")} style={{width:40, height:32}}>
                    <WarehouseRoundedIcon fontSize="large" color="primary"/>
                </svg>
                {
                    showDrawer && <h2 className="fs-4">WMS</h2>
                }
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto text-center">
                {
                    MENUS.map((menu, index)=>(
                        checkAccess(profile, menu.route) && 
                            <li key={index} className="nav-item">
                                <RouterLink 
                                    to={menu.route} 
                                    className={"d-flex flex-row align-items-center nav-link " + (RouterLink.activeClassName ? "active" : "text-white")} 
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <svg className="bi me-2" style={{width:showDrawer ? 20 : 24, height:showDrawer ? 20 : 24}} >
                                        {menu.icon}
                                    </svg>
                                    {showDrawer && menu.name}
                                </RouterLink> 
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}
import React from "react";
import { useSelector } from "react-redux";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { selectShowDrawer } from "../../utils/selectors";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
import FactoryIcon from "@mui/icons-material/Factory";
import SettingsIcon from "@mui/icons-material/Settings";
import hasRoles from "../../services/security/hasRoles";


const MENUS = [
    {name:"Tableau de bord", route:"dashboard", icon:<HomeIcon/>},
    {name:"Utilisateurs", route:"users", icon:<AccountCircleIcon/>, roles:["user", "admin"] }, 
    {name:"Données", route:"datas", icon:<FeedIcon/>, roles:["user"] }, 
    {name:"Inventaires", route:"inventories", icon:<FactoryIcon/> }, 
    {name:"Configurations", route:"configurations", icon:<SettingsIcon/>, roles:["admin"] }
];


export default function Drawer(){
    const navigate = useNavigate();
    const showDrawer = useSelector(selectShowDrawer());

    return(
        <div 
            className={"d-flex flex-column flex-shrink-0 bg-dark " + (showDrawer ? "p-3 text-white" : "")} 
            style={{width: showDrawer ? 280 : 60}}
        >
            <div 
                className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"} 
                onClick={ ()=>navigate("/") }
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
                        hasRoles(menu.roles) && 
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
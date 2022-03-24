import React from "react";
import { useSelector } from "react-redux";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
import FactoryIcon from "@mui/icons-material/Factory";
import SettingsIcon from "@mui/icons-material/Settings";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { selectShowDrawer } from "../../../../common/store/selectors";
import hasRoles from "../../../../common/services/security/hasRoles";
import { getRoles } from "../../../../common/routes/routes";
import siteMap from "../../../../common/routes/siteMap";


const MENUS = [
    {...siteMap.Dashboard, icon:<HomeIcon />},
    {...siteMap.Users, icon:<AccountCircleIcon />}, 
    {...siteMap.Datas, icon:<FeedIcon />}, 
    {...siteMap.Inventories, icon:<FactoryIcon /> },
    { ...siteMap.Areas, icon:<CorporateFareIcon />},
    {...siteMap.Settings, icon:<SettingsIcon />}
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
                onClick={ ()=>navigate(siteMap.Index.path) }
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
                        hasRoles(getRoles(menu.name)) && (
                            <li key={index} className="nav-item">
                                <RouterLink 
                                    to={menu.path} 
                                    className={"d-flex flex-row align-items-center nav-link " + (
                                        RouterLink.activeClassName ? "active" : "text-white")}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <svg className="bi me-2" style={{width:showDrawer ? 20 : 24, height:showDrawer ? 20 : 24}} >
                                        {menu.icon}
                                    </svg>
                                    {showDrawer && menu.description}
                                </RouterLink> 
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    );
}

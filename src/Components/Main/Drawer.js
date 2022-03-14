import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
        <div className="drawer-div">
            <div className="drawer-logo" onClick={()=>navigate("/")}>
                <WarehouseRoundedIcon fontSize="large" color="primary"/>
                <h2 className="drawer-title">WMS</h2>
            </div>
            <div>
                {
                    MENUS.map((menu, index)=>(
                        checkAccess(profile, menu.route) ? 
                            <RouterLink key={index} to={menu.route} style={{ textDecoration: "none", color: "inherit" }}>
                                <div onClick={()=>{}} className="drawer-button">
                                    {menu.name}
                                </div>
                            </RouterLink> 
                            : null
                    ))
                }
            </div>
        </div>
    );
}
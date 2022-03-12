import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MENUS } from "../Components/UrlHandler";
import { useNavigate } from "react-router-dom";


export default function Drawer(){
    const navigate = useNavigate()

    return(
        <div className="drawer-div">
            <div className="drawer-logo" onClick={()=>navigate("/")}>
                Logo
            </div>
            <div>
                {
                MENUS.map((menu, index)=>(
                    <RouterLink key={index} to={menu.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div onClick={()=>{}} className="drawer-button">
                            {menu.name}
                        </div>
                    </RouterLink>
                ))
                }
            </div>
        </div>
    )
}
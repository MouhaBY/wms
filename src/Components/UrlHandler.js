import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../Pages/Users/Users";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Notfound from "../Pages/Notfound/Notfound";
import NotAuthorized from "../Pages/NotAuthorized/NotAuthorized";
import { useSelector } from "react-redux";
import { selectProfile } from "../utils/selectors";
import { checkAccess } from "../features/access";


export const MENUS = [
    {name:"Tableau de bord", route:"dashboard", path:"/dashboard", element:<Dashboard />},
    {name:"Utilisateurs", route:"users", path:"/users", element:<Users /> }, 
    {name:"Données", route:"datas", path:"/datas", element:<></> }, 
    {name:"Inventaires", route:"inventories", path:"/inventories", element:<></> }, 
    {name:"Configurations", route:"configurations", path:"/configurations", element:<></> }
];

export default function UrlHandler(){
    const profile = useSelector(selectProfile());

    return(
        <Routes>
            <Route path='*' element={<Notfound />} />
            <Route path='/' element={<Dashboard />} />
            {MENUS.map((menu, index)=>(
                <Route key={index} path={menu.path} element={checkAccess(profile, menu.route) ? menu.element : <NotAuthorized />} />
            ))
            }
        </Routes>
    );
}
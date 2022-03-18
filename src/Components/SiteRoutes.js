import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../Pages/Users/Users";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Notfound from "../Pages/Notfound/Notfound";
import NotAuthorized from "../Pages/NotAuthorized/NotAuthorized";
import AddUser from "../Pages/Users/AddUser";
import EditUser from "../Pages/Users/EditUser";

import { useSelector } from "react-redux";
import { selectProfile } from "../utils/selectors";
import { checkAccess } from "../features/access";


export const routes = [
    { description:"Tableau de bord", name:"dashboard", path:"/dashboard", component:<Dashboard />},
    { description:"Utilisateurs", name:"users", path:"/users", component:<Users /> }, 
    { description:"Données", name:"datas", path:"/datas", component:<></> }, 
    { description:"Inventaires", name:"inventories", path:"/inventories", component:<></> }, 
    { description:"Configurations", name:"configurations", path:"/configurations", component:<></>},
    { description:"Créer utilisateur", name:"usersadd", path:"/users/add", component:<AddUser />},
    { description:"Modifier utilisateur", name:"edituser", path:"/users/edit/:id", component:<EditUser />},
];


export default function SiteRoutes(){
    const profile = useSelector(selectProfile());

    return(
        <Routes>
            <Route path='*' element={ <Notfound /> } />
            <Route exact path='/' element={ <Dashboard /> } />
            {
                routes.map((route, index)=>(
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={checkAccess(profile, route.name) ? route.component : <NotAuthorized />} 
                    />
                ))
            }
        </Routes>
    );
}
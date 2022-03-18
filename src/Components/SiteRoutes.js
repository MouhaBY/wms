import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getRoutes } from "../routes";
import Notfound from "../Pages/Notfound/Notfound";
import NotAuthorized from "../Pages/NotAuthorized/NotAuthorized";
import hasRoles from "../services/security/hasRoles";


/*const PrivateRoute = ({ component: Component, roles, path }) => {
    roles = roles || [];
    return (
        <Route
            path={path}
            exact={true}
            render={(props) => 
                hasRoles(roles) ? (
                    <Component {...props} />
                ) : (
                    isAuth() ? (
                        <NotAuthorized />
                    ) : (
                        <Navigate to="/login" />
                    )
                )
            }
        />
    );
}*/

export default function SiteRoutes(){

    return(
        <Routes>
            <Route path='*' element={ <Notfound />} />
            {
                getRoutes().map((route, index) => ( 
                    <Route 
                        key={index} 
                        {...route}
                        element={hasRoles(route.roles) ? route.element : <NotAuthorized />}
                    />
                ))
            }
        </Routes>
    );
}

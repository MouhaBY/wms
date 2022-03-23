import React from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { getRoutes } from "../common/routes/routes";
import Notfound from "../Pages/Notfound/Notfound";
import NotAuthorized from "../Pages/NotAuthorized/NotAuthorized";
import hasRoles from "../common/services/security/hasRoles";
import MainAppContent from "./MainAppContent";


function PrivateRoute({ children }) {
    var roles = children.roles || [];
    return hasRoles(roles) ? <MainAppContent>{children.element}</MainAppContent> : <NotAuthorized />;
}

export default function SiteRoutes(){

    return(
        <Routes>
            <Route path="*" element={ <Notfound />} />
            {
                getRoutes().map((route, index) => ( 
                    <Route 
                        key={index}
                        {...route}
                        element={<PrivateRoute>{route}</PrivateRoute>}
                    />
                ))
            }
        </Routes>
    );
}

PrivateRoute.propTypes = {
    children: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string),
        element: PropTypes.element
    })
};

import React from "react";
import { Route as ReactRouterRoute } from "react-router-dom";

const Route = ({ component: Component, roles, path }) => {
    roles = roles || [];

    return (
        <ReactRouterRoute
            path={path}
            exact={true}
            render={(props) => 
                hasRoles(roles) ? (
                    <Component {...props} />
                ) : (
                    isAuth() ? (
                        <Unauthorized />
                    ) : (
                        <Redirect to="/login" />
                    )
                )
            }
        />
    );
}

export default Route;
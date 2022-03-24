import React from "react";
import Users from "../../Pages/Users/Users";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddUser from "../../Pages/Users/AddUser";
import EditUser from "../../Pages/Users/EditUser";
import siteMap from "./siteMap";
import Index from "../../Pages/Index/Index";
import Areas from "../../Pages/Areas";


const routes = [
    { ...siteMap.Index, element:<Index />},
    { ...siteMap.Dashboard, element:<Dashboard />},
    { ...siteMap.Users, element:<Users />, roles:["user", "admin"] }, 
    { ...siteMap.Datas, element:<Users/>, roles:["user"] }, 
    { ...siteMap.Inventories, element:<></> }, 
    { ...siteMap.Settings, element:<></>, roles:["admin"]},
    { ...siteMap.AddUser, element:<AddUser />, roles:["admin"]},
    { ...siteMap.EditUser, element:<EditUser />, roles:["admin"]},
    { ...siteMap.Areas, element:<Areas />, roles:["user", "admin"] }
];

const compile = (parentRoute, subRoutes) => {
    return subRoutes.flatMap(subRoute => {
        const newRoute = {
            "name": subRoute.name,
            "path": parentRoute.path + subRoute.path,
            "element": subRoute.element,
            "roles": (parentRoute.roles || []).concat((subRoute.roles || [])),
        };
        return (subRoute.routes) ? [...compile(newRoute, subRoute.routes)] : newRoute;
    });
};

export const getRoutes = () => {
    const parentRoute = {
        "name": "",
        "path": "",
    };
    const flatRoutes = compile(parentRoute, routes);
    return flatRoutes;
};

export const getPath = (name, params= null) => {
    const routeFound = getRoutes().find(route => route.name === name);
    let path = routeFound ? routeFound.path : null;
    if (path && params) {
        Object.entries(params).forEach(([key, value]) => {
            path = path ? path.replace(`:${key}`, value) : "";
        });
    }
    return path;
};

export const makePath = (path, params= null) => {
    if (path && params) {
        Object.entries(params).forEach(([key, value]) => {
            path = path ? path.replace(`:${key}`, value) : "";
        });
    }
    return path;
};

export const getRoles = (name) => {
    const routeFound = getRoutes().find(route => route.name === name);
    let roles = routeFound ? routeFound.roles || [] : [];
    return roles;
};

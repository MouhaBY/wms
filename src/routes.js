import React from "react";
import Users from "./Pages/Users/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddUser from "./Pages/Users/AddUser";
import EditUser from "./Pages/Users/EditUser";
import siteMap from "./siteMap";


const routes = [
    { name:siteMap.Index.name, path:siteMap.Index.path, element:<Dashboard />},
    { name:siteMap.Dashboard.name, path:siteMap.Dashboard.path, element:<Dashboard />},
    { name:siteMap.Users.name, path:siteMap.Users.path, element:<Users />, roles:["user", "admin"] }, 
    { description:"Données", name:"datas", path:"/datas", element:<Users/>, roles:["user"] }, 
    { description:"Inventaires", name:"inventories", path:"/inventories", element:<></> }, 
    { description:"Configurations", name:"configurations", path:"/configurations", element:<></>, roles:["admin"]},
    { name:siteMap.AddUser.name, path:siteMap.AddUser.path, element:<AddUser />, roles:["admin"]},
    { name:siteMap.EditUser.name, path:siteMap.EditUser.path, element:<EditUser />, roles:["admin"]},
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

import Users from "./Pages/Users/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddUser from "./Pages/Users/AddUser";
import EditUser from "./Pages/Users/EditUser";
import Login from "./Pages/Login/Login";


const routes = [
    { description:"Connexion", name:"login", path:"/login", element:<Login />},
    { description:"Index", name:"index", path:"/", element:<Dashboard />},
    { description:"Tableau de bord", name:"dashboard", path:"/dashboard", element:<Dashboard />},
    { description:"Utilisateurs", name:"users", path:"/users", element:<Users />, roles:["user", "admin"] }, 
    { description:"Données", name:"datas", path:"/datas", element:<Users/> }, 
    { description:"Inventaires", name:"inventories", path:"/inventories", element:<></> }, 
    { description:"Configurations", name:"configurations", path:"/configurations", element:<></>},
    { description:"Créer utilisateur", name:"usersadd", path:"/users/add", element:<AddUser />, roles:["admin"]},
    { description:"Modifier utilisateur", name:"edituser", path:"/users/edit/:id", element:<EditUser />, roles:["admin"]},
];

const compile = (parentRoute, subRoutes) => {
    return subRoutes.flatMap(subRoute => {
        const newRoute = {
            'name': subRoute.name,
            'path': parentRoute.path + subRoute.path,
            'element': subRoute.element,
            'roles': (parentRoute.roles || []).concat((subRoute.roles || [])),
        };
        return (subRoute.routes) ? [...compile(newRoute, subRoute.routes)] : newRoute;
    });
}

export const getRoutes = () => {
    const parentRoute = {
        'name': '',
        'path': '',
    };
    const flatRoutes = compile(parentRoute, routes);
    return flatRoutes;
}

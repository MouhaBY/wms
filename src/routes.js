import Users from "../Pages/Users/Users";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddUser from "../Pages/Users/AddUser";
import EditUser from "../Pages/Users/EditUser";


export const routes = [
    { description:"Tableau de bord", name:"dashboard", path:"/dashboard", component:<Dashboard />},
    { description:"Utilisateurs", name:"users", path:"/users", component:<Users /> }, 
    { description:"Données", name:"datas", path:"/datas", component:<></> }, 
    { description:"Inventaires", name:"inventories", path:"/inventories", component:<></> }, 
    { description:"Configurations", name:"configurations", path:"/configurations", component:<></>},
    { description:"Créer utilisateur", name:"usersadd", path:"/users/add", component:<AddUser />},
    { description:"Modifier utilisateur", name:"edituser", path:"/users/edit/:id", component:<EditUser />},
];

const compile = (parentRoute, subRoutes) => {
    return subRoutes.flatMap(subRoute => {
        const newRoute = {
            'name': subRoute.name,
            'path': parentRoute.path + subRoute.path,
            'component': subRoute.component,
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

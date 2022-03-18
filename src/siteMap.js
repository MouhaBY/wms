const siteMap = {
    Index : {
        name:"index",
        path:"/",
        description:"Acceuil"
    },
    Dashboard : {
        name:"dashboard", 
        path:"/dashboard",
        description:"Tableau de bord"
    },
    Login : {
        name:"login",
        path:"/login",
        description:"Connexion"
    },
    Users : { 
        name:"users",
        path:"/users",
        description:"Utilisateurs"
    },
    AddUser : {
        name:"adduser",
        path:"/users/add",
        description:"Créer utilisateur"  
    },
    EditUser : { 
        name:"edituser",
        path:"/users/edit/:id",
        description:"Modifier utilisateur"
    },
};

export default siteMap;
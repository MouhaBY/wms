const SITEMAP = {
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
        description:"Gestion des utilisateurs"
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
    Datas : {
        name:"datas",
        path:"/datas",
        description:"Données"  
    },
    Inventories : {
        name:"inventories",
        path:"/inventories",
        description:"Inventaires" 
    },
    Settings : {
        name:"settings",
        path:"/settings",
        description:"Configurations"
    },
    Areas : {
        name:"areas",
        path:"/areas",
        description:"Emplacements"
    }
};

export default SITEMAP;

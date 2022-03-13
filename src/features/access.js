export const checkAccess = (profile, menu) => {
    if (profile === "admin"){
        var adminMenus = [ "inventories" , "users", "dashboard", "configurations" ];
        if(adminMenus.indexOf(menu)>=0) return true
        else return false    
    }
    else if (profile === "user"){
        var userMenus = [ "datas", "dashboard" ];
        console.log(menu)
        if(userMenus.indexOf(menu)>=0) return true
        else return false   
    }
    else return false
}
import React from "react";
import SITEMAP from "../common/routes/siteMap";
import { makePath } from "../common/routes/routes";
import { useParams } from "react-router-dom";


function getSiteMapObjects(){
    var keys = Object.keys(SITEMAP);
    var siteMapObjectsarray = [];
    keys.map((key)=>{
        siteMapObjectsarray.push(SITEMAP[key]);
    });
    return siteMapObjectsarray
};

function pathSplit(){
    var path = window.location.pathname;
    var pathArray = path.split("/");
    var menuArray = [];
    if(pathArray.length > 1){
        menuArray.push("/");
        if(pathArray[1].length > 0){
          menuArray.push("/" + pathArray[1]);
        }
        if(pathArray.length > 2){
          var submenu = "/" + pathArray[1] + "/" + pathArray[2];
          if(pathArray.length > 3){
            submenu = "/" + pathArray[1] + "/" + pathArray[2] +"/:id";
          }
          menuArray.push(submenu)
        }    
    }
    return menuArray
}

function getSiteMap(){
    var pathArray = pathSplit();
    var keys = getSiteMapObjects();
    var pathNameArray=[];
    pathNameArray = pathArray.map((path)=>{
        let pathFound = keys.find(key => key.path === path)
        if (pathFound) {
            return pathFound
        }
    })
    return pathNameArray;
}

export default function Breadcrumbs() {
    var pathArray = getSiteMap();
    const { id } = useParams();

    return (
        <div className="d-flex flex-row bd-highlight mb-3">
            {
                pathArray.map((menu, index)=>( 
                    <div key={index}>
                       <a className="text-decoration-none"> / </a>
                       <a href={makePath(menu.path, {"id": id})} className="text-decoration-none">{menu.description}</a>
                    </div>         
                ))
            }
        </div>
    )
}

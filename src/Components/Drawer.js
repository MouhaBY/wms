/* eslint-disable */
import React from "react";

const BUTTONS = [
    {name:"Tableau de bord"}, 
    {name:"Utilisateurs"}, 
    {name:"Données"}, 
    {name:"Inventaires"}, 
    {name:"Configurations"}
]

export default function Drawer(){
    return(
        <div className="drawer-div">
            <div className="drawer-logo">
                Logo
            </div>
            <div>
                {
                BUTTONS.map((button)=>(
                    <div>
                        <button className="drawer-button">
                        {button.name}
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
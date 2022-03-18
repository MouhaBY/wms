import React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import SiteRoutes from "../SiteRoutes";
import { BrowserRouter as Router } from "react-router-dom";


export default function Main (){
    return(
        <Router>
            <div className="main-div">
                <Drawer />
                <div className="main-div-div">
                    <AppBar />
                    <div className="main-div-url">
                        <SiteRoutes />
                    </div>
                </div>
            </div>
        </Router>
    );
}

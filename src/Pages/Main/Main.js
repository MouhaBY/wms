import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "./ui/partials/AppBar";
import Drawer from "./ui/partials/Drawer";
import SiteRoutes from "../../Components/SiteRoutes";


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

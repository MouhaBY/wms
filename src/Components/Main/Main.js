import React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import UrlHandler from "./UrlHandler";
import { BrowserRouter as Router } from "react-router-dom";


export default function Main (){
    return(
        <div className="main-div">
            <Router>
                <Drawer />
                <div className="main-div-div">
                    <AppBar />
                    <div className="main-div-url">
                        <UrlHandler />
                    </div>
                </div>
            </Router>
        </div>
    );
}

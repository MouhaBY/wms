import React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import UrlHandler from "./UrlHandler";
import { selectShowDrawer } from "../utils/selectors";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

export default function Main (){
    const showDrawer = useSelector(selectShowDrawer())

    return(
        <div className="main-div">
            <Router>
                { showDrawer &&
                    <Drawer />
                }
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

import React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import UrlHandler from "./UrlHandler";
import { selectShowDrawer } from "../utils/selectors";
import { useSelector } from "react-redux";

export default function Main (){
    const showDrawer = useSelector(selectShowDrawer())


    return(
        <div className="main-div">
            { showDrawer &&
                <Drawer />
            }
            <div className="main-div-div">
                <AppBar />
                <UrlHandler />
            </div>
        </div>
    );
}

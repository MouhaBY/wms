import React from "react";
import siteMap from "../../siteMap";

export default function MainAppContent({ children }) {
    return (
        <div>
            <a href={siteMap.Index.path} className="text-decoration-none">Acceuil</a>
            <a className="text-decoration-none"> / </a>
            <a href={siteMap.Index.path} className="text-decoration-none">Menu</a>
            <a className="text-decoration-none"> / </a>
            <a href={siteMap.Index.path} className="text-decoration-none">Sous Menu</a>
            {children}
        </div>
    )
}

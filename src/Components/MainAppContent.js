import React from "react";
import Breadcrumbs from "./Breadcrumbs";


export default function MainAppContent({ children }) {
    return (
        <div>
            <Breadcrumbs />
            {children}
        </div>
    )
}

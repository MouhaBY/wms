import React from "react";
import siteMap from "../../common/routes/siteMap";


export default function Index() {
    return (
        <div className="contain-div">
            <h2>{siteMap.Index.description}</h2>
        </div>
    )
}

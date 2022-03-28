import React from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import CreateDepositsLevels from "./ui/components/CreateDepositsLevels";


export default function Areas() {
    const hasAddRole = hasRoles(getRoles(siteMap.Areas.name));
    const handleAdd = () => {};

    return (
        <div>
            <h2>Emplacements</h2>
            <div>
                {
                    hasAddRole && (
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>+ Ajouter</button>
                    )
                }
            </div>
            <hr />
            <CreateDepositsLevels />
        </div>
    );
}

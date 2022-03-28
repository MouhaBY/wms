import React from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import { getDepositChildrens } from "./common/functions/getDeposits";
import CreateDepositsLevels from "./ui/components/CreateDepositsLevels";


export default function Areas() {
    const hasAddRole = hasRoles(getRoles(siteMap.Areas.name));
    const handleAdd = () => {};
    var deposits = getDepositChildrens();

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
            {
                deposits.length > 0 ? <CreateDepositsLevels deposits={deposits} level={1}/> : "Aucun dépôt créé" 
            }
        </div>
    );
}

import React, { useState } from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import CreateDepositsLevels from "./ui/components/CreateDepositsLevels";
import AddArea from "./ui/components/AddArea";


export default function Areas() {
    const [showModal, setShowModal] = useState(false);
    const hasAddRole = hasRoles(getRoles(siteMap.Areas.name));
    const handleAdd = () => { setShowModal(true) };
    const handleCloseAdd = () => { setShowModal(false) };

    return (
        <>
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
            <AddArea show={showModal} handleClose={handleCloseAdd} />
        </>
    );
}

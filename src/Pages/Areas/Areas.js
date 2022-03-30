import React, { useState } from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import CreateDepositsLevels from "./ui/components/CreateDepositsLevels";
import AddArea from "./ui/components/AddArea";
import ListAreas from "./ui/components/ListAreas";


export default function Areas() {
    const [showAdd, setShowAdd] = useState(false);
    const [showAreas, setShowAreas] = useState(false);
    const [depositCode, setDepositCode] = useState("");
    const hasAddRole = hasRoles(getRoles(siteMap.Areas.name));
    const handleAdd = () => { setShowAdd(true) };
    const handleCloseAdd = () => { setShowAdd(false) };
    const handleAreas = (code) => { 
        setShowAreas(true); 
        setDepositCode(code)
    };
    const handleCloseAreas = () => { setShowAreas(false) };


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
                <CreateDepositsLevels showAreas={handleAreas}/>
            </div>
            <AddArea show={showAdd} handleClose={handleCloseAdd} />
            <ListAreas depositCode={depositCode} show={showAreas} handleClose={handleCloseAreas}/>
        </>
    );
}

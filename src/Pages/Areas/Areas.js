import React, { useEffect, useState } from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import DepositsList from "./ui/components/DepositsList";


const AREAS = [
    {Code:"E01", Name:"Entreprise 01", ParentCode:null, IsDeposit:true},
    {Code:"E02", Name:"Entreprise 02", ParentCode:null, IsDeposit:true},
    {Code:"D01", Name:"Dépot 01", ParentCode:"E01", IsDeposit:true},
    {Code:"A001", Name:"Emp. A001", ParentCode:"D01", IsDeposit:false},
    {Code:"D02", Name:"Dépot 02", ParentCode:"E02", IsDeposit:true},
];

export default function Areas() {
    const [areas, setAreas] = useState([]);
    const hasAddRole = hasRoles(getRoles(siteMap.Areas.name));
    const handleAdd = () => {};

    useEffect(()=>{
        setAreas(AREAS);
    },[]);

    return (
        <div>
            <h2>Emplacements</h2>
            <div>
                {
                    hasAddRole &&
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>+ Ajouter</button>
                }
            </div>
            <div>
                {
                    areas.length > 0 ? <DepositsList areas={areas}/> : "Aucun dépôt à afficher"
                }
            </div>
        </div>
    );
}

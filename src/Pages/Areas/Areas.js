import React, { useEffect, useState } from "react";
import { getRoles } from "../../common/routes/routes";
import hasRoles from "../../common/services/security/hasRoles";
import siteMap from "../../common/routes/siteMap";
import Deposit from "./ui/components/Deposit";


const AREAS = [
    {Code:"E01", Name:"Entreprise 01", ParentCode:null, IsDeposit:true},
    {Code:"E02", Name:"Entreprise 02", ParentCode:null, IsDeposit:true},
    {Code:"D01", Name:"Dépot 01", ParentCode:"E01", IsDeposit:true},
    {Code:"D03", Name:"Dépot 03", ParentCode:"E01", IsDeposit:true},
    {Code:"D03-EXP", Name:"Expédition", ParentCode:"D03", IsDeposit:true},
    {Code:"QLT", Name:"Contrôle qualité", ParentCode:"D03-EXP", IsDeposit:true},
    {Code:"ASS-QLT", Name:"Assistance qualité", ParentCode:"QLT", IsDeposit:true},
    {Code:"D02-EXP", Name:"Expédition", ParentCode:"D02", IsDeposit:true},
    {Code:"QLT-02", Name:"Contrôle qualité 02", ParentCode:"D02-EXP", IsDeposit:true},
    {Code:"ASS-QLT-02", Name:"Assistance qualité 02", ParentCode:"QLT-02", IsDeposit:true},
    {Code:"REC", Name:"Réception", ParentCode:"D03", IsDeposit:true},
    {Code:"D02", Name:"Dépot 02", ParentCode:"E02", IsDeposit:true},
    {Code:"A001", Name:"Emp. A001", ParentCode:"D01", IsDeposit:false},
];

function getDepositChildrens(depositCode=null){
    let deposits = AREAS.filter(area => area.ParentCode === depositCode && area.IsDeposit === true) || [];
    return deposits
};

function CreateLevel({ children, level }){
    return(
        <div>
            <span>Niveau ({level})</span>
            <div className="d-flex flex-wrap p-2">
                {
                    children
                }
            </div>
        </div>
    )
}

function CreateDepositsLevels({deposits=[], level=1}){
    return (
        <CreateLevel level={level}>
            <div className="d-flex flex-wrap p-2">
                {   
                    deposits.map(deposit => {
                        let childDeposits = getDepositChildrens(deposit.Code);
                        return(
                            <div key={deposit.Code}>
                                <Deposit deposit={deposit}/>
                                <hr />
                                {
                                    childDeposits.length > 0 && (
                                        <CreateDepositsLevels deposits={childDeposits} level={level+1}/>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </CreateLevel>
    );
};

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

import React, { useState } from "react";
import Deposit from "./Deposit";
import { getDepositChildrens } from "../../common/functions/getDeposits";


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

export default function CreateDepositsLevels({deposits=[], level=1}){
    const [showChildren, setShowChildren] = useState(false);

    const toggleShowChildren = () => {
        setShowChildren(!showChildren)
    }

    return (
        <CreateLevel level={level}>
            <div className="d-flex flex-wrap p-2">
                {   
                    deposits.map(deposit => {
                        let childDeposits = getDepositChildrens(deposit.Code);
                        return(
                            <div key={deposit.Code}>
                                <Deposit deposit={deposit} showFunct={toggleShowChildren}>
                                    {   
                                        childDeposits.length > 0 && (
                                            <a className="nav-link" type="button" onClick={toggleShowChildren}>{showChildren ? "Masquer" : "Afficher +" }</a>
                                        )
                                    }
                                </Deposit>
                                <hr />
                                {
                                    showChildren && childDeposits.length > 0 && (
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
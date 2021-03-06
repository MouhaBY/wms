import React, { useState } from "react";
import PropTypes from "prop-types";
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
    );
}

export default function CreateDepositsLevels({deposits=getDepositChildrens(), level=1, showAreas}){
    const [showChildren, setShowChildren] = useState(false);

    const toggleShowChildren = () => {
        setShowChildren(!showChildren);
    };

    return (
        deposits.length >0 ? (
            <CreateLevel level={level}>
                <div className="d-flex flex-wrap p-2">
                    {   
                        deposits.map(deposit => {
                            let childDeposits = getDepositChildrens(deposit.Code);
                            return(
                                <div key={deposit.Code}>
                                    <Deposit deposit={deposit} showAreas={showAreas} showFunct={toggleShowChildren}>
                                        {   
                                            childDeposits.length > 0 ? (
                                                <a 
                                                    className="nav-link" 
                                                    type="button" 
                                                    onClick={toggleShowChildren}
                                                >
                                                    {
                                                        showChildren ? "Masquer" : "Afficher +" 
                                                    }
                                                </a>
                                            ) : null
                                        }
                                    </Deposit>
                                    <hr />
                                    {
                                        showChildren && childDeposits.length > 0 && (
                                            <CreateDepositsLevels deposits={childDeposits} level={level+1} showAreas={showAreas}/>
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </CreateLevel>
        ) : "Aucun d??p??t ?? afficher"
    );
}

CreateLevel.propTypes = {
    children : PropTypes.element,
    level: PropTypes.number
};

CreateDepositsLevels.propTypes = {
    deposits: PropTypes.array,
    level: PropTypes.number,
    showAreas: PropTypes.func
};

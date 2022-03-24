import React from "react";
import Deposit from "./Deposit";


export default function DepositsList({areas=[]}) {
    return (
        <div className="d-flex flex-wrap p-2">
            {
                areas.map(area => (
                    area.IsDeposit && (
                        <Deposit key={area.Code} area={area}/>
                    )
                ))
            }
        </div>
    );
}

import React from "react";

export default function Deposit({deposit}) {
  return (
    <div>
        {
            deposit && (
                <div className="card m-1" >
                    <div className="card-body">
                        <h5 className="card-title">{deposit.Code +" : "+deposit.Name}</h5>
                        <p className="card-text">{deposit.ParentCode && ("Parent : " + deposit.ParentCode) || "Element principal"}</p>
                        <a href="#" className="btn btn-primary">Consulter les enfants</a>
                    </div>
                </div>
            )
        }
    </div>
  );
}

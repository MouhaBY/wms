import React from "react";

export default function Deposit({deposit, children}) {
  return (
    <div>
        {
            deposit && (
                <div className="card m-1" >
                    <div className="card-body">
                        <h5 className="card-title">{deposit.Code +" : "+deposit.Name}</h5>
                        <p className="card-text">{deposit.ParentCode && ("Parent : " + deposit.ParentCode) || "Element principal"}</p>
                        <div className="d-flex flex-wrap p-2">
                            <a type="button" className="btn btn-primary">Emplacements</a>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  );
}

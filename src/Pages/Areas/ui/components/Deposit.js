import React from "react";

export default function Deposit({area}) {
  return (
    <div>
        {
            area && (
                <div className="card m-1" >
                    <div className="card-body">
                        <h5 className="card-title">{area.Name}</h5>
                        <p className="card-text">{area.ParentCode || "Element principal"}</p>
                        <a href="#" className="btn btn-primary">Consulter les enfants</a>
                    </div>
                </div>
            )
        }
    </div>
  );
}

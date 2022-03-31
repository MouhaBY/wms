import React from "react";
import PropTypes from "prop-types";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


export default function Deposit({deposit, showAreas, children}) {
    const handleShowAreas = (code) => { 
        showAreas(code); 
    };
    
    return (
        <div>
            {
                deposit && (
                    <div className="card m-1" >
                        <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between">
                            <h5 className="card-title">{deposit.Code + " : " + deposit.Name}</h5>
                            <button className="btn btn-outline-primary btn-sm m-1"><DeleteOutlinedIcon /></button>
                        </div>
                            <p className="card-text">{deposit.ParentCode && ("Parent : " + deposit.ParentCode) || "Element principal"}</p>
                            <div className="d-flex flex-wrap p-2">
                                <a type="button" className="btn btn-primary" onClick={()=>handleShowAreas(deposit.Code)}>Emplacements</a>
                                {children}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

Deposit.propTypes = {
    deposit: PropTypes.shape({
        Code : PropTypes.string,
        Name : PropTypes.string,
        ParentCode : PropTypes.string
    }),
    showAreas: PropTypes.bool
};
import React, { useEffect, useState } from "react";
import Modal from "../../../../Components/Modal";
import { getAreasChildrens } from "../../common/functions/getDeposits";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PropTypes from "prop-types";


function filtreTexte(arr, requete) {
    if(requete.length>0){
        let filtered = [];
        arr.map((element) => {
            let strongCode = element.Code.toUpperCase();
            let strongName = element.Name.toUpperCase();
            let strongRequete = requete.toUpperCase();
            if(strongCode.includes(strongRequete) || strongName.includes(strongRequete)){
                filtered.push(element);
            }
        });
        return filtered;
    }
    else return arr;
}

export default function ListAreas({depositCode, show, handleClose}) {
    const [search, setSearch] = useState("");
    const [areas, setAreas] = useState([]);

    useEffect(()=>{
        let b = getAreasChildrens(depositCode);
        let c = filtreTexte(b,search);
        setAreas(c);
    },[search, depositCode]);

    return (
        <Modal show={show} unSetModal={handleClose} title={"Liste des emplacements : "+ depositCode}>
            <div className="modal-body">
                <div>
                    <input type="text" value={search} onChange={(evt) => setSearch(evt.target.value)} placeholder="Recherche" />
                </div>
                {
                    areas.length > 0 ? (
                        <div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Désignation</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        areas.map((area)=>(
                                            <tr key={area.Code}>
                                                <td>{area.Code}</td>
                                                <td>{area.Name}</td>
                                                <td>
                                                    <button className="btn btn-outline-danger btn-sm m-1">
                                                        <DeleteOutlinedIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : "Aucun emplacement à afficher"
                }
            </div>
        </Modal>
    );
}

ListAreas.propTypes = {
    depositCode : PropTypes.string,
    show: PropTypes.bool,
    handleClose : PropTypes.func
};

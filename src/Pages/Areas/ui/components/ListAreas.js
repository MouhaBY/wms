import React from "react";
import Modal from "../../../../Components/Modal";
import { getAreasChildrens } from "../../common/functions/getDeposits";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


export default function ListAreas({depositCode, show, handleClose}) {
    var areas = getAreasChildrens(depositCode);

    return (
        <Modal show={show} unSetModal={handleClose} title={"Liste des emplacements : "+ depositCode}>
        <div className="modal-body">
        {
            areas.length > 0 ? (
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
                        <tr>
                            <td>{area.Code}</td>
                            <td>{area.Name}</td>
                            <td>
                                <button className="btn btn-outline-primary btn-sm m-1"><DeleteOutlinedIcon /></button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
            )
            : "Aucun emplacement à afficher"
        }
        
        </div>
    </Modal>
  )
}

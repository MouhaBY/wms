import React from "react";
import Modal from "../../../../Components/Modal";
import { getAreasChildrens } from "../../common/functions/getDeposits";
<<<<<<< HEAD
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
=======
import PropTypes from "prop-types";
>>>>>>> 766f946b97763e1ee55e52a02d63d8f6ad7522fb


export default function ListAreas({depositCode, show, handleClose}) {
    var areas = getAreasChildrens(depositCode);

    return (
        <Modal show={show} unSetModal={handleClose} title={"Liste des emplacements : "+ depositCode}>
<<<<<<< HEAD
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
=======
            <div className="modal-body">
                {
                    areas.length > 0 ? (
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Désignation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    areas.map((area)=>(
                                        <tr key={area.Code}>
                                            <td>{area.Code}</td>
                                            <td>{area.Name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : "Aucun emplacement à afficher"
>>>>>>> 766f946b97763e1ee55e52a02d63d8f6ad7522fb
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

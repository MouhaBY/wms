import React from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function editUser() {
    const navigate = useNavigate();
    const handleReturn = () => navigate("/users");
    const handleSave = () => navigate("/users");
    const { id } = useParams();

    return (
        <div className="contain-div">
            <h2>Modifier utilisateur : {id}</h2>
            <div>
                <button type="button" className="btn btn-success m-1" onClick={handleSave}>
                    Enregistrer
                </button>
                <button type="button" className="btn btn-danger m-1" onClick={handleSave}>
                    Supprimer
                </button>
                <button type="button" className="btn btn-outline-secondary m-1" onClick={handleReturn}>
                    Retour
                </button>
            </div>
        </div>
    );
}

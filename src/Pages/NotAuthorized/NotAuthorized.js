import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotAuthorized() {
    const navigate = useNavigate();
    const handleReturn = () => { navigate("/"); };

    return (
        <div>
            <h2>Accès non autorisé</h2>
            <p>
                Votre profil n&apos;est pas autorisé à accéder à cette page
            </p>
            <button onClick={handleReturn}>Retour à l&apos;accueil</button>
        </div>
    );
}

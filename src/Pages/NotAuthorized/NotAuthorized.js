import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    const handleReturn = () => { navigate(`/`) };

    return (
        <div>
            <h2>Accès non autorisé</h2>
            <p>
                Votre profil n'est pas autorisé à accéder à cette page
            </p>
            <button onClick={handleReturn}>Retour à l'accueil</button>
        </div>
    )
}

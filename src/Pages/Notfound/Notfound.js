import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
    const navigate = useNavigate();
    const handleReturn = () => { navigate(`/`) };

    return (
        <div>
            <h2>Cette page n'existe pas</h2>
            <p>
                La page que vous cherchez semble introuvable !
            </p>
            <button onClick={handleReturn}>Retour à l'accueil</button>
        </div>
    )
}

import React, { useState } from 'react';

export default function Login ({ setAuthenticated }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit= (evt) => {
        evt.preventDefault()
        console.log(`username is ${username} and password is ${password}`)
        setAuthenticated()
    }

    return(
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    Connexion
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="usernameinput" className="form-label">Nom d'utilisateur</label>
                            <input type="text" className="form-control" id="usernameinput" value={username} onChange={evt => setUsername(evt.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordinput" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="passwordinput" value={password} onChange={evt => setPassword(evt.target.value)} />
                        </div>
                        <button className="btn btn-primary" type='submit'>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    )
} 
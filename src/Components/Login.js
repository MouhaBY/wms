import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


export default function Login ({ setToken }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);    

    const handleSubmit= (evt) => {
        evt.preventDefault();
        if(isFormValid){
            if(username === "123" && password === "123"){
                setToken("login OK");            
            }
            else{
                setHasError(true);
                setErrorMessage("Identifiants incorrects");
            }
        }
    };

    useEffect(()=>{
        setHasError(false);
        setErrorMessage("");
        if(username && password){
            setIsFormValid(true);
        }
        else{
            setIsFormValid(false);
        }
    },[username, password]);

    return(
        <div className="container-fluid">
            <div className="card w-25 bg-white">
                <div className="card-header">
                    Connexion
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="usernameinput" className="form-label">Nom d&apos;utilisateur</label>
                            <input type="text" className="form-control" id="usernameinput" placeholder="Votre nom d'utilisateur" value={username} onChange={evt => setUsername(evt.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordinput" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="passwordinput" placeholder="Votre mot de passe" value={password} onChange={evt => setPassword(evt.target.value)} />
                        </div>
                        {
                            hasError &&
                                <div className="alert alert-danger">
                                    {errorMessage}
                                </div>
                        }
                        <button className="btn btn-primary" type='submit' disabled={!isFormValid}>Se connecter</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func
};
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../features/authentication";


export default function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);        
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    const handleSubmit= (evt) => {
        evt.preventDefault();
        if(isFormValid){
            if(username === "123" && password === "123"){
                dispatch(loginAction({
                    token:"123", 
                    userData:{
                        id:1,
                        username:"123", 
                        contact:"mby123",
                        profile:"admin"
                    }
                }));         
            }
            else if(username === "124" && password === "124"){
                dispatch(loginAction({
                    token:"124", 
                    userData:{
                        id:1,
                        username:"124", 
                        contact:"mby124",
                        profile:"user"
                    }
                }));         
            }
            else {
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
        <div className="login-div">
            <div className="login-card">
                <h2 className="login-div-h2">
                    Connexion
                </h2>
                <div className="login-div-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="usernameinput" className="form-label">
                            Nom d&apos;utilisateur
                            <input 
                                type="text" 
                                className="form-control" 
                                id="usernameinput" 
                                placeholder="Votre nom d'utilisateur" 
                                value={username} 
                                onChange={evt => setUsername(evt.target.value)}
                            />                            
                        </label>
                        <label htmlFor="passwordinput" className="form-label">
                            Mot de passe
                            <input 
                                type="password" 
                                className="form-control" 
                                id="passwordinput" 
                                placeholder="Votre mot de passe" 
                                value={password} 
                                onChange={evt => setPassword(evt.target.value)}                                 
                            />
                        </label>
                        {
                            hasError && 
                                <div className="login-error">
                                    {errorMessage}
                                </div>
                        }
                        <div className="login-div-button">
                            <button className="login-button" type='submit' disabled={!isFormValid}>
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

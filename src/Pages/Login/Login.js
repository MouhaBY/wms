import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../features/authentication";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


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
        <div className="vh-100" style={{backgroundColor: "#508bfc"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <div className="card-body p-5 text-center">
                                <LockOutlinedIcon fontSize="large" />
                                <h3 className="mb-5">
                                    Connexion
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-4">
                                        <label htmlFor="usernameinput" className="form-label">
                                            Nom d&apos;utilisateur     
                                            <input 
                                                type="text" 
                                                placeholder="Votre nom d&apos;utilisateur"
                                                className="form-control form-control-lg" 
                                                id="usernameinput" 
                                                value={username} 
                                                onChange={evt => setUsername(evt.target.value)}
                                            />      
                                        </label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label htmlFor="passwordinput" className="form-label">
                                            Mot de passe
                                            <input 
                                                type="password" 
                                                placeholder="Votre mot de passe"
                                                className="form-control form-control-lg" 
                                                id="passwordinput" 
                                                value={password} 
                                                onChange={evt => setPassword(evt.target.value)}                                 
                                            />
                                        </label>
                                    </div>
                                    {
                                        hasError && <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                        </div>                            
                                    }
                                    <hr className="my-4"/>
                                    <button className={"btn btn-lg btn-block " + (isFormValid ? "btn-primary" : "btn-light")} type="submit" disabled={!isFormValid}>
                                        Se connecter
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

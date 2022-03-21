import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import siteMap from "../../siteMap";


const PROFILES = [
    {id:1, name:"superadmin", profileName:"Super administrateur"},
    {id:2, name:"admin", profileName:"Administrateur"},
    {id:3, name:"user", profileName:"Utilisateur"},
    {id:4, name:"guest", profileName:"Visiteur"},
];

export default function editUser() {
    const navigate = useNavigate();
    const [updatePassword, setUpdatePassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { id } = useParams();

    const handleReturn = () => navigate(siteMap.Users.path);

    const handleSave = (data) => {
        navigate(siteMap.Users.path);
        console.log({id, ...data});
    };

    const handledelete = () => navigate(siteMap.Users.path);

    const onSubmit = (data) => {
        handleSave(data);
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);      
    };

    const formSchema = Yup.object().shape({
        contact: Yup.string()
            .required("Veuillez renseigner le nom du contact")
            .min(3, "Doit contenir au moins 3 caractères"),
        username: Yup.string()
            .required("Veuillez renseigner le nom d'utilisateur")
            .min(3, "Doit contenir au moins 3 caractères"),
        password: Yup.string()
            .transform(x => x === "" ? undefined : x)
            .concat(updatePassword ? Yup.string().required("Veuillez renseigner le mot de passe") : null)    
            .min(3, "Doit contenir au moins 3 caractères"),
        confirmpassword: Yup.string()
            .transform(x => x === "" ? undefined : x)
            .when("password", (password, schema) => {
                if (password || updatePassword) return schema.required("Veuillez confirmer le mot de passe");
            })
            .oneOf([Yup.ref("password")], "Mots de passes non conformes"),
        profile: Yup.string()
            .required("Veuillez choisir le profil"),
    });

    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, setValue, formState: { errors } } = useForm(formOptions);


    useEffect(() => {
        const userData={
            id:1,
            username:"world",
            contact:"hello",
            profile:"admin"
        };
        const fields = ["username", "contact", "profile"];
        fields.forEach(field => setValue(field, userData[field]));
    }, []);

    return (
        <div className="contain-div">
            <h2>Modifier utilisateur ({id})</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div>
                    <button type="submit" className="btn btn-success m-1">
                        Enregistrer
                    </button>
                    <button type="button" className="btn btn-danger m-1" onClick={handledelete}>
                        Supprimer
                    </button>
                    <button type="button" className="btn btn-outline-secondary m-1" onClick={handleReturn}>
                        Retour
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="contactinput">Nom du contact</label>
                    <input
                        type="text" 
                        className={`form-control form-control-lg ${errors.contact ? "is-invalid" : ""}`}
                        id="contactinput"
                        placeholder="Votre nom du contact"
                        {...register("contact")}
                    />
                    {errors.contact && <p className="invalid-feedback">{errors.contact?.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="usernameinput">Nom d&apos;utilisateur</label>
                    <input
                        type="text" 
                        className={`form-control form-control-lg ${errors.username ? "is-invalid" : ""}`}
                        id="usernameinput" 
                        placeholder="Votre nom d&apos;utilisateur"
                        {...register("username")}
                    />
                    {errors.username && <p className="invalid-feedback">{errors.username?.message}</p>}
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={()=>setUpdatePassword(!updatePassword)}>Modifier mot de passe</button>
                    { 
                        updatePassword &&
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="passwordinput">Mot de passe</label>
                                    <div className="input-group" id="show_hide_password">
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                                            id="passwordinput" 
                                            placeholder="Votre mot de passe"
                                            {...register("password")}
                                        />
                                        <div className="input-group-addon">
                                            <div className="form-control form-control-lg" type="button" onClick={togglePassword}>
                                                {
                                                    showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                                                }
                                            </div>
                                        </div>
                                        {errors.password && <p className="invalid-feedback">{errors.password?.message}</p>}
                                    </div>
                                    
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="confirmpasswordinput">Confirmer mot de passe</label>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        className={`form-control form-control-lg ${errors.confirmpassword ? "is-invalid" : ""}`}
                                        id="confirmpasswordinput" 
                                        placeholder="Confirmer votre mot de passe"
                                        {...register("confirmpassword")}
                                    />
                                    {errors.confirmpassword && <p className="invalid-feedback">{errors.confirmpassword?.message}</p>}
                                </div>
                            </div> 
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="profileselect">Profil</label>
                    <select 
                        className={`form-control form-control-lg ${errors.profile ? "is-invalid" : ""}`}
                        id="profileselect" 
                        defaultValue={""}
                        {...register("profile")} 
                    >
                        <option disabled value="">Sélectionner un profil</option>
                        {
                            PROFILES.map((profil)=>(
                                <option key={profil.id} value={profil.name}>{profil.profileName}</option>
                            ))
                        }
                    </select>
                    {errors.profile && <p className="invalid-feedback">{errors.profile?.message}</p>}
                </div>
            </form>
        </div>
    );
}

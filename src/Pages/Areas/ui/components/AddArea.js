import React from "react";
import Modal from "../../../../Components/Modal";
import { getDeposits, getLevel } from "../../common/functions/getDeposits";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";


export default function AddArea({show, handleClose}) {
    const onSubmit = (data) => {
        console.log(data);
        reset();
        handleClose();
    };

    const formSchema = Yup.object().shape({
        code: Yup.string()
            .required("Veuillez renseigner le code")
            .min(2, "Doit contenir au moins 2 caractères"),
        name: Yup.string()
            .required("Veuillez renseigner la désignation")
            .min(3, "Doit contenir au moins 3 caractères"),
        parent: Yup.string()
            .when("isDeposit", {
                is : false,
                then : Yup.string().required("Un emplacement doit avoir un parent")
            }),
        isDeposit: Yup.boolean(),
    });

    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm(formOptions);
    const watchParent = watch("parent", "");
    const watchIsDeposit = watch("isDeposit", false);

    return (
        <Modal show={show} unSetModal={handleClose} title={"Ajouter Emplacement"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Code</label>
                        <input
                            type="text"
                            className={`form-control form-control-lg ${errors.code ? "is-invalid" : "" }`} 
                            {...register("code")}
                        />
                        {errors.code && <p className="invalid-feedback">{errors.code?.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Désignation</label>
                        <input 
                            type="text" 
                            className={`form-control form-control-lg ${errors.name ? "is-invalid" : "" }`} 
                            {...register("name")}
                        />
                        {errors.name && <p className="invalid-feedback">{errors.name?.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Parent</label>
                        <select className="form-select form-select-lg mb-3" defaultValue={""} {...register("parent")}>
                            <option value={""}>Elément principal</option>
                            {
                                getDeposits().map((deposit)=>(
                                    <option key={deposit.Code} value={deposit.Code}>{deposit.Code + " | " + deposit.Name}</option>
                                ))
                            }
                        </select>
                        {errors.parent && <p className="feedback">{errors.parent?.message}</p>}
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" defaultValue {...register("isDeposit")}/>
                        <label>Dépôt ?</label>
                    </div>
                    <div className="form-group">
                        <label>Niveau</label>
                        <input 
                            type="text" 
                            disabled 
                            className="form-control form-control-lg" 
                            value={getLevel(watchParent) + (watchIsDeposit ? 1 : 0)}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <input type="button" className="btn btn-default" onClick={handleClose} value="Retour" />
                    <input type="submit" className="btn btn-success" value="Enregistrer" />
                </div>
            </form>
        </Modal>
    );
}

AddArea.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func
};

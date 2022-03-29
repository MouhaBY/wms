import React from "react";
import "./modal.css";


const Modal = ({ unSetModal, show, children, title }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-header">						
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" onClick={unSetModal}></button>
                </div>
                {children}                
            </section>
        </div>
    );
};

export default Modal;

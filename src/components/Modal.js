import React from "react";
import "./Modal.css"

function Modal({handleModalButton, modalButton}){


    return (
        <div className="modalBackground">
            <div className={modalButton}>
                    <button onClick={() => {handleModalButton()}}> X </button>
                <div className="title">
                    <h1> Whoops... nothing to find here! </h1>
                </div>
                <div className="body">
                    <p> The next page is the actual content. </p>
                </div>
            </div>
        </div>
    );
}

export default Modal
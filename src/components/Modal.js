import React from "react";

function Modal(errorMessage){
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                    <button> X </button>
                <div className="title">
                    <h1> Whoops... nothing to find here! </h1>
                </div>
                <div className="body">
                    <p> The next page is the actual content. </p>
                </div>
                <div className="footer">
                    <button>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal
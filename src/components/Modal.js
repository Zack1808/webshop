import React from 'react';
import ReactDOM from 'react-dom'

// Importing the styling
import '../assets/css/Modal.css';

// Creating the Modal component
const Modal = ({ setModal, dark }) => {
    return ReactDOM.createPortal(
        <div className={`modal-container ${dark ? "dark": null}`}>
            <div className="modal-box">
                <div className="modal-header">
                    <h1>Attention</h1>
                </div>
                <div className="modal-body">
                    <p>
                        This webpage is not an actual shop, but a prototype made for a colledge project.
                        This is a simulation of a webshop, which has most of the functionalities of one.
                    </p>
                    <p>
                        Please, <strong>DO NOT</strong> use your credit card information in the payment section since the transaction will be permanent.
                        Instead, please keep entering the number 42 until all card details fields are fully filled out in order to make a "transaction"
                    </p>
                    <h3>Thank you for your understanding!</h3>
                    <button className="btn btn-add" onClick={() => setModal(false)}>Enter page</button>
                </div>
            </div>
        </div>, 
        document.getElementById('modal')
    )
};

export default Modal;
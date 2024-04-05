import React from 'react';
import './Modal.css';

function Modal({onPlayAgain, message, word}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <p>The word was {word}</p>
                <button onClick={onPlayAgain}>Play again</button>
            </div>
        </div>
    );
}

export default Modal;
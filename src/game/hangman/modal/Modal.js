import React from 'react';
import './Modal.css';

/*
* Modal component is responsible for displaying a modal with a message and the correct word when the game ends.
* It is used in Hangman component to display losing and winning messages.
 */

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
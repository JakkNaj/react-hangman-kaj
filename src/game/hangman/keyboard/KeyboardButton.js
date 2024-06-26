import React, {useEffect, useState} from 'react';
import './KeyboardButton.css';

/*
* KeyboardButton component is responsible for rendering a button with a letter that the player can click to guess the word.
* It is used many times in Hangman which renders the keyboard.
 */

function KeyboardButton({ letter, onClick, isCorrectGuess, shouldReset, onReset }) {
    const [disabled, setDisabled] = useState(false);
    const [className, setClassName] = useState('');
    const handleClick = () => {
        if (!disabled) {
            setDisabled(true);
            onClick(letter)
            if (isCorrectGuess){
                setClassName("correct-button")
            } else {
                setClassName("disabled-button")
            }
        }
    };

    useEffect(() => {
        if (shouldReset){
            setDisabled(false);
            setClassName('keyboard-button');
            onReset();
        }
    }, [shouldReset, onReset]);

    return (
        <button
            className={`keyboard-button ${className}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {/*button styling taken from: https://codepen.io/stephenkilbourn/pen/zYEBbea */}
            <span className="front">
            {letter}
            </span>
        </button>
);
}

export default KeyboardButton;

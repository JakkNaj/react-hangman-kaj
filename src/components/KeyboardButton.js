import React, {useEffect, useState} from 'react';

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
            {letter}
        </button>
    );
}

export default KeyboardButton;

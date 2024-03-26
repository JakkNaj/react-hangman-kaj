import React, {useEffect, useState} from 'react';
import fetchRandomWord from "../modules/wordFetcher";
import KeyboardButton from "./KeyboardButton";
import Modal from "./modal/Modal";

import winSound from '../assets/win-sound.mp3';
import loseSound from '../assets/lose-sound.mp3';

const Hangman = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maxFails = 6;

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');
    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [shouldResetButtons, setShouldResetButtons] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);
    const [playerLost, setPlayerLost] = useState(false);

    const getRandomWord = () => {
        const fetchData = async () => {
            const fetchedWord = await fetchRandomWord();
            if (fetchedWord) {
                setWord(fetchedWord);
            }
        };

        fetchData();
    }

    const onGuess = letter => {
        if (word.includes(letter)){
            setCorrects([...corrects, letter])
            resolveCorrectGuess(letter);
        } else {
            setFails([...fails, letter])
            resolveBadGuess();
        }
    }

    const resolveBadGuess = () => {
        if (fails.length + 1 >= maxFails){
            setPlayerLost(true);
        }
    }

    const resolveCorrectGuess = letter => {
        let won = true;
        const w = word
            .split('')
            .map(wordLetter => {
                if (letter !== wordLetter && !hiddenWord.includes(wordLetter)){
                    won = false;
                    return '_';
                }
                return wordLetter;
            })
            .join('')
        if (won) setPlayerWon(true);
        setHiddenWord(w);
    }


    useEffect(() => {
        setHiddenWord(word
            .split('')
            .map(letter => '_')
            .join(''));
    }, [word]);

    const reset = () => {
        getRandomWord()
        setShouldResetButtons(true);
        setPlayerWon(false);
        setPlayerLost(false);
        setCorrects([]);
        setFails([]);
    }

    useEffect(() => {
        reset()
    }, []);

    return (
        <div>
            <p>{word}</p>
            <p>{hiddenWord}</p>
            <div className="keyboard">
                {alphabet
                    .map((letter, index) =>
                        < KeyboardButton
                            key={index}
                            letter={letter}
                            onClick={onGuess}
                            isCorrectGuess={word.includes(letter)}
                            shouldReset={shouldResetButtons}
                            onReset={() => setShouldResetButtons(false)}
                        />
                    )}
            </div>
            {playerWon && (
                <div>
                    <Modal onPlayAgain={reset} message={"You win!"} word={word}/>
                    <audio src={winSound} autoPlay/>
                </div>
            )}
            {playerLost && (
                <div>
                    <Modal onPlayAgain={reset} message={"You lose!"} word={word}/>
                    <audio src={loseSound} autoPlay/>
                </div>
            )}
        </div>
    );
};

export default Hangman;
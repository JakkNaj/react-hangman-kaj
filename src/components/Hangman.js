import React, {useCallback, useContext, useEffect, useState} from 'react';
import KeyboardButton from "./KeyboardButton";
import Modal from "./modal/Modal";
import ScoreTracker from "./ScoreTracker";
import {useGameStatus} from "./GameStatusContext";

import winSound from '../assets/win-sound.mp3';
import loseSound from '../assets/lose-sound.mp3';
import cyberpunkGameMusic from '../assets/cyberpunk-game-music.mp3';
import SVGHangman from "./SVGhangman";
import {GlobalContext} from "./GlobalContext";
import {fetchRandomWord} from "../modules/wordFetcher";

import './Hangman.css';

const Hangman = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maxFails = 6;

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');
    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [shouldResetButtons, setShouldResetButtons] = useState(false);
    const [error, setError] = useState(null);
    const { gameStatus, setGameStatus } = useGameStatus();
    const { data, useCustomData, playSound, hasInternetCon } = useContext(GlobalContext);

    const getRandomWord = useCallback(() => {
        if (useCustomData && data.length > 0){
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWord = data[randomIndex];
            setWord(randomWord.toUpperCase());
        } else {
            const fetchData = async () => {
                if (!hasInternetCon)
                    setError("Fetching words from cache. If those run out, try to repair your internet connectivity or log out and use custom data.");
                else
                    setError(null);
                const fetchedWord = await fetchRandomWord();
                if (fetchedWord) {
                    setWord(fetchedWord);
                }
            };
            fetchData();
        }
    }, [useCustomData, data, hasInternetCon]);

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
            setGameStatus("lost");
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
        if (won) setGameStatus("won");
        setHiddenWord(w);
    }

    useEffect(() => {
        setHiddenWord(word
            .split('')
            .map(() => '_')
            .join(''));
    }, [word]);

    const reset = useCallback(() => {
        getRandomWord()
        setShouldResetButtons(true);
        setGameStatus(null);
        setCorrects([]);
        setFails([]);
    }, [getRandomWord, setGameStatus]);

    useEffect(() => {
        reset();
    }, [useCustomData, data, reset]);


    useEffect(() => {
        if (playSound) {
            if (gameStatus === "won") {
                const audio = new Audio(winSound);
                audio.play();
            } else if (gameStatus === "lost") {
                const audio = new Audio(loseSound);
                audio.play();
            }
        }
    }, [gameStatus, playSound]);

    return (
        <main>
            {error && <p className="error">{error}</p>}
            <section className="content-area">
                <ScoreTracker/>
                <section className="word-section">
                    <h4>Guess the word</h4>
                    <div className="hiddenWord">
                        {hiddenWord.split('').map((char, index) => (
                            <span key={index} className="hidden-char" data-content={char}>{char}</span>
                        ))}
                    </div>
                </section>
                <aside className="down-content">
                    <div className="svgs-container">
                        {fails.length > 0 && <SVGHangman numberOfIncorrectGuesses={fails.length}/>}
                    </div>
                    <div className="keyboard">
                        {alphabet
                            .map((letter, index) =>
                                <KeyboardButton
                                    key={index}
                                    letter={letter}
                                    onClick={onGuess}
                                    isCorrectGuess={word.includes(letter)}
                                    shouldReset={shouldResetButtons}
                                    onReset={() => setShouldResetButtons(false)}
                                />
                            )}
                    </div>
                </aside>

                {gameStatus === "won" && (
                    <Modal onPlayAgain={reset} message={"You win!"} word={word}/>
                )}
                {gameStatus === "lost" && (
                    <Modal onPlayAgain={reset} message={"You lose!"} word={word}/>
                )}
            </section>
            {playSound && <audio src={cyberpunkGameMusic} autoPlay></audio>}
        </main>
    );
};

export default Hangman;
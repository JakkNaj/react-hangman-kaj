import React, {useContext, useEffect, useState} from 'react';
import KeyboardButton from "./KeyboardButton";
import Modal from "./modal/Modal";
import ScoreTracker from "./ScoreTracker";
import TopPlayers from "./TopPlayers";
import {useGameStatus} from "./GameStatusContext";

import winSound from '../assets/win-sound.mp3';
import loseSound from '../assets/lose-sound.mp3';
import SVGHangman from "./SVGhangman";
import {GlobalContext} from "./GlobalContext";
import {fetchRandomWord} from "../modules/wordFetcher";

import './Hangman.css';
import SettingsSection from "./Settings";

const Hangman = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maxFails = 6;

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');
    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [shouldResetButtons, setShouldResetButtons] = useState(false);
    const { gameStatus, setGameStatus } = useGameStatus();
    const { data, useCustomData, playSound } = useContext(GlobalContext);

    const getRandomWord = () => {
        if (useCustomData && data.length > 0){
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWord = data[randomIndex];
            setWord(randomWord.toUpperCase());
        } else {
            const fetchData = async () => {
                const fetchedWord = await fetchRandomWord();
                if (fetchedWord) {
                    setWord(fetchedWord);
                }
            };
            fetchData();
        }
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

    const reset = () => {
        getRandomWord()
        setShouldResetButtons(true);
        setGameStatus(null);
        setCorrects([]);
        setFails([]);
    }

    useEffect(() => {
        reset();
    }, [useCustomData, data]);


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
    }, [gameStatus]);

    return (
        <div>
            <SettingsSection/>
            <ScoreTracker/>
            <div className="content-area">
                <div className="left-content">
                    <p className="hiddenWord">{hiddenWord}</p>
                    <div className="svgs-container">
                        {fails.length > 0 && <SVGHangman numberOfIncorrectGuesses={fails.length}/>}
                    </div>
                </div>
                <div className="right-content">
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
                    <TopPlayers/>
                </div>

                {gameStatus === "won" && (
                    <Modal onPlayAgain={reset} message={"You win!"} word={word}/>
                    )}
                    {gameStatus === "lost" && (
                        <Modal onPlayAgain={reset} message={"You lose!"} word={word}/>
                    )}
            </div>
        </div>
    );
};

export default Hangman;
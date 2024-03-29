import React, {useContext, useEffect, useState} from 'react';
import KeyboardButton from "./KeyboardButton";
import Modal from "./modal/Modal";
import ScoreTracker from "./ScoreTracker";
import TopPlayers from "./TopPlayers";
import {useGameStatus} from "./GameStatusContext";

import winSound from '../assets/win-sound.mp3';
import loseSound from '../assets/lose-sound.mp3';
import SVGHangman from "./svgs/SVGhangman";
import {GlobalContext} from "./GlobalContext";
import {fetchRandomWord} from "../modules/wordFetcher";


const Hangman = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maxFails = 6;

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');
    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [shouldResetButtons, setShouldResetButtons] = useState(false);
    const { gameStatus, setGameStatus } = useGameStatus();
    const { data } = useContext(GlobalContext);

    const getRandomWord = () => {
        if (data.length > 0){
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWord = data[randomIndex];
            setWord(randomWord);
            console.log(randomWord);
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
            .map(letter => '_')
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
        reset()
    }, []);

    return (
        <div>
            <p>{word}</p>
            <p className="hiddenWord">{hiddenWord}</p>
            <ScoreTracker />
            <TopPlayers />
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
            { fails.length > 0 && <SVGHangman numberOfIncorrectGuesses={fails.length}/>}

            {gameStatus === "won" && (
                <div>
                    <Modal onPlayAgain={reset} message={"You win!"} word={word}/>
                    <audio src={winSound} autoPlay/>
                </div>
            )}
            {gameStatus === "lost" && (
                <div>
                    <Modal onPlayAgain={reset} message={"You lose!"} word={word}/>
                    <audio src={loseSound} autoPlay/>
                </div>
            )}
        </div>
    );
};

export default Hangman;
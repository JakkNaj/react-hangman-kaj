import React, {useEffect, useState} from 'react';
import fetchRandomWord from "../modules/wordFetcher";
import KeyboardButton from "./KeyboardButton";

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
        </div>
    );
};

export default Hangman;
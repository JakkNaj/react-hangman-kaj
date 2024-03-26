import React, {useEffect, useState} from 'react';
import fetchRandomWord from "../modules/wordFetcher";

const Hangman = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const maxFails = 6;

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');

    const getRandomWord = () => {
        const fetchData = async () => {
            const fetchedWord = await fetchRandomWord();
            if (fetchedWord) {
                setWord(fetchedWord);
            }
        };

        fetchData();
    }

    useEffect(() => {
        setHiddenWord(word
            .split('')
            .map(letter => '_')
            .join(''));
    }, [word]);

    const reset = () => {
        getRandomWord()
    }

    useEffect(() => {
        reset()
    }, []);


    return (
        <div>
            <p>{word}</p>
            <p>{hiddenWord}</p>
        </div>
    );
};

export default Hangman;
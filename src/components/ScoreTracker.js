import React, { useState, useEffect } from 'react';
import {saveScoreToLocal, loadScoreFromLocal} from '../modules/localStorageManipulator.js'
import {useGameStatus} from "./GameStatusContext";

const ScoreTracker = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [isScoreLoaded, setIsScoreLoaded] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(true);

    const {gameStatus} = useGameStatus();

    useEffect(() => {
        if (isScoreLoaded) {
            const loadedScore = loadScoreFromLocal(name);
            setScore(loadedScore);
        }
    }, [isScoreLoaded, name]);

    useEffect(() => {
        if (gameStatus === "won") {
            const newScore = loadScoreFromLocal(name) + 1;
            setScore(newScore);
            saveScoreToLocal(name, newScore);
        } else if (gameStatus === "lost") {
            const newScore = loadScoreFromLocal(name) - 1;
            setScore(newScore);
            saveScoreToLocal(name, newScore);
        }
    }, [gameStatus, name]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsScoreLoaded(true);
        setIsLoggedOut(false);
        const loadedScore = loadScoreFromLocal(name);
        setScore(loadedScore);
    };

    const handleLogout = () => {
        setName('');
        setScore(0);
        setIsScoreLoaded(false);
        setIsLoggedOut(true);
    };

    return (
        <div>
            {isLoggedOut ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <button type="submit">Log In</button>
                </form>
            ) : (
                <>
                    <h2>Player's name: {name}</h2>
                    <button onClick={handleLogout}>Log Out</button>
                    <p>{name}'s Score: {score}</p>
                </>
            )}
        </div>
    );
};

export default ScoreTracker;

import React, {useState, useEffect, useContext} from 'react';
import {saveScoreToLocal, loadScoreFromLocal} from '../modules/localStorageManipulator.js'
import {useGameStatus} from "./GameStatusContext";
import {GlobalContext} from "./GlobalContext";

import './ScoreTracker.css';

const ScoreTracker = () => {
    const [score, setScore] = useState(0);

    const { gameStatus } = useGameStatus();
    const { username } = useContext(GlobalContext);

    useEffect(() => {
        if (username) {
            const loadedScore = loadScoreFromLocal(username);
            setScore(loadedScore);
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            if (gameStatus === "won") {
                const newScore = loadScoreFromLocal(username) + 1;
                setScore(newScore);
                saveScoreToLocal(username, newScore);
            } else if (gameStatus === "lost") {
                const newScore = loadScoreFromLocal(username) - 1;
                setScore(newScore);
                saveScoreToLocal(username, newScore);
            }
        }
    }, [gameStatus, username]);

    return (
        <div className="score-tracker-grid">
            <div className="top-row">Player's name:</div>
            <div className="top-row">Score:</div>
            <div>{username}</div>
            <div>{score}</div>
        </div>
    );
};

export default ScoreTracker;
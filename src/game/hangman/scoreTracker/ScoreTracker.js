import React, {useState, useEffect, useContext} from 'react';
import {saveScoreToLocal, loadScoreFromLocal} from '../../../helpers/localStorageManipulator.js'
import {useGameStatus} from "../../GameStatusContext";
import {GlobalContext} from "../../../GlobalContext";

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
        <section className="score-tracker-grid">
            <h2 className="top-row">Player's name:</h2>
            <h2 className="top-row">Score:</h2>
            <p>{username}</p>
            <p>{score}</p>
        </section>
    );
};

export default ScoreTracker;
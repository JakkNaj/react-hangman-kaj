/*
* This file contains helper functions to manipulate scores in local storage.
 */

export const saveScoreToLocal = (name, score) => {
    const currentScores = JSON.parse(localStorage.getItem('scores')) || {};
    currentScores[name] = score;
    localStorage.setItem('scores', JSON.stringify(currentScores));
};

export const loadScoreFromLocal = (name) => {
    const currentScores = JSON.parse(localStorage.getItem('scores')) || {};
    return currentScores[name] || 0;
};


export const getAllPlayers = () => {
    const currentScores = JSON.parse(localStorage.getItem('scores')) || {};
    return Object.keys(currentScores).map(name => ({
        name,
        score: currentScores[name]
    }));
};
import React, {useEffect, useState} from 'react';
import {getAllPlayers} from "../modules/localStorageManipulator";
import {useGameStatus} from "./GameStatusContext";

import './TopPlayers.css';

const TopPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const fetchedPlayers = getAllPlayers();
            setPlayers(
                fetchedPlayers
                    .sort((a, b) => b.score - a.score)
                    .slice(0,3)
            );
        };

        fetchPlayers();
    }, []);


    return (
        <div className="top-players-section">
            <h2>Top Players</h2>
            <ol className="top-players-list">
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name}
                        <br />
                        {player.score}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopPlayers;
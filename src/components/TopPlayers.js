import React, {useEffect, useState} from 'react';
import {getAllPlayers} from "../modules/localStorageManipulator";
import {useGameStatus} from "./GameStatusContext";

const TopPlayers = () => {
    const [players, setPlayers] = useState([]);
    const { gameStatus } = useGameStatus();

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
    }, [gameStatus]);


    return (
        <div>
            <h2>Top Players</h2>
            <ol>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - Score: {player.score}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopPlayers;
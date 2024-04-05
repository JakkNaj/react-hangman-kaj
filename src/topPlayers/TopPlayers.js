import React, {useEffect, useState} from 'react';
import {getAllPlayers} from "../helpers/localStorageManipulator";
import './TopPlayers.css';

const TopPlayers = () => {
    const [topPlayers, setTopPlayers] = useState([]);
    const [otherPlayers, setOtherPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const fetchedPlayers = getAllPlayers();
            const sortedPlayers = fetchedPlayers.sort((a, b) => b.score - a.score);
            setTopPlayers(sortedPlayers.slice(0,3));
            setOtherPlayers(sortedPlayers.slice(3));
        };

        fetchPlayers();
    }, []);

    return (
        <div className="top-players-section">
            <ol className="top-players-list">
                {topPlayers.map((player, index) => (
                    <li key={index}>
                        {player.name}
                        <br/>
                        {player.score}
                    </li>
                ))}
            </ol>
            <section className="heading">
                <h2>Player's name:</h2>
                <h2>Score:</h2>
            </section>
            {otherPlayers.length > 0 ? (
                <ul className="other-players-list">
                    {otherPlayers.map((player, index) => (
                        <li key={index}>
                            <section className="others">
                                <h2>{player.name}</h2>
                                <h2>{player.score}</h2>
                            </section>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No other players registered locally.</p>
            )}
        </div>
    );
};

export default TopPlayers;
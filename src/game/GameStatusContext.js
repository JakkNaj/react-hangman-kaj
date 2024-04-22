import React, { createContext, useContext, useState } from 'react';

/*
* GameStatusContext component is responsible for providing the game status to all components in the Game component
 */

const GameStatusContext = createContext();

export const GameStatusProvider = ({ children }) => {
    // Possible values: 'won', 'lost', null
    const [gameStatus, setGameStatus] = useState(null);

    return (
        <GameStatusContext.Provider value={{ gameStatus, setGameStatus }}>
            {children}
        </GameStatusContext.Provider>
    );
};

export const useGameStatus = () => useContext(GameStatusContext);
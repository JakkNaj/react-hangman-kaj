import React, { createContext, useState } from 'react';

/*
* GlobalContext component is responsible for providing global state to all components in the application
 */

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(true);
    const [useCustomData, setUseCustomData] = useState(false);
    const [playSound, setPlaySound] = useState(false);
    const [hasInternetCon, setHasInternetCon] = useState(navigator.onLine);


    const resetGame = () => {
        setLoggedIn(false);
        setUsername('');
        setData([]);
        setDataLoaded(true);
        setUseCustomData(false);
        setPlaySound(false);
    };

    return (
        <GlobalContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, data, setData, dataLoaded,
            setDataLoaded, useCustomData, setUseCustomData, playSound, setPlaySound, resetGame, hasInternetCon,
            setHasInternetCon }}>
            {children}
        </GlobalContext.Provider>
    );
};
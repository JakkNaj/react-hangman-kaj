import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(true);

    return (
        <GlobalContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, data, setData, dataLoaded, setDataLoaded }}>
            {children}
        </GlobalContext.Provider>
    );
};
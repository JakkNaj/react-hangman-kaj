import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);

    return (
        <GlobalContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, data, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};
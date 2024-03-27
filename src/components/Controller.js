import React, { useState } from 'react';
import LandingPage from './LoginPage';
import ChooseData from "./ChooseData";
import { GameStatusProvider } from "./GameStatusContext";
import Hangman from "./Hangman";

const Controller = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dataChosen, setDataChosen] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (name) => {
        setUsername(name);
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername('');
        setLoggedIn(false);
    };

    const handleChooseData = () => {
        setDataChosen(true);
    }

    return (
        <div>
            {!loggedIn && <LandingPage onLogin={handleLogin} />}

            {loggedIn && !dataChosen && <ChooseData handleChooseData={handleChooseData} />}

            {dataChosen &&
                <GameStatusProvider>
                    <Hangman />
                </GameStatusProvider>
            }
        </div>
    );
};

export default Controller;

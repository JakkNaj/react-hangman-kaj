import React, { useState } from 'react';
import LoginPage from './LoginPage';
import ChooseData from "./ChooseData";
import { GameStatusProvider } from "./GameStatusContext";
import Hangman from "./Hangman";

const Controller = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dataChosen, setDataChosen] = useState(false);
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);

    const handleLogin = (name) => {
        setUsername(name);
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername('');
        setLoggedIn(false);
    };

    const handleChosenData = (d) => {
        setDataChosen(true);
        setData(d);
        console.log("data saved in controller :\n"  + d);
    }

    return (
        <div>
            {!loggedIn && <LoginPage onLogin={handleLogin} onData={handleChosenData}/>}

            {dataChosen &&
                <GameStatusProvider>
                    <Hangman />
                </GameStatusProvider>
            }
        </div>
    );
};

export default Controller;

import './App.css';
import Hangman from "./components/Hangman";
import LoginPage from "./components/LoginPage";
import {GameStatusProvider} from "./components/GameStatusContext";
import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./components/GlobalContext";

const Game = () =>  {
    const { loggedIn, setHasInternetCon } = useContext(GlobalContext);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(!render);
    }, [loggedIn, render]);

    const updateInternetStatus = () => {
        setHasInternetCon(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', updateInternetStatus);
        window.addEventListener('offline', updateInternetStatus);

        return () => {
            window.removeEventListener('online', updateInternetStatus);
            window.removeEventListener('offline', updateInternetStatus);
        };
    }, );

    return (
        <div>
            {!loggedIn && <LoginPage/>}

            {loggedIn &&
                <GameStatusProvider>
                    <Hangman/>
                </GameStatusProvider>
            }
        </div>
    );
}
export default Game;


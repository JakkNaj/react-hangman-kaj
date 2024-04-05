import '../App.css';
import Hangman from "./hangman/Hangman";
import LoginPage from "./login/LoginPage";
import {GameStatusProvider} from "./GameStatusContext";
import React, {useCallback, useContext, useEffect} from "react";
import {GlobalContext} from "../GlobalContext";

const Game = () =>  {
    const { loggedIn, setHasInternetCon } = useContext(GlobalContext);

    const updateInternetStatus = useCallback (() => {
        setHasInternetCon(navigator.onLine);
    }, [setHasInternetCon]);

    useEffect(() => {
        window.addEventListener('online', updateInternetStatus);
        window.addEventListener('offline', updateInternetStatus);

        return () => {
            window.removeEventListener('online', updateInternetStatus);
            window.removeEventListener('offline', updateInternetStatus);
        };
    }, [updateInternetStatus]);


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


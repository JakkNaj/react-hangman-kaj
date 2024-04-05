import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

import './Settings.css';

import playSoundIcon from '../assets/playSoundIcon.png';
import muteSoundIcon from '../assets/muteSoundIcon.png';

const Settings = () => {
    const { resetGame, playSound, setPlaySound} = useContext(GlobalContext);

    const handleLogout = () => {
        resetGame();
    }

    const toggleMute = () => {
        setPlaySound(!playSound);
    }

    return (
        <div className="settings-section">
            <button onClick={handleLogout} id="logout-btn">Logout</button>
            <button onClick={toggleMute} id="mute-btn">
                <img src={!playSound ? playSoundIcon : muteSoundIcon} alt="mute/unmute sound"/>
            </button>

        </div>
    );
};

export default Settings;
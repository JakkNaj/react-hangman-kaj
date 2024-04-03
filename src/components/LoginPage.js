import React, {useContext, useState} from 'react';
import './LoginPage.css';
import ChooseData from "./ChooseData";
import {GlobalContext} from "./GlobalContext";
const LoginPage = () => {
    const { setUsername, setLoggedIn, dataLoaded, useCustomData } = useContext(GlobalContext);
    const [name, setName] = useState('');
    const [shouldShake, setShouldShake] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [dataLoadError, setDataLoadError] = useState(false);

    const handleLogin = () => {
        if (!name) {
            setShouldShake(true);
            setShowErrorMessage(true);
            setTimeout(() => {
                setShouldShake(false);
            }, 500);
        } else {
            if (useCustomData && !dataLoaded){
                setDataLoadError(true);
                return;
            }
            setUsername(name);
            setLoggedIn(true);
        }
    };

    return (
        <div className="login-container">
            <div className="loginBox">
                <h2>Welcome!</h2>
                {showErrorMessage ? <p className="error">Cannot continue without a name!</p> : <p>Please enter your name!</p>}
                {dataLoadError && <p className="error">You have to successfully load in data first!</p>}
                <h3>Choose Name</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={shouldShake ? 'input shake' : 'input'}
                    placeholder="Enter your name"
                    autoFocus
                />

                <ChooseData />

                <button className="button" onClick={handleLogin} id="playBtn">Let's play!</button>
            </div>
        </div>
    );
};


export default LoginPage;
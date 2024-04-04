import React, {useContext, useState} from 'react';
import './LoginPage.css';
import ChooseData from "./ChooseData";
import {GlobalContext} from "./GlobalContext";
import ropeImg from "../assets/frontRope.jpg";
const LoginPage = () => {
    const { setUsername, setLoggedIn, dataLoaded, useCustomData, hasInternetCon } = useContext(GlobalContext);
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
            else if (!useCustomData && !hasInternetCon){
                return;
            }
            setUsername(name);
            setLoggedIn(true);
        }
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
        if (e.target.value) {
            setShowErrorMessage(false);
        }
    };

    return (
        <main className="login-container">
            <section className="loginBox">
                <h2>Welcome!</h2>
                <div className="choose-name-container">
                    <h4>Choose Name</h4>
                    <input
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        className={shouldShake ? 'input shake' : 'input'}
                        placeholder="Enter your name"
                        autoFocus
                    />
                </div>

                <ChooseData/>

                {showErrorMessage ? <p className="error">Cannot continue without a name!</p> :
                    <p>Please enter your name!</p>}
                {dataLoadError && <p className="error">You have to successfully load in data first!</p>}
                {!hasInternetCon && !useCustomData && (
                    <p className="error">Cannot use English dictionary when you're offline!</p>
                )}

                <button className="button" onClick={handleLogin} id="playBtn">Let's play!</button>
            </section>
            <img src={ropeImg} alt="Hangman" className="rope-image" />

        </main>
    );
};


export default LoginPage;
import React, { useState } from 'react';
import './LoginPage.css';
import ChooseData from "./ChooseData";
const LoginPage = ({ onLogin, onData }) => {
    const [name, setName] = useState('');
    const [shouldShake, setShouldShake] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLogin = () => {
        if (name) {
            onLogin(name);
        } else {
            setShouldShake(true);
            setShowErrorMessage(true);
            setTimeout(() => {
                setShouldShake(false);
            }, 500);
        }
    };

    return (
        <div className="login-container">
            <div className="loginBox">
                <h2>Welcome!</h2>
                {showErrorMessage ? <p className="error">Cannot continue without a name!</p> : <p>Please enter you name!</p>}
                <h3>Choose Name</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={shouldShake ? 'input shake' : 'input'}
                    placeholder="Enter your name"
                    autoFocus
                />

                <ChooseData onData={onData}/>

                <button className="button" onClick={handleLogin}>Let's play!</button>
            </div>
        </div>
    );
};


export default LoginPage;

import React, { useState } from 'react';
import LandingPage from './LoginPage';


const Controller = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (name) => {
        setUsername(name);
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername('');
        setLoggedIn(false);
    };

    return (
        <div>
            {!loggedIn && <LandingPage onLogin={handleLogin} />}

            {loggedIn && <p>OTHER CONTENT for {username}</p>}
        </div>
    );
};

export default Controller;

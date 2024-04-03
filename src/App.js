import './App.css';
import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Game from "./Game";
import TopPlayers from "./components/TopPlayers";

const App = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goForward = () => {
        navigate(1);
    };

    return (
        <div className="App">
            <div>
                <nav>
                    <ul id="navigation">
                        <li>
                            <Link to="/">Game</Link>
                        </li>
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                        <li>
                            <Link to="/topPlayers">Top Players</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/topPlayers" element={<TopPlayers />} />
            </Routes>
        </div>
    );
}

export default App;
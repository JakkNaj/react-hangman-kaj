import './App.css';
import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Game from "./Game";
import TopPlayers from "./components/TopPlayers";
import { useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    return (
        <div className="app-nav">
            <div>
                <nav>
                    <ul id="navigation">
                        <li className={location.pathname === "/" ? "home" : ""}>
                            <Link to="/">Game</Link>
                        </li>
                        <li className={location.pathname === "/history" ? "history" : ""}>
                            <Link to="/history">History</Link>
                        </li>
                        <li className={location.pathname === "/topPlayers" ? "topPlayers" : ""}>
                            <Link to="/topPlayers">Top Players</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/topPlayers" element={<TopPlayers />} />
            </Routes>
        </div>
    );
}

export default App;
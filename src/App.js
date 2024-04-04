import './App.css';
import React, {useContext} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Game from "./Game";
import TopPlayers from "./components/TopPlayers";
import { useLocation } from 'react-router-dom';
import {GlobalContext} from "./components/GlobalContext";
import Settings from "./components/Settings";
import History from "./History";

const App = () => {
    const location = useLocation();
    const { loggedIn } = useContext(GlobalContext);

    return (
        <div className="app-nav">
            <div>
                <nav>
                    <h3>Hangman game</h3>
                    <div>
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
                    </div>
                    {loggedIn && (<Settings/>)}
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/history" element={<History />}/>
                <Route path="/topPlayers" element={<TopPlayers/>}/>
            </Routes>
        </div>
    );
}

export default App;
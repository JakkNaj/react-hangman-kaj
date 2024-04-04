import './App.css';
import React, {useContext} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Game from "./Game";
import TopPlayers from "./components/TopPlayers";
import {GlobalContext} from "./components/GlobalContext";
import Settings from "./components/Settings";
import History from "./History";

const App = () => {
    const { loggedIn } = useContext(GlobalContext);

    return (
        <div className="app-nav">
            <nav>
                <h3>Hangman game</h3>
                <ul id="navigation">
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Game</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topPlayers" activeClassName="active-link">Top Players</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" activeClassName="active-link">History</NavLink>
                    </li>
                </ul>
                {loggedIn && (<Settings/>)}
            </nav>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/history" element={<History />}/>
                <Route path="/topPlayers" element={<TopPlayers/>}/>
            </Routes>
        </div>
    );
}

export default App;
import {useContext} from "react";
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Game from "./game/Game";
import TopPlayers from "./topPlayers/TopPlayers";
import {GlobalContext} from "./GlobalContext";
import Settings from "./navSettings/Settings";
import History from "./history/History";
import './App.css';

const App = () => {
    const { loggedIn } = useContext(GlobalContext);
    const location = useLocation();

    return (
        <div className="app-nav">
            <nav>
                <h3>Hangman game</h3>
                <ul id="navigation">
                    <li>
                        <NavLink to="/">Game</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topPlayers">Top Players</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history">History</NavLink>
                    </li>
                </ul>
                {loggedIn && (<Settings/>)}
            </nav>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Game/>}/>
                        <Route path="/history" element={<History />}/>
                        <Route path="/topPlayers" element={<TopPlayers/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
import {useContext} from "react";
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Game from "./Game";
import TopPlayers from "./components/TopPlayers";
import {GlobalContext} from "./components/GlobalContext";
import Settings from "./components/Settings";
import History from "./History";
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
                        <NavLink to="/react-hangman-kaj/" exact activeClassName="active-link">Game</NavLink>
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
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes location={location}>
                        <Route path="/react-hangman-kaj/" element={<Game/>}/>
                        <Route path="/history" element={<History />}/>
                        <Route path="/topPlayers" element={<TopPlayers/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
import {useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Game from "./game/Game";
import TopPlayers from "./topPlayers/TopPlayers";
import {GlobalContext} from "./GlobalContext";
import Settings from "./navSettings/Settings";
import History from "./history/History";
import './App.css';

/*
* App component is the main component of the application and is responsible for routing between each page
 */

const App = () => {
    const { loggedIn } = useContext(GlobalContext);

    return (
        <div className="app-nav">
            <nav>
                <h3>Hangman game</h3>
                <ul id="navigation">
                    <li>
                        <Link to="/">Game</Link>
                    </li>
                    <li>
                        <Link to="/topPlayers">Top Players</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
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
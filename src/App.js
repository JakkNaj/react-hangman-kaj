import './App.css';
import Hangman from "./components/Hangman";
import LoginPage from "./components/LoginPage";
import {GameStatusProvider} from "./components/GameStatusContext";
import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./components/GlobalContext";

const App = () => {
  const { loggedIn } = useContext(GlobalContext);
  const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(!render);
    }, [loggedIn]);

  return (
      <div>
        {!loggedIn && <LoginPage />}

        {loggedIn &&
            <GameStatusProvider>
              <Hangman />
            </GameStatusProvider>
        }
      </div>
  );
}


export default App;


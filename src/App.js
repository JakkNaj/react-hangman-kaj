import './App.css';
import Hangman from "./components/Hangman";
import {GameStatusProvider} from "./components/GameStatusContext";

const App = () => {
  return (
      <GameStatusProvider>
        <Hangman />
      </GameStatusProvider>
  );
}


export default App;

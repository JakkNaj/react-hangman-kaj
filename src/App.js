import './App.css';
import Hangman from "./components/Hangman";
import {GameStatusProvider} from "./components/GameStatusContext";
import LoginPage from "./components/LoginPage";
import Controller from "./components/Controller";

const App = () => {
  return (
      <Controller />
  );
}


export default App;


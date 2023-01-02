


import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [setup, setSetup] = useState("Start");

  const fetchJoke = function(){
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist")
    .then(response => response.json())
    .then(data => setSetup(data))
  }

  useEffect(() => {
    fetchJoke();
  }, [])

  return (
    <div id="app">
    <h1>{setup.setup}</h1>
    <h2>{setup.delivery}</h2>
    <button onClick={fetchJoke}>Gimme those jokes!</button>
    </div>
  );
}

export default App;

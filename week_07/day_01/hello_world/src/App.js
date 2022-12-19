import './App.css';
import {useState} from 'react';

function App() {

  const [greeting, setGreeting] = useState("Hello World");
  const [total, setTotal] = useState(0);

  const handleClick = (name) => {
    setGreeting("Howdy " + name)
  }

  const deposit = () => {
    if (total < 1000) {
    setTotal(total + 10)}
  }

  const withdraw = () => {
    if (total > 0) {
    setTotal(total - 10)}
  }


  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() =>handleClick("John")}>Change Greeting</button>
      <p>Total: £{total}</p>
      <div class="button-container">
        <button onClick={deposit}>Deposit</button>
        <button onClick={withdraw}>Withdraw</button>
      </div>
    </div>
  );
};

export default App;
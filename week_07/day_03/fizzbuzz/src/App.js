import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';



function App() {
  
  const handleConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 80
    });
  };

  const [currentNum, setCurrentNum] = useState(1)
  const [output, setOutput] = useState("")

  useEffect(() => {
    if (currentNum % 3 === 0 && currentNum % 5 === 0){
      setOutput("FizzBuzz")
      handleConfetti();
    } else if (currentNum % 5 === 0) {
      setOutput("Buzz")
    } else if (currentNum % 3 === 0){
      setOutput("Fizz")
    } else {
      setOutput(currentNum)
    }
  }, [currentNum])

  const handleInc = () => {
    setCurrentNum(currentNum + 1)
  };
  const handleDec = () => {
    setCurrentNum(currentNum - 1)
  };

  return (
    <div className="fizzbuzz-wrapper">
      <h1>FizzBuzz Game</h1>
      <div class="button-container">
        <button value={currentNum} onClick={handleInc}>+</button>
        <button value={currentNum} onClick={handleDec}>-</button>
      </div>
      <h2>{output}</h2>
    </div>
  );
}

export default App;

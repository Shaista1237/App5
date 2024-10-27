import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');
  const [sum, setSum] = useState('');

  const handleCalculate = () => {
    const numArray = numbers.split(',').map((num) => parseFloat(num.trim()));
    
    if (numArray.some(isNaN)) {
      setSum('Please enter valid numbers separated by commas');
    } else {
      const total = numArray.reduce((acc, curr) => acc + curr, 0);
      setSum(`The sum is: ${total}`);
    }
  };

  return (
    <div className="App">
      <h1>Sum of Numbers in an Array</h1>
      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleCalculate}>Calculate Sum</button>
      <p>{sum}</p>
    </div>
  );
}

export default App;


import React, { useState } from 'react'


export const App = () => {
  const [counter, setCounter] = useState(0);


  const handleButtonChange1 = () => {
    setCounter(counter - 1);
  }
  const handleButtonChange2 = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button data-testid="decrement-button" onClick={handleButtonChange1}>-</button>
      <button data-testid="increment-button" onClick={handleButtonChange2}>+</button>
      <p>clicked: {counter}</p>
    </div>
  )
}



// run your code by clicking the run button on the right





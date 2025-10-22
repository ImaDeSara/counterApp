import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0); 
  // count = current state value (e.g., 0 at first)
  // setCount = function that changes the state
  
  return (
    <>
    <h1> Counter App </h1>
      {/* State with useState */}
      <div className='counter'>
            <p> Try it: Click the button to see state in action!</p>
            {/* When clicked → call function → update state */}
            <button onClick={ () => setCount(count + 1) }> 
              Count {count} 
            </button>
            <button onClick={ () => setCount(0) }>
                Reset
            </button>
      </div>
    </>
  );
}
export default App


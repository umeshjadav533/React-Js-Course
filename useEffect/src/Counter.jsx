import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        console.log("components Re-rendered!");
    },[counter])
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  )
}

export default Counter

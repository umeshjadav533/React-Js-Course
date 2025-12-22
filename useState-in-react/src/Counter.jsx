import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Deacrease</button>
    </div>
  )
}

export default Counter

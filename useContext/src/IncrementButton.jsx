import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Child = () => {
  const { counter, setCounter } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default Child

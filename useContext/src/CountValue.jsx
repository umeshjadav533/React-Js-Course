import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const CountValue = () => {
  const { counter } = useContext(UserContext);
  return (
    <div>
      <h3>Counter: {counter}</h3>
    </div>
  )
}

export default CountValue

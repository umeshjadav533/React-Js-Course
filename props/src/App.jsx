import React from 'react'
import Hello from './Hello'

const App = () => {
  const hobbies = ["Cricket", "Running", "Walking"];
  return (
    <div>
      <Hello name="umesh" age={19} city="dhrangadhra" city="Dhranadhra" hobbies={hobbies}/>
      <Hello name="Jadav"/>
    </div>
  )
}

export default App

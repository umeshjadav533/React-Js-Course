import React from 'react'
import Hello from './components/Hello'
import Bye from './components/Bye'
import Styling from './css_styling/Styling'

const App = () => {
  return (
    <div>
      {/* components */}
      <Hello />
      <Bye />

      {/* styling */}
      <Styling />
    </div>
  )
}

export default App

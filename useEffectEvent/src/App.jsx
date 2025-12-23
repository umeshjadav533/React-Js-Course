// Note useEffect hook is frequantly render but useEffectvent is not not evert time render
// useEffectEvent 
// 1. Timer
// 2. Auto Save 
// 3. Web Socket
// 4. fetch Api
// 

import React from 'react'
// import Timer from './Timer'
import AutoSaveForm from './AutoSaveForm'

const App = () => {
  return (
    <div>
      {/* <Timer /> */}
      <AutoSaveForm />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import PortalTest from './PortalTest'
import Modal from './Modal';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <PortalTest /> */}
      <h1>App componenet</h1>
      <button onClick={()=>setOpen(true)}>open modal</button>
      <Modal isOpen={open} onClose={()=>setOpen(false)}>
        <h1>Hello from modal</h1>
        <p>This is a simple modal without context.</p>
      </Modal>
    </>
  )
}

export default App

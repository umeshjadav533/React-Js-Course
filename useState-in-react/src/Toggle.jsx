import React, { useState } from 'react'

const Toggle = () => {
    const [isVisibile, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisibile)}>
        {
            isVisibile ?  "Hide" : "Show"
        }
        Text
      </button>
      
      {
        isVisibile && (
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, est!</p>
        )
      }
    </div>
  )
}

export default Toggle

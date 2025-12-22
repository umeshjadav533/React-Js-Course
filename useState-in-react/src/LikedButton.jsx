import React, { useState } from 'react'

const LikedButton = () => {
    const [isVisibile, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisibile)}>
        {
            isVisibile ?  "❤ Liked" : "🤍 Like"
        }
      </button>
    </div>
  )
}

export default LikedButton

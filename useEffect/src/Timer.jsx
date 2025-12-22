import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Timer cleared");
        }
    },[]);
  return (
    <div>
      <h2>seconds: {seconds}</h2>
    </div>
  )
}

export default Timer

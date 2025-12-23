// without useEffectEvent hook
import React, { useEffect, useEffectEvent, useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0);

    const onTick = useEffectEvent(() => {
        console.log(counter);
        setCounter(prev => prev + 1);
    })
    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, 1000);

        return () => clearInterval(id);
    },[]);
  return (
    <div>
      <h3>Counter: {counter}</h3>
    </div>
  )
}

export default Timer

// with useEffect hook
// import React, { useEffect, useState } from 'react'

// const Timer = () => {
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         const id = setInterval(() => {
//             console.log(counter);
//             setCounter(prev => prev + 1);
//         }, 1000);

//         return () => clearInterval(id);
//     },[]);
//   return (
//     <div>
//       <h3>Counter: {counter}</h3>
//     </div>
//   )
// }

// export default Timer

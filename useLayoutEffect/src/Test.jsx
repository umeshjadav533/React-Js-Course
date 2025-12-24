import { useEffect, useLayoutEffect } from "react"


const Test = () => {
    useEffect(() => {
        console.log("useEffect hook");
    },[]);

    useLayoutEffect(()=>{
        console.log("useLayoutEffect hook");
    },[]);

  return (
    <div>
        <h3>Test</h3>
    </div>
  )
}

export default Test

import { useState } from "react"

const WithoutUseMomo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = () => {
        console.log("Running expensive Calculation");
        let total=0;
        for(let i = 0; i < 1000000000; i++){
            total += i;
        }
        return total;
    }

    const result = expensiveCalculation();
  return (
    <div>
      <h2>Without useMemo</h2>
      <h2>Result : {result}</h2>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default WithoutUseMomo

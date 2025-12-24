import { useMemo, useState } from "react"

export const WithoutMemo = () => {
    const [count, setCount] = useState(0);
    const user = useMemo(()=>({name: "umesh jadav", age: 20}), []);
    console.log("Parent rendered");
  return (
    <div>
      <h2>Parent Button: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <Child user={user} />
    </div>
  )
}

export const Child = ({user}) => {
    console.log("Child rendered");
    return <h3>User: {user.name}</h3>
}
import { useState } from "react";

export function Parent(){
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <ChildA setCounter={setCounter} />
            <ChildB counter={counter} />
        </div>
    )
}

function ChildA(props){
    const handleClick = () => {
        props.setCounter(prevCount => prevCount + 1);
    }

    return <button onClick={handleClick}>Increment</button>
}

function ChildB(props){
    return <h1>Counter: {props.counter}</h1>
}
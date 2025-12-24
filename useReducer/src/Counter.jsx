import { useReducer } from 'react'

const Counter = () => {
    const reducer = (state, action) => {
      console.log("state: ", state);
      console.log("action: ", action);
        switch(action.type){
            case "increment" : 
                return { count: state.count + 1 }

            case "decrement" : 
                return { count: state.count - 1 }

            case "reset" : 
                return { count: 0}

            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counnter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default Counter

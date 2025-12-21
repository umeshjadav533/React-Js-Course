// Function and events
import React from 'react'

const App = () => {
  const printName = (name) => {
    return name;
  }

  const handleClick = (event) => {
    console.clear();
    console.log(event.target.value);
  }

  const handleHover = () => {
    alert("Hover box");
  }

  const handleDoubleClick = () => {
    alert("DoubleClick box");
  }
  return (
    <div>
      <h1>Full name : {printName("Jadav Umesh")}</h1>
      <input type='text' placeholder='Type somthing' onChange={handleClick}/>
      <button onClick={() => alert("Hello from inline function")}>Clik me</button>
      <p onMouseOver={handleHover} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptatibus.</p>
    </div>
  )
}

export default App

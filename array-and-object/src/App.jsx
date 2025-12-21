// Array and objects
import React from 'react'

const App = () => {
  const language = ["Java", "JavaScript", "Python", "Html"];
  const user = {
    name: "umesh",
    age: 18,
    work: "Web developer"
  }
  return (
    <div>
      <ul>
        {
          language.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>

      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.work}</li>
      </ul>
    </div>
  )
}

export default App

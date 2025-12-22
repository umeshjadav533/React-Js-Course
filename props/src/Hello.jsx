import React from 'react'

const Hello = ({ name = "guest", age = 18, city = "Unknown", hobbies = [] }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>age :  {age}</p>
      <p>city: {city}</p>
      <ul>
        {
            hobbies.map((hobbie, index) => (
                <li key={index}>{hobbie}</li>
            ))
            // console.log(props.hobbies)
        }
      </ul>
    </div>
  )
}

export default Hello

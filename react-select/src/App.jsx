import React, { useState } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select'
import AsyncSelect from 'react-select/async'

const App = () => {
  // const [fruit, setFruit] = useState(null);
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanila", label: "Vanila" },
  // ]
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry", isDisabled: true },
    { value: "vanila", label: "Vanila" },
  ]

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "red",
      borderWidth: "4px",
      padding: "5px"
    }),
    option: (base) => ({
      ...base,
      color: "blue",
      backgroundColor: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "red",
      fontWeight: "bold"
    })
  }
  return (
    <div>
      <div style={{width: "300px"}}>
        {/* <Select 
          options={options}
          value={fruit}
          onChange={setFruit}
        />
        <p>{fruit?.label}</p> */}

        <Select 
          styles={customStyles}
          options={options}
          onChange={(selected) => console.log(selected)}
          isMulti
          placeholder="Select Your Fruit"
          isClearable
          // isDisabled={true}
          defaultValue={options[1]}
          isSearchable={false}
        />
        <br/><br/>

        <CreatableSelect 
          options={options}
          onChange={(selected) => console.log(selected)}
          isMulti
          placeholder="Select Your Fruit"
          isClearable
        />

        <br/><br/>

        <AsyncSelect
          loadOptions={(input) => {
            return fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
              .then((res) => res.json())
              .then((data) =>
                data.map((user) => ({
                  value: user.id,
                  label: user.name,
                }))
              );
          }}
        />

      </div>
    </div>
  )
}

export default App

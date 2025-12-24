// with useReducer
import { useReducer } from "react";

const CheckBox = () => {
    const [checked, toggle] = useReducer((checked) => (!checked), false);
  return (
    <div>
        <input type="checkbox" checked={checked} onChange={toggle} />
        {
            checked ? "Checked" : "not Checked"
        }
    </div>
  )
}

export default CheckBox

// without useReducer
// import React, { useState } from 'react'

// const CheckBox = () => {
//     const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <input type='checkbox' checked={checked} onChange={()=>setChecked(!checked)} />
//       {
//         checked ? "Checked" : "not Checked"
//       }
//     </div>
//   )
// }

// export default CheckBox

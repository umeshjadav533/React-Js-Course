import React, { useEffect, useEffectEvent, useState } from 'react'

const AutoSaveForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const autoSave = useEffectEvent(() => {
        console.log(formData);
    });

    useEffect(() => {
        const data = setInterval(() => {
            autoSave();
        },3000);
    },[])
  return (
    <div>
      <input type='text' placeholder='Enter Name' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}/>
      <input type='email' placeholder='Enter Email' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
    </div>
  )
}

export default AutoSaveForm

// 1. inline style
// 2. external style
// 3. module style

import React from 'react'
import '../css_styling/style.css'
import style from '../css_styling/practice.module.css'

const Styling = () => {
    const headingstyle = {
        color: "red",
        fontSize: "20px"
    }
  return (
    <div>
        {/* 1. inline style */}
        <h5 style={headingstyle}>inline style</h5>

        {/* 2. external style */}
        <p className='test'>Lorem ipsum dolor sit amet.</p>

        {/* 3. css module */}
        <small className={style.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illo.</small>
    </div>
  )
}

export default Styling

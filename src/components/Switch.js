import React from 'react'
import './Switch.css'

const Switch = ({ setToggle, toggle }) => {
    const toggleswitch = () => {
        setToggle(!toggle)
    }
    return (
        <label className='switch' >
            <input type='checkbox' onChange={toggleswitch} />
            <span className='slider' />
        </label>
    )
}

export default Switch
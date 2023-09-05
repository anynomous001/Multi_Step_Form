import React from 'react'
import './Switch.css'

const Switch = ({ setToggle, toggle, setPlanPeriod }) => {
    const toggleswitch = () => {
        setToggle(!toggle)
        toggle ? setPlanPeriod('Monthly') : setPlanPeriod('Yearly')
    }

    return (
        <label className='switch' >
            <input type='checkbox' onChange={toggleswitch} />
            <span className='slider' />
        </label>
    )
}

export default Switch
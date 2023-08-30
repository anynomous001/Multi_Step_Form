import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <div className='footer-div'>
            <NavLink to='/Secondpage'><button className='next-btn'>Next Step</button></NavLink>
        </div>
    )
}

export default Footer
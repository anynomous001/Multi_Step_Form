import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='routes'>
                <Link to='/'> <span>1</span> </Link>
                <Link to='/Secondpage'><span>2</span> </Link>
                <Link to='/Thirdpage'><span>3</span> </Link>
                <Link to='/Fourthpage'><span>4</span> </Link>

            </div>
        </div>
    )
}

export default Navbar
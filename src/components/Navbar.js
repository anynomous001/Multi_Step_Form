import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CurrentpageContext } from '../App'

const Navbar = () => {
    const { pathname } = React.useContext(CurrentpageContext)

    return (
        <div className='navbar'>
            <div className='routes'>
                <Link to='/'> <span className={`${pathname === '/' ? 'active' : ''}`} >1</span> </Link>
                <Link to='/Secondpage'><span className={`${pathname === '/Secondpage' ? 'active' : ''}`} >2</span> </Link>
                <Link to='/Thirdpage'><span className={`${pathname === '/Thirdpage' ? 'active' : ''}`} >3</span> </Link>
                <Link to='/Fourthpage'> <span className={`${pathname === '/Fourthpage' ? 'active' : ''}`} >4</span> </Link>

            </div>
        </div>
    )
}

export default Navbar
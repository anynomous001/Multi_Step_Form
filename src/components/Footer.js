import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = ({ url, backurl }) => {


    return (
        <div className='footer-div'>
            <NavLink to={url}><button className='next-btn'>Next Step</button></NavLink>
            <Link to={backurl}><button className='back-btn'>Go Back</button></Link>
        </div>
    );
}

export default Footer;

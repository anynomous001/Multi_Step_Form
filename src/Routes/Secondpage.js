import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Secondform from '../components/Secondform'
const Secondpage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isformvalid()) {
            window.location.href = '/Thirdpage';
        }
    };

    const isformvalid = () => {

    }


    return (
        < ><Navbar />
            <Secondform />
            <Footer backurl='/' handleSubmit={handleSubmit} isformvalid={isformvalid} />
        </>
    )
}

export default Secondpage
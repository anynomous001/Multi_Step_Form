import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Thirdform from '../components/Thirdform'

const Thirdpage = () => {
    return (
        <>
            <Navbar />
            <Thirdform />
            <Footer url='/Fourthpage' backurl='/Secondpage' />
        </>
    )
}

export default Thirdpage
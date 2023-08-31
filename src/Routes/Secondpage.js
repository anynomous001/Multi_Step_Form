import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Secondform from '../components/Secondform'
const Secondpage = () => {
    return (
        < ><Navbar />
            <Secondform />
            <Footer url='/Thirdpage' backurl='/' />
        </>
    )
}

export default Secondpage
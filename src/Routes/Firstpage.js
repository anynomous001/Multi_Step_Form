import React from 'react'
import Navbar from '../components/Navbar'
import Firstform from '../components/Firstform'
import Footer from '../components/Footer'

const Firstpage = () => {
    return (
        < >
            <Navbar />
            <Firstform />
            <Footer url='/Secondpage' />
        </>
    )
}

export default Firstpage
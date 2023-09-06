import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Fourthform from '../components/Fourthform'
import { CurrentpageContext } from '../App'
const Fourthpage = () => {
    const { } = React.useContext(CurrentpageContext)
    return (

        < >
            <Navbar />
            <Fourthform />
            <Footer backurl='/Thirdpage' />
        </>

    )
}

export default Fourthpage
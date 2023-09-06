import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Thirdform from '../components/Thirdform'
import { CurrentpageContext } from '../App'

const Thirdpage = () => {
    const { formData } = React.useContext(CurrentpageContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/Fourthpage';

    }




    return (
        <>
            <Navbar />
            <Thirdform />
            <Footer handleSubmit={handleSubmit} backurl='/Secondpage' />
        </>
    )
}

export default Thirdpage
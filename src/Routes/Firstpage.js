import React from 'react'
import Navbar from '../components/Navbar'
import Firstform from '../components/Firstform'
import Footer from '../components/Footer'
import { CurrentpageContext } from '../App'

const Firstpage = () => {

    const [error, setError] = React.useState({});


    const { formData, setFormData } = React.useContext(CurrentpageContext)



    const isformvalid = () => {
        let errors = {}
        if (!formData.email.includes('@gmail.com') || !formData.name || !formData.phone_number) {

            if (!formData.email.includes('@gmail.com')) {
                setError(errors.email = '*Valid Email is required');

            }
            if (!formData.name) {
                setError(errors.name = '*Name is required');


            }

            if (!formData.phone_number) {
                setError(errors.number = '*Phone Number is required');



            }

            setError(errors)

            return false

        }


        return true
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (isformvalid()) {
            window.location.href = '/Secondpage';
        }
    };


    return (
        < >
            <Navbar />
            <Firstform
                submit={handleSubmit}
                error={error}
                formData={formData}
                setFormData={setFormData}
            />
            <Footer
                url='/Secondpage'
                handleSubmit={handleSubmit}
                isformvalid={isformvalid}
            />
        </>
    )
}

export default Firstpage
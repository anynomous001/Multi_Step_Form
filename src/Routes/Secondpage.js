import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Secondform from '../components/Secondform'
import { CurrentpageContext } from '../App'




const Secondpage = () => {
    const { selectedplan } = React.useContext(CurrentpageContext)
    const [error, setError] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isformvalid()) {
            window.location.href = '/Thirdpage';
        }
    };

    const isformvalid = () => {
        if (selectedplan) {
            return true;
        }
        else {
            setError('*Select a plan')
            return false;
        }
    }


    return (
        < ><Navbar />
            <Secondform error={error} />
            <Footer backurl='/' handleSubmit={handleSubmit} isformvalid={isformvalid} />
        </>
    )
}

export default Secondpage
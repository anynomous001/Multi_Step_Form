import React from 'react'
import './Secondform.css'
import Switch from './Switch.js'

const Secondform = () => {
    return (
        <div className='outer-div'>
            <div className='form-container'>
                <h1>Select Your Plan</h1>
                <h4>You have the option of monthly or yearly billing.</h4>
                <form>

                    <Switch />
                </form>

            </div>
        </div>)
}

export default Secondform
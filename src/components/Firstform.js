import React from 'react'
import './Firstform.css'

const Firstform = () => {


    return (
        <div className='outer-div'>
            <div className='form-container'>
                <h1>Personal Info</h1>
                <h4>Please provide your name, email, address, and phone number.</h4>
                <form>
                    <label for="name">Name</label><br />
                    <input type="text" id="name" placeholder='e.g. Stephen King' required /><br />
                    <label for="email">Email Address</label><br />
                    <input type="email" id="email" placeholder='e.g. stephenking@lorem.com' required /><br />
                    <label for="phone-number">Phone Number</label><br />
                    <input type="number" id="phone-number" placeholder='e.g. +1 234 567 890' required />

                </form>
            </div>
        </div>
    )
}

export default Firstform
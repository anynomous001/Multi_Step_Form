import React from 'react'
import './Firstform.css'

const Firstform = ({ submit, error, formData, setFormData }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }


    return (
        <div className='outer-div'>
            <div className='form-container'>
                <h1>Personal Info</h1>
                <h4>Please provide your name, email, address, and phone number.</h4>
                <form onSubmit={(e) => submit(e)}>
                    <label for="name">Name</label><br />
                    <input type="text"
                        id="name"
                        placeholder='e.g. Stephen King'
                        name='name'
                        onChange={handleChange}
                        value={formData.name}
                    /><br />
                    {error.name && <p className="error">{error.name}</p>}

                    <label for="email">Email Address</label><br />
                    <input type="email"
                        id="email"
                        placeholder='e.g. stephenking@lorem.com'
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                    /><br />
                    {error.email && <p className="error">{error.email}</p>}

                    <label for="phone-number">Phone Number</label><br />
                    <input
                        type="number"
                        id="phone-number"
                        placeholder='e.g. +1 234 567 890'
                        name='phone_number'
                        onChange={handleChange}
                        value={formData.phone_number}
                    />
                    {error.number && <p className="error">{error.number}</p>}

                </form>
            </div>
        </div>
    )
}

export default Firstform
import React from 'react'
import './Thirdfrom.css'
import { CurrentpageContext } from '../App'

const Thirdform = () => {
    const { formData, setFormData, additionalPrice, setAdditionalPrice } = React.useContext(CurrentpageContext)


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })

        if (formData.online_service) {
            setAdditionalPrice([...additionalPrice, 1])
        }
        if (formData.large_storage) {
            setAdditionalPrice([...additionalPrice, 2])
        }
        if (formData.customizable_profile) {
            setAdditionalPrice([...additionalPrice, 2])
        }
    }





    return (
        <div className='outer-div'>
            <div className='form-container3'>
                <h1>Pick add-ons</h1>
                <h4>Add-ons help enhance your gaming experience.</h4>
                <form className='thirdform'>
                    <label className='checkbox-label' for="checkbox1" >
                        <input
                            className='input'
                            name='online_service'
                            checked={formData.online_service}
                            type="checkbox"
                            id="checkbox1"
                            onChange={handleChange}
                        />
                        <div class="checkmark">
                            <h4 >Online Service</h4>
                            <h6>Access to multiplayer games</h6>
                        </div>
                        <p>+$1/mo</p>
                    </label>
                    <label className='checkbox-label' for="checkbox2">
                        <input
                            className='input'
                            name='large_storage'
                            checked={formData.large_storage}
                            type="checkbox"
                            id="checkbox2"
                            onChange={handleChange}
                        />
                        <div class="checkmark">
                            <h4 >Large Storage</h4>
                            <h6>Extra 1TB of cloud save</h6>
                        </div>
                        <p>+$2/mo</p>
                    </label>
                    <label className='checkbox-label' for="checkbox3">
                        <input
                            className='input'
                            name='customizable_profile'
                            type="checkbox"
                            checked={formData.customizable_profile}
                            id="checkbox3"
                            onChange={handleChange}
                        />
                        <div class="checkmark">
                            <h4 >Customizable Profile</h4>
                            <h6>Custom theme on your profile </h6>
                        </div>
                        <p>+$2/mo</p>
                    </label>


                </form>
            </div>
        </div >
    )
}

export default Thirdform
import React from 'react'
import './Thirdfrom.css'

const Thirdform = () => {
    return (
        <div className='outer-div'>
            <div className='form-container3'>
                <h1>Pick add-ons</h1>
                <h4>Add-ons help enhance your gaming experience.</h4>
                <form className='thirdform'>
                    <label className='checkbox-label' for="checkbox1">
                        <input className='input' type="checkbox" id="checkbox1" />
                        <div class="checkmark">
                            <h4 >Online Service</h4>
                            <h6>Access to multiplayer games</h6>
                        </div>
                        <p>+$1/mo</p>
                    </label>
                    <label className='checkbox-label' for="checkbox2">
                        <input className='input' type="checkbox" id="checkbox2" />
                        <div class="checkmark">
                            <h4 >Large Storage</h4>
                            <h6>Extra 1TB of cloud save</h6>
                        </div>
                        <p>+$2/mo</p>
                    </label>
                    <label className='checkbox-label' for="checkbox3">
                        <input className='input' type="checkbox" id="checkbox3" />
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
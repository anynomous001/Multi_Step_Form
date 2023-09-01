import React from 'react'
import './Fouthform.css'

const Fourthform = () => {
    return (
        <div className='outer-div'>
            <div className='form-container'>
                <h1>Finishing Up</h1>
                <h4>Double-check everything looks OK before confirming.</h4>
                <div className='billing-details'>
                    <div className='plan-price-div'>
                        <div>
                            <h3 className='plan-name'>Plan Name</h3>
                            <p className='change-btn'>Change</p>
                        </div>
                        <span className='plan-price'>$9/mo</span>
                    </div>
                    <hr></hr>

                    <div className='add-ons-div'>
                        <h4>Add ons</h4>
                        <span>+1$/mo</span>
                    </div>
                    <div className='add-ons-div'>
                        <h4>Add ons</h4>
                        <span>+2$/mo</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Fourthform
import React from 'react'
import './Secondform.css'
import Switch from './Switch.js'
import icon_arcade from '../images/icon-arcade.png'
import icon_advanced from '../images/icon-advanced.png'
import icon_pro from '../images/icon-pro.png'


const Secondform = () => {

    const [selectedplan, setSelectedplan] = React.useState(null)
    const [toggle, setToggle] = React.useState(false)
    const handleClick = (plan) => {
        setSelectedplan(plan)
    }

    return (
        <div className='outer-div2'>
            <div className='form-container2'>
                <h1>Select Your Plan</h1>
                <h4>You have the option of monthly or yearly billing.</h4>
                <form>
                    <div className='plan-container-div'>
                        <div className={`plan-div ${selectedplan === 'arcade' ? 'selected' : ''}`} onClick={() => { handleClick('arcade') }}>
                            <img src={icon_arcade} alt='icon-arcade' />
                            <div className='plan-details'>
                                <h4>Arcade</h4>
                                <p className='price'><strong>{toggle ? '$90/year' : '$9 / month'}</strong></p>
                                {toggle ? <p className='discount-text'>2 months free</p> : ''}

                            </div>

                        </div>
                        <div className={`plan-div ${selectedplan === 'advanced' ? 'selected' : ''}`} onClick={() => { handleClick('advanced') }}>
                            <img src={icon_advanced} alt='icon-arcade' />
                            <div className='plan-details'>
                                <h4>Advanced</h4>
                                <p className='price'><strong>{toggle ? '$120/year' : '$12 / month'} </strong></p>
                                {toggle ? <p className='discount-text'>2 months free</p> : ''}

                            </div>

                        </div>
                        <div className={`plan-div ${selectedplan === 'pro' ? 'selected' : ''}`} onClick={() => { handleClick('pro') }}>
                            <img src={icon_pro} alt='icon-arcade' />
                            <div className='plan-details'>
                                <h4>Pro</h4>
                                <p className='price'><strong>{toggle ? '$150/year' : '$15 / month'}</strong></p>
                                {toggle ? <p className='discount-text'>2 months free</p> : ''}
                            </div>

                        </div>
                        <div className='switch-div'>
                            <div>
                                <span className='plan-period'>Monthly</span>
                                <Switch setToggle={setToggle} toggle={toggle} />
                                <span className='plan-period'>Yearly</span>
                            </div>

                        </div>
                    </div>


                </form>

            </div >
        </div >)
}

export default Secondform
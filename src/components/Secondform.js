import React from 'react'
import './Secondform.css'
import Switch from './Switch.js'
import icon_arcade from '../images/icon-arcade.png'
import icon_advanced from '../images/icon-advanced.png'
import icon_pro from '../images/icon-pro.png'
import { CurrentpageContext } from '../App'


const Secondform = ({ error }) => {

    const [toggle, setToggle] = React.useState(false)
    const [planPeriod, setPlanPeriod] = React.useState('Monthly')

    const { selectedplan, setSelectedplan, setPrice, price } = React.useContext(CurrentpageContext)


    const handleClick = (plan) => {
        setSelectedplan(plan)

        if (plan === 'arcade') {
            setPrice(toggle ? '$90/year' : '$9 / month');
        } else if (plan === 'advanced') {
            setPrice(toggle ? '$120/year' : '$12 / month');
        } else if (plan === 'pro') {
            setPrice(toggle ? '$150/year' : '$15 / month');
        }
        console.log(selectedplan, planPeriod, price)
    }



    return (
        <div className='outer-div2'>
            <div className='form-container2'>
                <h1>Select Your Plan</h1>
                <h4>You have the option of monthly or yearly billing.</h4>
                <form id='form-id'>
                    <div className='plan-container-div'>
                        <div className={`plan-div ${selectedplan === 'arcade' ? 'selected' : ''}`} onClick={() => { handleClick('arcade') }}>
                            <img src={icon_arcade} at='icon-arcade' />
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
                        {error && <p className='error'>{error}</p>}

                        <div className='switch-div'>
                            <div>
                                <span className={`plan-period ${toggle ? '' : 'active'}`}>Monthly</span>
                                <Switch setToggle={setToggle} toggle={toggle} setPlanPeriod={setPlanPeriod} />
                                <span className={`plan-period ${toggle ? 'active' : ''}`}>Yearly</span>
                            </div>

                        </div>
                    </div>


                </form>

            </div >
        </div >)
}

export default Secondform
/*import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = ({ url, backurl, handleSubmit }) => {


    return (
        <div className='footer-div'>
            <NavLink to={url}><button onClick={handleSubmit} className='next-btn'>Next Step</button></NavLink>
            <Link to={backurl}><button className='back-btn'>Go Back</button></Link>
        </div>
    );
}

export default Footer;

///////////////////////////////////////////////////////


import React from 'react';

function Form() {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '' 
  });

  const [formErrors, setFormErrors] = React.useState({});

  const validateForm = () => {
    let errors = {};
    if(!formData.name) errors.name = 'Name is required';
    if(!formData.email) errors.email = 'Email is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm()) {
      // submit form if valid
      console.log('Submit form', formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}  
      />
      {formErrors.name && <p>{formErrors.name}</p>}

      <input
        name="email" 
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      {formErrors.email && <p>{formErrors.email}</p>}

      <button type="submit">Validate and Submit</button>
    </form>
  )
}

export default Form;

*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { CurrentpageContext } from '../App';

const Footer = ({ url, backurl, handleSubmit }) => {

    const { pathname } = React.useContext(CurrentpageContext)




    return (
        <div className='footer-div'>
            <button onClick={handleSubmit} className='next-btn'>
                Next Step
            </button>

            {!(pathname === '/') && <Link to={backurl}>
                <button className='back-btn'>Go Back</button>
            </Link>}
        </div>
    );
}

export default Footer;
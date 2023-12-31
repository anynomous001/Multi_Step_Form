import React from 'react'
import { useLocation, Route, Routes } from 'react-router-dom';
import Firstpage from './Routes/Firstpage';
import Secondpage from './Routes/Secondpage';
import Thirdpage from './Routes/Thirdpage';
import Fourthpage from './Routes/Fourthpage';


const CurrentpageContext = React.createContext()

function App() {
  const [selectedplan, setSelectedplan] = React.useState(null)
  const [additionalPrice, setAdditionalPrice] = React.useState([]);
  const [price, setPrice] = React.useState('')

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone_number: '',
  });
  const location = useLocation()
  const pathname = location.pathname
  return (

    <div>
      <CurrentpageContext.Provider value={{ pathname, formData, setFormData, price, setPrice, selectedplan, setSelectedplan, additionalPrice, setAdditionalPrice }}>
        <Routes >
          <Route path='/' element={<Firstpage />} />
          <Route path='/Secondpage' element={<Secondpage />} />
          <Route path='/Thirdpage' element={<Thirdpage />} />
          <Route path='/Fourthpage' element={<Fourthpage />} />
        </Routes>
      </CurrentpageContext.Provider>
    </div>


  );
}

export { CurrentpageContext }
export default App;

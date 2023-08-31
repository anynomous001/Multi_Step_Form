import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Firstpage from './Routes/Firstpage';
import Secondpage from './Routes/Secondpage';
import Thirdpage from './Routes/Thirdpage';
import Fourthpage from './Routes/Fourthpage';




function App() {


  return (

    <div>

      <Routes >
        <Route path='/' element={<Firstpage />} />
        <Route path='/Secondpage' element={<Secondpage />} />
        <Route path='/Thirdpage' element={<Thirdpage />} />
        <Route path='/Fourthpage' element={<Fourthpage />} />
      </Routes>

    </div>


  );
}
export default App;

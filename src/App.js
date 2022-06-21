import './App.css';
import React from 'react'
import InsuranceList from './components/InsuranceList';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import InsuranceDetails from './components/InsuranceDetails';
import Drawer from './components/Drawer';

function App() {
  return (

    <div className='MyApp'>



      <BrowserRouter>
        <Routes>
          <Route element={<Drawer />}>
            <Route exact path='/' element={<InsuranceList />} />
            <Route path='/details/:id' element={<InsuranceDetails />} />
          </Route>
        </Routes >
      </BrowserRouter>

    </div>
  );

}

export default App;

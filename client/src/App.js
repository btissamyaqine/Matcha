import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/Signup/SignUp';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
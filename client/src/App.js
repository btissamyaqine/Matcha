import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Component/NavBar';
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/Signup/SignUp';
import Home from './Component/Home/Home';
import NavBar from './Component/Navbar/NavBar';
import Profile from './Component/Profile/Profile';
import Signin from './Component/Modals/Signin';
import Signup from './Component/Modals/Signup';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
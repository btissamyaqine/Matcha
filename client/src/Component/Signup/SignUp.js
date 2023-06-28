import React, { useState } from 'react';
import axios from 'axios'
import './styles.css';
import logo from './../../img/user.png'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [values, setValues] = useState({
    first_name:'',
    last_name:'',
    username :'',
    email :'',
    password:''
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.first_name]: [event.target.value] }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', values)
    .then( res => 
      {
        console.log(res)
        navigate("/")
      }
      )
    .catch(err => console.log(err))
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div>
          <img src ={logo} alt='logo'/>
          <h1 className="text-center">Registration</h1>
        </div>
        <div className='form-body'>
          <input onChange={handleInput} type='text' name='fist_name' placeholder='First name'/>
          <input onChange={handleInput} type='text' name='last_name' placeholder='Last name'/>
          <input onChange={handleInput} type='text' name='username' placeholder='UserName'/>
          <input onChange={handleInput} type='email' name='email' placeholder='Email'/>
          <input onChange={handleInput} type='password' name='password' placeholder='Password'/>
          <button onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>


  )
}

export default SignUp
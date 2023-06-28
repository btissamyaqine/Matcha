import React from 'react'
import './styles.css';
import logo from './../img/user.png'

function SignUp() {
  return (
    <div className='form'>
      <form>
        <div>
          <img src ={logo} alt='logo'/>
          <h1 className="text-center">Registration</h1>
        </div>
        <div className='form-body'>
          <input type='text' placeholder='UserName'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>Submit</button>
        </div>
      </form>
    </div>


  )
}

export default SignUp
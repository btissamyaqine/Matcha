/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

import logo from './../../img/user-signin.png';
import './styles.css'
function SignIn() {
  return (
    <div className='form'>
      <form>
        <div>
          <img src ={logo} alt='logo'/>
          <h1 className="text-center">Log in</h1>
        </div>
        <div className='form-body'>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
          <div className='checkbox'>
            <div>
              <input type="checkbox" id="scales" name="scales" defaultChecked />
              <label htmlFor="scales">Remember me</label>
            </div>
              <a className='link' href='#'> Forgot password?</a>
          </div>
          <button>SIGN IN</button>
          <div className='register'>
            <label htmlFor="register">Not a memeber?</label>
            <Link className='link' to="/signup">Register</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
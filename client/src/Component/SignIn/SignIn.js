import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcrypt';
import logo from './user-signin.png';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

const handleSubmit = async () => {

  const hashedPassword = await bcrypt.hash(password, 10);
  axios.post('http://localhost:5000/signin', { email, password: hashedPassword })

  .then(res => {
    // navigate('/profile');
    if (res.data.authenticated) {
      // User is authenticated
      console.log('Login successful');
    } else {
      // User is not authenticated
      console.log('Login failed');
    }
    // console.log(res);
  })
  .catch(err => console.log(err))
}
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-w-[50%] bg-gray-100">
        <div className="justify-center">
          <img
            className="mx-auto h-20 w-20 max-w-md max-h-md"
            src={logo}
            alt="signin_logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-20 px-8 rounded-md arounded-2xl" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={e => setEmail(prev => ({ ...prev, [e.target.first_name]: [e.target.value]}))}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  onChange={e => setPassword(prev => ({ ...prev, [e.target.first_name]: [e.target.value]}))}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            {/* <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create your account
            </Link> */}
          </p>
          </form>

          
        </div>
        
    </div>


  )
}

export default SignIn
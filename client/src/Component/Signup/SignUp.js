import React, { useState } from 'react';
import axios from 'axios'
import logo from './user.png'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:5000/signup', {
      firstname: firstname,
       lastname: lastname, 
       username: username, 
       email:email, 
       password:password 
    })
    .then( res => 
      {
          console.log(res);
          // navigate("/signin");
      }
      )
    .catch(err => console.log(err)
    );
  }
  return (
    <div className="isolate bg-gray-100 px-6 py-20 sm:py-20 lg:px-8">
      <div className='grid justify-center items-center'>
        <img className='mx-auto h-20 w-20 max-w-md max-h-md' src={logo} alt='userlogo'/>
        <h1 className='text-[25px] font-bold p-2'>Create your account</h1>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className=" rounded-md bg-center bg-white mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 p-20 shadow-xl">
          <div>
            <label htmlFor="first_name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                value={firstname}
                onChange={(event) => setFirstname(prev => ({...prev, [event.target.firstname]: [event.target.value] }))}
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                value={lastname}
                onChange={(event) => setLastname(prev => ({...prev, [event.target.firstname]: [event.target.value]}))}
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="last_name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2.5">
              <input
               value={username}
                onChange={(event) => setUsername(prev => ({...prev, [event.target.firstname]: [event.target.value]}))}
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
               value={email}
                onChange={(event) => setEmail(prev => ({...prev, [event.target.firstname]: [event.target.value]}))}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
               value={password}
                onChange={(event) => setPassword(prev => ({...prev, [event.target.firstname]: [event.target.value]}))}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="block w-full rounded-md bg-[#2bee7c] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4fd185]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Singup
          </button>
        </div>
        </div>

      </form>
    </div>
  
  )
}

export default SignUp
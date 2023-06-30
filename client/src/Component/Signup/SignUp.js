import React, { useState } from 'react';
import axios from 'axios'
import logo from './user.png'
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
    setValues(prev => ({...prev, [event.target.name]: [event.target.value] }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', values)
    .then( res => 
      {
        console.log(res)
        // navigate("/")
      }
      )
    .catch(err => console.log(err))
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
                onChange={handleInput}
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
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
                onChange={handleInput}
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="last_name"
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
                onChange={handleInput}
                type="text"
                name="username"
                id="username"
                autoComplete="organization"
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
                onChange={handleInput}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleInput}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
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
  //   <>
  //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-w-[50%]">
  //     <div className='columns-1'>
  //       <div className="justify-center">
  //         <img
  //           className="mx-auto h-20 w-20 max-w-md max-h-md"
  //           src={logo}
  //           alt="signup"
  //         />
  //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
  //           Registration
  //         </h2>
  //       </div>

  //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  //         <form className="space-y-6" action="#" method="POST">
  //           <div>
  //             <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
  //               First Name
  //             </label>
  //             <div className="mt-2">
  //               <input
  //                 id="first_name"
  //                 name="first_name"
  //                 type="text"
  //                 autoComplete="text"
  //                 required
  //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div>
  //             <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
  //               Last Name
  //             </label>
  //             <div className="mt-2">
  //               <input
  //                 id="last_name"
  //                 name="last_name"
  //                 type="text"
  //                 autoComplete="text"
  //                 required
  //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div>
  //             <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
  //               Username
  //             </label>
  //             <div className="mt-2">
  //               <input
  //                 id="username"
  //                 name="username"
  //                 type="text"
  //                 autoComplete="text"
  //                 required
  //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div>
  //             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
  //               Email address
  //             </label>
  //             <div className="mt-2">
  //               <input
  //                 id="email"
  //                 name="email"
  //                 type="email"
  //                 autoComplete="email"
  //                 required
  //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
  //                 Password
  //               </label>
  //             <div className="mt-2">
  //               <input
  //                 id="password"
  //                 name="password"
  //                 type="password"
  //                 autoComplete="current-password"
  //                 required
  //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //             <button
  //               type="submit"
  //               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //             >
  //               Sign up
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
        
  //   </div>

  // </>
    // <div className='form'>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <img src ={logo} alt='logo'/>
    //       <h1 className="text-center">Registration</h1>
    //     </div>
    //     <div className='form-body'>
    //       <input onChange={handleInput} type='text' name='fist_name' placeholder='First name'/>
    //       <input onChange={handleInput} type='text' name='last_name' placeholder='Last name'/>
    //       <input onChange={handleInput} type='text' name='username' placeholder='UserName'/>
    //       <input onChange={handleInput} type='email' name='email' placeholder='Email'/>
    //       <input onChange={handleInput} type='password' name='password' placeholder='Password'/>
    //       <button onSubmit={handleSubmit}>Submit</button>
    //     </div>
    //   </form>
    // </div>


  )
}

export default SignUp
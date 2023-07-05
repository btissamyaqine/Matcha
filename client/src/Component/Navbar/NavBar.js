import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  return (
    <nav className='container mx-auto px-4 flex max-w-7xl justify-between p-9 lg:px-8 shadow-2xl'>
      <Link className='text-xl text-[green] font-bold' to="/">LOGO</Link>
      <ul className='flex space-x-3'>
      {/* {!user ? (
        <> */}
          <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-indigo-500 hover:bg-indigo-600 rounded-md' to="/signin">SignIn</Link></li>
          <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-red-600 hover:bg-red-500 rounded-md ' to="/signup">SignUp</Link></li>
        {/* </>
      ) : (
        <>
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          <li  className='text-[purple]' ></li>
        </div>
          <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-indigo-500 hover:bg-indigo-600 rounded-md' to="/signin">SignIn</Link></li>
          <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-red-600 hover:bg-red-500 rounded-md ' to="/signup">Logout</Link></li>
        </>
      )} */}

      </ul>
    </nav>
  )
}

export default NavBar
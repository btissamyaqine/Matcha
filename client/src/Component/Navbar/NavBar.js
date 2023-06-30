import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {

  return (
    <nav className='container mx-auto px-4 flex max-w-7xl justify-between p-9 lg:px-8 shadow-2xl'>
      <Link className='text-xl text-[green] font-bold' to="/">LOGO</Link>
      <ul className='flex space-x-3'>
        <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-indigo-500 hover:bg-indigo-600 rounded-md' to="/signin">SignIn</Link></li>
        <li><Link className='py-2.5 px-4 text-[white] font-medium bg-auto bg-red-600 hover:bg-red-500 rounded-md ' to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
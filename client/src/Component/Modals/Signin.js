import React from 'react'
import SignIn from '../SignIn/SignIn'
import logo from './fermer.png'

function Signin({openSignin, closeSignin}) {
  return (
    <div
    onClick={closeSignin}
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        openSignin ? 'visible' : 'hidden'
      }`}
    >
      <div className="bg-white p-12 rounded shadow-md">
        <SignIn />
        {/* <img className='absolute mx-auto h-10 w-auto top-20' src={logo} alt='logo' onClick={closeSignin}/> */}
      </div>
    </div>
  )
}

export default Signin
import React from 'react'
import SignUp from '../Signup/SignUp'
import logo from './fermer.png'

function Signup({openSignup, closeSignup}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        openSignup ? 'visible' : 'hidden'
      }`}
      onClick={closeSignup}
    >
      <div className="bg-white p-12 rounded shadow-md">
        <SignUp />
      </div>
    </div>
  )
}

export default Signup
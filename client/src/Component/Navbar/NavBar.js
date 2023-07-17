import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Signin from '../Modals/Signin';
import Signup from '../Modals/Signup';


function NavBar() {
  const [activeModal, setActiveModal] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <nav className='container mx-auto px-4 flex max-w-7xl justify-between p-9 lg:px-8 shadow-2xl'>
        <Link className='text-xl text-[green] font-bold' to="/">LOGO</Link>
        <ul className='flex space-x-3'>
          <li><Link to='/signup' onClick={() => openModal('Signup')} className='py-2.5 px-4 text-[white] font-medium bg-auto bg-red-600 hover:bg-red-500 rounded-md '>SignUp</Link>{activeModal === 'Signup' && <Signup openSignup={true} closeSignup={closeModal} />}</li>
          <li><Link to='/signin' onClick={() => openModal('Signin')} className='py-2.5 px-4 text-[white] font-medium bg-auto bg-indigo-500 hover:bg-indigo-600 rounded-md'> Signin</Link>{activeModal === 'Signin' && <Signin openSignin={true} closeSignin={closeModal} />}</li>

      </ul>
    </nav>
  )
}

export default NavBar
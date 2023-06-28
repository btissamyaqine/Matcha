import React from 'react'
import { Link } from 'react-router-dom';
import  './styles.css';

function NavBar() {
 
  return (
  
    <nav>
      <ul>
        <li><Link className='logo' to="/signin">LOGO</Link></li>
        {/* <li><Link className='link' to="/">Home</Link></li> */}
        <li><Link className='link' to="/signin">SignIn</Link></li>
        {/* <li><Link className='link' to="/signup">SignUp</Link></li> */}
      </ul>
    </nav>
    
    

    
  )
}

export default NavBar
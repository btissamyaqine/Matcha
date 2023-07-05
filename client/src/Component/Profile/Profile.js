import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {
  // const [name, setName] = useState('');
  // const navigate = useNavigate();
 
  // useEffect(() => {
  //   axios.get('http://localhost:5000/profile')
  //   .the(res => {
  //     if (res.data.valid){
  //       setName(res.data.username);
  //     } else {
  //       navigate('/signin');
  //     }
  //     console.log(res)
  //   })
  //   .catch(err => console.log(err))
  // }, [])
  return (
    <div> Welcome</div>
  )
}

export default Profile
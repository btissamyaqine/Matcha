import React, {useEffect, useState} from 'react'

function SignUp() {
const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/signup')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <table>
        <thead>
          <th>firstname</th>
          <th>lastname</th>
        </thead>
        <tbody>
          {data.map( (d, i) => (
            <tr key={i}>
            <td>{d.fist_name}</td>
            <td>{d.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SignUp
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
 
const Profile = () => {
    const [firstname, setfirstname] = useState('');
    const [token, setToken] = useState('');
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 

    const axiosJWT = axios.create();
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
 
    return (
        <div className="container mt-5">
            <h1>Welcome Back: {firstname}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </div>
    )
}
 
export default Profile
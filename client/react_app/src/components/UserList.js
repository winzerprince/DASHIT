import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(response => {
                console.log('Fetched users:', response.data);
                setUsers(response.data);
            })
            .catch(err => console.error('Error fetching users: ', err));
    }, []);

    return (
        <div className="user-container">
            <h1>User List</h1>
            {users.length === 0 ? (<p>No users found</p>) : (
                <table border="1" className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email} </td>
                                <td>{ user.password}</td>

                            </tr>
                        ))}

                    </tbody>

                </table>)}
        </div>
    );
};
export default UserList;

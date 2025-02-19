import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList(){
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
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (<p>No users found</p>) : (
                <ul>
                    {users.map(user => (<li key={user.id}>{user.name} - {user.email}</li>))}
                </ul>)}
        </div>
    );
};
export default UserList;

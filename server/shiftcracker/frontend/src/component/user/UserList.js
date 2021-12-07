import React, { useEffect, useState } from 'react';
import { Link /*, Route, withRouter */ } from 'react-router-dom';
import axios from 'axios';

const UserList = ({ history }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/users')
            .then(response => response.data)
            .then(res => {
                if (res.data.length > 0) {
                    const result = res.data;
                    setUsers(result);
                }
            }).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <Link to="/adduser">
                <button > Add User </button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, name }) => (
                        <tr key={id + name}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApiService from '../../ApiService';

const UserList = ({ history }) => {
    const [userList, setUserList] = useState('');
    const [users, setUsers] = useState([]);

    const addUser = () => {
        history.push('/adduser');
    }

    useEffect(() => {
        console.log('test');
        ApiService.fetchUsers()
            .then(res => {
                console.log(res.data);
            });
        // fetch('api/v1/users', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(response => response.json())
        //     .then(res => {
        //         if (res.data.length > 0) {
        //             const list = res.data.map((item) =>
        //                 <tr key={item.id}>
        //                     <td>{item.id}</td>
        //                     <td>{item.name}</td>
        //                 </tr>);
        //             console.log(list);
        //             setUserList(list);
        //         }
        //     }).catch(err => {
        //         // Do something for an error here
        //         console.log("Error Reading data " + err);
        //     });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <button onClick={addUser}> Add User </button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>

            </table>
        </div>
    );
};

export default UserList;
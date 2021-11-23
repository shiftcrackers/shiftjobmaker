import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApiService from '../../ApiService';

const AddUser = ({ history }) => {
    const [user, setUser] = useState({
        name: ''
    });

    // const onChange = (e) => {
    //     var user = 
    // }

    const onChange = useCallback(e => {
        const { name, value } = e.target;

        setUser({
            // ...user,
            [name]: value
        });
    }, []);

    const saveUser = (e) => {
        ApiService.addUser(user)
            .then(res => {
                e.preventDefault();
                // this.setState({
                //     message: 
                // }); 
                console.log(res);
                debugger;
                console.log(user.name + '님이 성공적으로 등록되었습니다.');
                // this.props.history.push('/users');
                //history.push("/")
            }).catch(err => {
                console.log('saveUser() 에러', err);
            });

    };

    return (
        <div>
            <h2>Add User</h2>
            <form>
                <div>
                    <label>User Name</label>
                    <input type="text" placeholder="Input your name" name="name" value={user.name} onChange={onChange} />
                </div>
                <button onClick={saveUser}>Save</button>
            </form>
        </div>
    );
};

export default AddUser;
import React, { useState, useCallback } from 'react';
import axios from 'axios';

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { ThemeProvider } from '@mui/material/styles';

const AddUser = ({ history }) => {
    const [user, setUser] = useState({
        name: ''
    });

    const onChange = useCallback(e => {
        const { name, value } = e.target;

        setUser({
            // ...user,
            [name]: value
        });
    }, []);

    const saveUser = (e) => {
        e.preventDefault();
        let { name } = user; //구조 분해 할당 사용 name = user.name
        axios.post('/api/v1/users', {
            name
        })
            .then(function (response) {
                // response  
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function () {
                // 항상 실행
            });
    };

    return (
        <div>
            {/* <Typography component="h1" variant="h5">
                Sign up
            </Typography> */}
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
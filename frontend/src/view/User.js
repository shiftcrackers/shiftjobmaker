import React, { useEffect, useState } from 'react';

//hotkey rsc
const User = () => {
    const [userList, setuserList] = useState('');
    
    useEffect(() => {
        fetch('api/v1/users')
            .then(response => response.json())
            .then(res => {
                if(res.data.length > 0){
                    const list = res.data.map((item) => 
                    <li key = {item.id}>{item.name}</li>);
                    console.log(list);
                    setuserList(list);
                }
            });
    }, []);
    return (
        <div>
            <ul>
           {userList} 
           </ul>
        </div>
    );
};

export default User;
import { useLoaderData, useNavigate } from "react-router-dom";
import User from "../components/user";
import { useState } from "react";

const Users = () => {
    const userData = useLoaderData() || [];
    console.log(userData,'Not found users')
    const [users,setUsers] = useState(userData);
    const navigate = useNavigate();
    console.log(users);
    return (
        <div>
            <h2>All Users: {users.length}</h2>
            <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: '20px'
            }}
            >
                {
                    users.map((user,index) => <User key={index} user={user} userState = {{users,setUsers}} />)
                }
            </div>
            <button onClick={() => navigate('/')} style={{marginTop: '55px'}}>Go  to Add User</button>
        </div>
    );
};

export default Users;
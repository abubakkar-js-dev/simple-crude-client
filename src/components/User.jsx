/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

const User = ({user,userState}) => {

    const {users,setUsers} = userState;
    const navigate = useNavigate();

    const handleDelete = id =>{
        console.log('Delete it please',id);

      fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remainingUsers = users.filter(user=> user._id !== id);
        setUsers(remainingUsers);
      })
      .catch(err =>{
        console.error('failded to send request for deleting ',err)
      })
    }

    const btnStyle = {
      padding: '8px 16px',
      background: '#EEEa',
      borderRadius: '8px',
      color: 'black'
  }


    return (
        <div
        style={{
            border: '2px solid gray',
            borderRadius: '8px',
            padding: '15px'
        }}
        >
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          <div style={{display: 'flex', columnGap: '8px', justifyContent: 'center'}}>
          <button 
            style={btnStyle}
            onClick={()=> handleDelete(user._id)}
            >Delete</button>
            <button 
            
            style={btnStyle}
            onClick={()=> navigate(`/update/${user._id}`)}
            >update</button>
          </div>
        </div>
    );
};

export default User;
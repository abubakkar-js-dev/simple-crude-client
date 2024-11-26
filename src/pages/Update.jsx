import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData() || {};
  const id = loadedUser._id;
  const navigate = useNavigate();
  const [name,setName] = useState(loadedUser?.name || '');
  const [email,setEmail] = useState(loadedUser?.email || '');
  console.log(id);


  const handleSubmit = e =>{
    e.preventDefault();
    
    const updatedUser = {name,email};

    fetch(`http://localhost:5000/users/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          console.log('Updated data succesfully');
          navigate('/users');
        }
    })
  }

  return (
    <div>
      <h2>Update User ({loadedUser.name})</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}/>
        <br />
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} />
        <br /><br />
        <button>Update now</button>
      </form>
    </div>
  );
};

export default Update;

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        console.log(name,email);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name,email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
        });

    }
    return (
        <div>
            <h1>Simple Crud: </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" />
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <input type="submit" value="Add User" />
        </form>
        <button onClick={() => navigate('/users')} style={{marginTop: '55px'}}>Go  to All User</button>
        </div>
    );
};

export default Home;
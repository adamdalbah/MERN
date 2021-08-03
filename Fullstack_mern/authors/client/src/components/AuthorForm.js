import React, {useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import "../App.css";
const AuthorForm = (props) => {
    const {initialName} = props; 
    const [name, setName] = useState(initialName);

    const authorHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/author`,{
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>

            
            <form onSubmit={authorHandler}>
                <label>Name:</label><br/>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
               
                    <button type="submit" onClick={e => navigate("/")}>Submit</button>
                <Link to={"/"}>
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default AuthorForm

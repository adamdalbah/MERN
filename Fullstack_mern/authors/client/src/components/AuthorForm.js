import React, {useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import "../App.css";
const AuthorForm = (props) => {
    const {initialName} = props; 
    const [name, setName] = useState(initialName);
    const [errors, setErrors] = useState([]);

    const authorHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/author`,{
            name
        })
            .then((res) => {console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
    return (
        <div>

            
            <form onSubmit={authorHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Name:</label><br/>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                    <button type="submit" >Submit</button>
                <Link to={"/"}>
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default AuthorForm

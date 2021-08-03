import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import AuthorForm from '../components/AuthorForm';
    const Update = (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/author/:id`, author)
            .then(res => console.log(res))
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Edit this author:</p>
            {loaded && (
                <AuthorForm onSubmitAuthor ={updateAuthor} initialName ={author.name}/>
             )}
            
        </div>
    )
}

export default Update;

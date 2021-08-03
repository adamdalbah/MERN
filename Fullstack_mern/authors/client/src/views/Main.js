import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                 setAuthors(res.data)
                 setLoaded(true)
             })
            .catch(err => console.log(`there is error : ${err}`))
    },[])

    const removeAuthor = authorId =>{
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/new"}>
                Add an authors
            </Link>
            <p>We have quoted by:</p>
            {loaded && <AuthorList removeAuthor={removeAuthor}/>}
            
        </div>
    )
}

export default Main

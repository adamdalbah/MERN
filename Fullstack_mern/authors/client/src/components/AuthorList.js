import React,{useEffect, useState} from 'react';
import { Link } from '@reach/router';
import DeleteButton from '../views/DeleteButton';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
    })

    const removeAuthor = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            {authors.map((author, index) => {
                return(
                    <table>
                    <thead>
                        <th>Author</th>
                        <th>Actions available</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>
                                     <button>
                                           Edit
                                     </button>
                                </Link>
                                <DeleteButton authorId={author._id} successCallback={() => removeAuthor(author._id)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )
            })}
        </div>
    )
}

export default AuthorList

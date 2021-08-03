import React from 'react'
import AuthorForm from '../components/AuthorForm'
import {Link} from '@reach/router';

const Create = () => {
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm/>
        </div>
    )
}

export default Create

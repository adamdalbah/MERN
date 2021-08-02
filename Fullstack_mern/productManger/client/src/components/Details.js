import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link , navigate} from '@reach/router';

const Details = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/delproduct/${productId}`)
        navigate('http://localhost:3000/')
        
    }

    return (
        <div>
            
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/editproduct/${props.id}`}>Edit </Link>
            <button onClick={ e => {deleteProduct(props.id)}}>Delete</button>
            
            
        </div>
        
    )
}

export default Details

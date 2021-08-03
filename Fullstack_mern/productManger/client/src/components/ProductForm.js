import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProduct} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const titleHandler = e =>{
        setTitle(e.target.value);
    }

    const priceHandler = e =>{
        setPrice(e.target.value);
    }

    const descHandler = e =>{
        setDescription(e.target.value);
    }

    const productHandler = e => {
        e.preventDefault();
        onSubmitProduct({title, price, description});
        // axios.post('http://localhost:8000/api/products/new', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }


    return(
        <form onSubmit={productHandler}>
            <p>
                <label>Title:</label>
                <input type="text" onChange={titleHandler} value={title}/>
            </p>
            <p>
                <label>Price:</label>
                <input type="number" onChange={priceHandler} value={price}/>
            </p>
            <p>
                <label>Description:</label>
                <textarea onChange={descHandler} value={description}></textarea>
            </p>
            <input type="submit" value="Submit"/>

        </form>
    )
}

export default ProductForm;
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const Update = (props) => {
    const {id} = props;
    const [product, setProduct] = useState();
    // const [title, setTitle]= useState('');
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description);
            })
    }, [])

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/editproduct/${id}`, product)
            .then(res => console.log(res))
        // e.preventDefault();
        // axios.put(`http://localhost:8000/api/editproduct/${id}`,{
        //     title,
        //     price,
        //     description
        // })
        //     .then(res => console.log(res))
    }
    return (
        <div>
            {loaded && (
                <>
                    <ProductForm onSubmitProduct ={updateProduct} initialTitle ={product.title} initialPrice ={product.price} initialDescription ={product.description}/>
                    <DeleteButton productId={product._id} successCallback={() => navigate("/") }/>
                </>
                
            )}

            {/* <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={title} onChange={ e => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="number" name="price" value={price} onChange={e => {setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <textarea name="description" value={description} onChange={e => {setDescription(e.target.value)}}></textarea>
                </p>
                <input type="submit" value="Update"/>
            </form> */}
        </div>
    )
}

export default Update

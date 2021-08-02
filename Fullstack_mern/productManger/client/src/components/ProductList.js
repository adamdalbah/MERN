import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const ProductList = (props) => {
    const {removeProduct} = props;
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/delproduct/${productId}`)
            .then(res => {
                removeProduct(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, index)=>{
                return (
                    <>
                        <Link to={`/products/${product._id}`}><p key={index}>{product.title}</p></Link>     
                        {/* <p key={index}>{product.price}</p>
                        <p key={index}>{product.description}</p> */}
                        <button onClick={ e => {deleteProduct(product._id)}}>Delete</button>
                        <hr/>
                    </>
                )
            })}

        </div>
    )
}

export default ProductList;
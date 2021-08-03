import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../views/DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
    })

    const removeProduct = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    // const {removeProduct} = props;
    // const deleteProduct = (productId) => {
    //     axios.delete(`http://localhost:8000/api/delproduct/${productId}`)
    //         .then(res => {
    //             removeProduct(productId)
    //         })
    // }
    return (
        <div>
            {products.map((product, index) => {
               return(
                   <p key={index}>
                       <p>
                           Title: 
                        <Link to={"/editproduct/" + product._id}>
                           {product.title}
                       </Link>
                       </p>

                            <p>Price: {product.price}</p>
                           <p>Description: {product.description}</p>
                       |
                            <Link to={"/editproduct/" + product._id }>
                                Edit
                            </Link>
                      

                       <DeleteButton productId={product._id} successCallback={ () => removeProduct(product._id)}/>
                       <hr/>
                   </p>
               ) 
            })}
        </div>
        // <div>
        //     {props.products.map((product, index)=>{
        //         return (
        //             <>
        //                 <Link to={`/products/${product._id}`}><p key={index}>{product.title}</p></Link>     
        //                 {/* <p key={index}>{product.price}</p>
        //                 <p key={index}>{product.description}</p> */}
        //                 <button onClick={ e => {deleteProduct(product._id)}}>Delete</button>
        //                 <hr/>
        //             </>
        //         )
        //     })}

        // </div>
    )
}

export default ProductList;
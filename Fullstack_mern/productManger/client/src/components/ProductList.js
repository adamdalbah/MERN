import React from 'react';
import axios from 'axios';

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, index)=>{
                return (
                    <>
                        <p key={index}>{product.title}</p>
                        <p key={index}>{product.price}</p>
                        <p key={index}>{product.description}</p>
                        <hr/>
                    </>
                )
            })}

        </div>
    )
}

export default ProductList;
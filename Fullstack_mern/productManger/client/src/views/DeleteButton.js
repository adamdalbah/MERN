import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
    const {productId, successCallback} = props;
    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/delproduct/${productId}`)
            .then(res => {
                successCallback();
            })
    }

    return (
        <div>
            <button onClick={deleteProduct}>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton


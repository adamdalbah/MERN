import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
          .then(res=>{
            setProducts(res.data);
            setLoaded(true);
          })
          .catch(err => console.log(`there is error : ${err}`))
      }, []);

      const removeProduct = productId => {
        setProducts(products.filter(product => product._id != productId));
      }

      const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
          .then(res => {
            setProducts([...products, res.data]);
          })
      }

    return (
        <div>
            <ProductForm onSubmitProduct ={createProduct} initialTitle ="" initialPrice ="" initialDescription =""/>
            <hr/>
        {loaded && <ProductList products ={products} removeProduct={removeProduct}/>}
        </div>
    )
}

export default Main

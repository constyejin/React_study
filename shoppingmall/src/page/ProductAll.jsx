import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/constyejin/React_study/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row"></div>
        <div className="col-lg-12">
          <div className="product-card-list">
            {
              productList.map((item, index) => {
                return (
                  <ProductCard item={item} key={index} />
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default ProductAll

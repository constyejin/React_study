import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = 'http://localhost:4000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* <Container>
        <Row>

        </Row>
      </Container> */}
      <div className="container">
        <div className="row"></div>
          <div className="col-sm-4">
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
    </div>
  )
}

export default ProductAll

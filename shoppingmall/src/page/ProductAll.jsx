import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import SearcBox from '../component/SearcBox';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();


  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('searchQuery', searchQuery) ;
    let url = `https://my-json-server.typicode.com/constyejin/React_study/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className='collection-txt'>
            <p className='collection-txt-title'>Spring -Summer '24 COLLECTION</p>
            <p>
              As an artist, I instinctively began my journey. <br />
              I never considered following the same path as everyone  <br />
              else right from the start. Even though I might not be  <br />
              racing ahead of others, I persistently pursue a  <br />
              direction that remains true to my artistic vision. 
            </p>
          </div>

          <SearcBox />

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

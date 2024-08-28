import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../component/ProductCard';
import SearcBox from '../component/SearcBox';

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || '';
    dispatch(productAction.getProducts(searchQuery))
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

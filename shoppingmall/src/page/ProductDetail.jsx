import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/constyejin/React_study/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <div>
      <h1>상품 디테일 페이지</h1>
    </div>
  )
}

export default ProductDetail

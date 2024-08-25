import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/constyejin/React_study/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])

  return (
    <div className='container'>
      <div className="row">
        <div className='col-lg-12 col-sm-4'>
          <div className='detail'>
            <div className='detail-img'>
              <img src={product?.img.imgCard} alt={product?.title} />
            </div>

            <div className='detail-info'>
              <h5>{product?.title}</h5>
              <p className='detail-info-price'>{product?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} ₩</p>

              <div className='detail-delivery'>
                <div>
                  <b>배송방법</b>
                  <span>택배</span>
                </div>

                <div>
                  <b>배송비</b>
                  <span>3,000원 (80,000원 이상 무료배송)</span>
                </div>
              </div>

              <form action="" className='detail-size'>
                <label htmlFor="size">SIZE *</label>
                <select name="" id="size" className='detail-info-size'>
                  <option value="">SIZE (필수)</option>
                  {
                    product?.size.map((item, index) => <option value={item} key={index}>{item}</option>)
                  }
                </select>
              </form>

              <div className='detail-btn'>
                <button className='detail-btn-buy' type='button'>구매하기</button>
                <button className='detail-btn-cart' type='button'>장바구니</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

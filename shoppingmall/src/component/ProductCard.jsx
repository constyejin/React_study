import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/:{item.id}`);
  }
  const price = item?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;

  return (
    <div className='product-card' onClick={showDetail}>
      <div className='product-card-img'>
        <img className='img' src={item?.img.imgCard} alt={item?.title} />
        <img className='img-hover' src={item?.img.imgHover} alt={item?.title} />
      </div>

      <div className='product-card-info'>
        <p className='product-card-title'>{item?.title}</p>
        <p className='product-card-price'>{price} ₩</p>
      </div>
    </div>
  )
}

export default ProductCard

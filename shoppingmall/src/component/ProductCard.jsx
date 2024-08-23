import React from 'react'

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className='product-card'>
      <div className='product-card-img'>
        <img src={item?.img} alt={item?.title} />
      </div>

      <div className='product-card-info'>
        <h4>{item?.title}</h4>
        <p className='product-card-price'>{item?.price}원</p>
      </div>
    </div>
  )
}

export default ProductCard

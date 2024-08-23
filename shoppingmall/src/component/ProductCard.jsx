import React from 'react'

const ProductCard = ({ item }) => {
  const price = item?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;

  return (
    <div className='product-card'>
      <div className='product-card-img'>
        <img src={item?.img} alt={item?.title} />
      </div>

      <div className='product-card-info'>
        <p className='product-card-title'>{item?.title}</p>
        <p className='product-card-price'>{price} ₩</p>
      </div>
    </div>
  )
}

export default ProductCard

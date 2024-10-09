import React from 'react';

function Cards({item}) {
  return (
    <div className='card'>
      <section className='column-left'>
        <img className="card-img" src={item.coverImg} alt="images" />
      </section>
      
      <section className='column-right'>
        <span className='material-symbols-outlined'>location_on</span>
        <span className="card-country">{item.country} </span>
        <a href={item.googleMapLink}>View on Google Maps</a>
        <h3 className="card-country-title">{item.title}</h3>
        <h4 className="card-date">{item.date}</h4>
        <p>{item.description}</p>
        <span>Read more..</span>
    </section>
    </div>
  )
}

export default Cards;
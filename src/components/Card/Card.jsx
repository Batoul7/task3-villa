import React from 'react';
import './Card.css'

const Card = ({data}) => {
  return (
    <>
      {data.map((item,index)=>(
        <div key={index} className='card'>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="price">
              <span>{item.desc}</span>
              <span>{item.price}</span>
            </div>
            <h3>{item.title}</h3>
            <div className="card-info">
              <p>Bedrooms: <span>{item.bedrooms}</span></p>
              <p>Bathrooms: <span>{item.bathrooms}</span></p>
              <p>Area: <span>{item.area} m2</span></p>
              <p>Floor: <span>{item.floor}</span></p>
              <p>Parking: <span>{item.parking}</span></p>
            </div>
            <div className='foot'>
              <a>Schedule a visit</a>
            </div>
        </div>  
      ))}
     </>
  )
}

export default Card

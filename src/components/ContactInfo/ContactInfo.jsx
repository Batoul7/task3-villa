import React from 'react'
import './ContactInfo.css'

export default function ContactInfo({data}) {
  return (
      <div className="call">
          {data.map((data, index) => (
          <div key={index} className='one-box'>
            <div className="img">
                <img src={data.image}/> 
            </div>
            <div className="desc">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
          </div> 
          ))}
      </div>
  )
}

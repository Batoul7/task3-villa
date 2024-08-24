import React from 'react';
import './box.css'

const Box = ({info}) => {
  return (
      <ul className='list'>
          {info.map((info, index) => (
                <div key={index} className='one-box'>
                  <div className="img">
                    <img src={info.image}/> 
                  </div>
                  <div className="desc">
                        <h3>{info.title}</h3>
                        <p>{info.desc}</p>
                    </div>
                </div>
              
          ))} 
      </ul>
  )
}

export default Box;

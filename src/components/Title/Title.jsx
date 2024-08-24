import React from 'react';
import './title.css'

const Title = (props) => {
  return (
    <div className='title'>
      <span>{props.title}</span>
      <h2>{props.h2}</h2>
    </div>
  )
}

export default Title;
